import mapboxgl, {
    LngLat,
    NavigationControl
}                             from 'mapbox-gl';
import {
    useEffect,
    useRef,
    useState
}                             from 'react';

import "mapbox-gl/dist/mapbox-gl.css";
import "../css/Maps.css";

mapboxgl.accessToken          = 'pk.eyJ1IjoiY2FyYm9uYWRyIiwiYSI6ImNsanp2bzIzZTAxcGMzcW81aXc3YnYxaTkifQ.sNkNCk2bC4d5ybkB0surTQ';

const MAP_ZOOM                = 9;
const MAP_STYLE_STREET        = "mapbox://styles/mapbox/streets-v12"
const MAP_CONTAINER_CLASS     = "map-container";

const MARKER_COLOR            = "#ffffff";

export function Map (props) {
    const mapContainer        = useRef(null);
    const map                 = useRef(null);
    const [ lng, setLng ]     = useState(props.loc.lng);
    const [ lat, setLat ]     = useState(props.loc.lat);
    const [ zoom, setZoom ]   = useState(MAP_ZOOM);

    useEffect(() => {
        if (map.current) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: MAP_STYLE_STREET,
            center: new LngLat(lng, lat),
            zoom: zoom,
            interactive: true,
        })
          .addControl(new NavigationControl());

        map.current.on('load', () => {
            map.current.addSource('places', {
                // This GeoJSON contains features that include an "icon"
                // property. The value of the "icon" property corresponds
                // to an image in the Mapbox Streets style's sprite.
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: [
                        {
                            type: 'Feature',
                            properties: {
                                description: '<strong class="abcde"">Puy Pariou</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
                                icon: 'mountain'
                            },
                            geometry: {
                                type: 'Point',
                                coordinates: [2.970278, 45.795556]
                            }
                        },
                    ]
                }
            });

            // Add a layer showing the places.
            map.current.addLayer({
                'id': 'places',
                'type': 'symbol',
                'source': 'places',
                'layout': {
                    'icon-image': ['get', 'icon'],
                    'icon-allow-overlap': true,
                }
            });

            // When a click event occurs on a feature in the places layer, open a popup at the
            // location of the feature, with description HTML from its properties.
            map.current.on('click', 'places', (e) => {
                // Copy coordinates array.
                const coordinates = e.features[0].geometry.coordinates.slice();
                const description = e.features[0].properties.description;

                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map.current);
            });

            // Create a popup, but don't add it to the map yet.
            const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
            });

            map.current.on('mouseenter', 'places', (e) => {
                // Change the cursor style as a UI indicator.
                map.current.getCanvas().style.cursor = 'pointer';

                // Copy coordinates array.
                const coordinates = e.features[0].geometry.coordinates.slice();
                const description = e.features[0].properties.description;

                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                // Populate the popup and set its coordinates
                // based on the feature found.
                popup.setLngLat(coordinates).setHTML(description).addTo(map.current);
            });

            map.current.on('mouseleave', 'places', () => {
                map.current.getCanvas().style.cursor = '';
                popup.remove();
            });

            map.current.on('move', () => {
                setLng(map.current.getCenter().lng.toFixed(4));
                setLat(map.current.getCenter().lat.toFixed(4));
                setZoom(map.current.getZoom().toFixed(2));
            });

            // new mapboxgl.Marker({
            //     color: MARKER_COLOR,
            //     draggable: false,
            //     anchor: "bottom",

            // })
            //     .setLngLat(new LngLat(lng, lat))
            //     .addTo(map.current);
        });
    });

    return (
        <div>
            <div ref={mapContainer} className={MAP_CONTAINER_CLASS} />
        </div>
    );
}
