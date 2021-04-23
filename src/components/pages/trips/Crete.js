import React from 'react';
import ComponentScrollTop from '../../ComponentScrollTop';
import { Split } from "../../Split"
import { Pane } from "../../Pane"
import { TitleBloc } from "../../TitleBloc"
import { Content } from '../../../assets/Content';

/* CSS */
import '../../../css/App.css';

export default class Crete extends ComponentScrollTop {
	render () {
		return (
			<div>
				<h1 className='crete'>Crête</h1>
				<TitleBloc
				  title="1 semaine en Crête"
				  subtitle="Le pays des Dieux"
				/>
				<Split
				  left = {
				    <Pane
				      type="text"
				      text={Content.content_crete_1}
				    />
				  }
				  right = {
				    <Pane
				      type="text"
				      text="test"
				    />
				  }
				/>
			</div>
		);
	}
}
