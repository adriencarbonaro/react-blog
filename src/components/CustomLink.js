import React                 from 'react';

import '../css/CustomLink.css';

function CustomLink (props) {
	const icon_classes = {
		"tripadvisor"  : "fa  fa-search",
		"airbnb"       : "fab fa-airbnb",
		"maps"         : "fas fa-map",
		"monument"     : "fas fa-landmark",
		"hotel"        : "fas fa-hotel",
		"wine"         : "fas fa-wine-glass-alt",
		"tree"         : "fas fa-tree",
		"bicycle"      : "fas fa-bicycle",
		"scooter"      : "fas fa-motorcycle",
		"store"        : "fas fa-store",
	}

	return (
		<a
		  className={"custom-link " + props.type}
		  target="_blank"
		  rel="noreferrer"
		  href={props.link}
		>
			<i className={icon_classes[props.type]}/>
			{' ' + props.name}
		</a>
	);
}

export function TripAdvisorLink (props) {
	return CustomLink({ ...props, type: "tripadvisor" });
}

export function AirbnbLink (props) {
	return CustomLink({ ...props, type: "airbnb" });
}

export function MapsLink (props) {
	return CustomLink({ ...props, type: "maps" });
}

export default CustomLink;
