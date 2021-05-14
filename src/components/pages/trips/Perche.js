import React from 'react';
import ComponentScrollTop from '../../ComponentScrollTop';

/* CSS */
import '../../../css/App.css';

export default class Perche extends ComponentScrollTop {
	render () {
		const class_name = "perche";
		return <h1 className={"banner-title " + class_name}>Perche</h1>;
	}
}
