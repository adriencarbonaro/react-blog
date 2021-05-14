import React from 'react';
import ComponentScrollTop from '../../ComponentScrollTop';

/* CSS */
import '../../../css/App.css';

export default class Corse extends ComponentScrollTop {
	render () {
		const class_name = "corse";
		return <h1 className={"banner-title " + class_name}>Corse</h1>;
	}
}
