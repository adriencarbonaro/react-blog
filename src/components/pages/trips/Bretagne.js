import React from 'react';
import ComponentScrollTop from '../../ComponentScrollTop';

/* CSS */
import '../../../css/App.css';

export default class Bretagne extends ComponentScrollTop {
	render () {
		const class_name = "bretagne";
		return <h1 className={"banner-title " + class_name}>Bretagne</h1>;
	}
}
