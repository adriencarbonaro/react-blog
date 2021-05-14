import React                 from 'react';

function CustomLink (props) {
	const icon_classes = {
		"tripadvisor"  : "fab fa-tripadvisor",
		"airbnb"       : "fab fa-airbnb",
		"monument"     : "fas fa-landmark",
		"hotel"        : "fas fa-hotel",
		"wine"         : "fas fa-wine-glass-alt",
	}
	
	return (
		<a
		  class={props.type}
		  target="_blank"
		  href={props.link}
		>
			<i class={icon_classes[props.type]}/>
			{' ' + props.name}
		</a>
	);
}

export default CustomLink;
