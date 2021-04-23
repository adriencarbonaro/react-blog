import React from 'react';
import ComponentScrollTop from '../../ComponentScrollTop';
import { Story } from "../../Story"
import { TitleBloc } from "../../TitleBloc"
import { Content } from '../../../assets/Content';

/* CSS */
import '../../../css/App.css';

export default class Berlin extends ComponentScrollTop {
	render () {
		return (
			<div>
				<h1 className='berlin'>{Content.content_berlin_banner}</h1>
				<TitleBloc
					title={Content.content_berlin_title}
					subtitle={Content.content_berlin_subtitle}
				/>
				<Story
					text={Content.content_berlin_0}
				/>
			</div>
		)
	}
}
