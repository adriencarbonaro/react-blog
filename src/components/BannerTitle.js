import React                  from 'react';

/* CSS */
import '../css/BannerTitle.css';

export function BannerTitle(props) {
	return (
		<div className={"banner-title " + props.class}>
			<div className="banner-title-elem banner-title-text color">{props.title}</div>
			<div className="banner-title-elem banner-title-overlay"></div>
			<img
			  className="banner-title-elem banner-title-img"
			  alt="banner_title"
			  src={`https://nid-de-poule.s3.eu-west-3.amazonaws.com/photos/cards/img-${props.class}.jpg`}/>
		</div>
	);
}
