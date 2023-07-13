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
const MAP_STYLE               = "mapbox://styles/carbonadr/clk1mesol00dl01pe1wkifjzk";
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
            container         : mapContainer.current,
            style             : MAP_STYLE,
            center            : new LngLat(lng, lat),
            zoom              : zoom,
            interactive       : true,
        }).addControl(new NavigationControl());

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });

        new mapboxgl.Marker({
            color             : MARKER_COLOR,
            draggable         : true
        }).setLngLat(new LngLat(lng, lat))
          .addTo(map.current);
    });

    return (
        <div>
            <div ref={mapContainer} className={MAP_CONTAINER_CLASS} />
        </div>
    );
}
