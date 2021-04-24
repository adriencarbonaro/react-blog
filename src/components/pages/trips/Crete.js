import React from 'react';
import ComponentScrollTop from '../../ComponentScrollTop';
import { Story } from "../../Story"
import { TitleBloc } from "../../TitleBloc"
import { Content } from '../../../assets/Content';
import { PhotoSingle } from "../../Photos"
import { PhotoGallery } from "../../Photos"
import { Images } from "../../../assets/Images"

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
				<PhotoSingle
				  src={Images.img_crete}
				/>
				<Story
				  text={Content.content_crete_0}
				/>
				<PhotoGallery
				  src_1={Images.img_berlin}
				  src_2={Images.img_crete}
				  src_3={Images.img_bourgogne}
				/>
			</div>
		);
	}
}
