import React from 'react';
import ComponentScrollTop from '../../ComponentScrollTop';
import { Story } from "../../Story"
import { TitleBloc } from "../../TitleBloc"
import { Content } from '../../../assets/Content';

/* CSS */
import '../../../css/App.css';

export default class Crete extends ComponentScrollTop {
	render () {
		return (
			<div>
				<h1 className='crete'>{Content.content_crete_banner}</h1>
				<TitleBloc
				  title={Content.content_crete_title}
				  subtitle={Content.content_crete_subtitle}
				/>
				<Story
				  text={Content.content_crete_0}
				/>
			</div>
		);
	}
}
