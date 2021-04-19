import React from 'react';
import ComponentScrollTop from '../../ComponentScrollTop';
import { Split } from "../../Split"

/* CSS */
import '../../../css/App.css';

export default class Crete extends ComponentScrollTop {
	render () {
		return (
			<div>
				<h1 className='crete'>Crête</h1>
				<Split>
					<p>a</p>
					<p>b</p>
				</Split>
			</div>
		);
	}
}
