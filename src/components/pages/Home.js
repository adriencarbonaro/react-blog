import React                 from 'react';
import ComponentScrollTop    from '../ComponentScrollTop';
import Cards                 from '../Cards';
import Banner                from '../Banner';

/* CSS */
import '../../css/App.css';

export default class Home extends ComponentScrollTop {
	render () {
		return (
		<>
			<Banner />
			<Cards />
		</>
		);
	}
}
