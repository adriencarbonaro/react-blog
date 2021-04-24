import React from 'react';
import ComponentScrollTop from '../../ComponentScrollTop';
import { Story } from "../../Story"
import { TitleBloc } from "../../TitleBloc"
import { PhotoSingle } from "../../Photos"
import { PhotoGallery } from "../../Photos"
import { Images } from "../../../assets/Images"

/* CSS */
import '../../../css/App.css';

export default class Crete extends ComponentScrollTop {
	render () {
		return (
			<div>
				<h1 className='crete'>Crète</h1>
			</div>
		);
	}
}
