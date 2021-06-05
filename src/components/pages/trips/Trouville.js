import React from 'react';
import ComponentScrollTop from '../../ComponentScrollTop';
import { Story } from "../../Story"
import { TitleBloc } from "../../TitleBloc"
import SVGLocation from '../../SVGLocation';

/* CSS */
import '../../../css/App.css';
import '../../../css/trips/Trips.css'
import '../../../css/trips/Trouville.css'

export default class Trouville extends ComponentScrollTop {
	render () {
		const class_name = "trouville";
		return (
			<div>
				<h1 className={"banner-title " + class_name}>Trouville</h1>
				<SVGLocation className={class_name}/>
				<TitleBloc
					title="Week-end Normand"
					subtitle="Un amour à la plage"
					accent={class_name}
				/>
			</div>
		)
	}
}

