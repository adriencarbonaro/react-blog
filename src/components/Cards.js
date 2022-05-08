import React from 'react';
import { useState } from 'react';
import CardItem from './CardItem';
import SVGLocation from './SVGLocation';

/* Assets */
import { Paths }              from '../assets/Paths';
import { Images }            from '../assets/Images';
import {
	Countries,
	Strings,
	Trips
}                             from '../assets/Strings';

/* CSS */
import '../css/Cards.css';

function Cards() {
	const [scroll_state_globe,  setScrollStateGlobe]   = useState(false);
	const [scroll_state_france, setScrollStateFrance]  = useState(false);

	const handleScroll = () => {
		let scrollY = window.scrollY;
		setScrollStateGlobe(scrollY > (window.innerHeight * 0.95))
		setScrollStateFrance(scrollY > (window.innerHeight * 0.95) + 300)
	}

	const classWithScroll = (scroll_state, classname) => {
		return scroll_state ? classname + " scrolled" : classname
	}

	window.addEventListener('scroll', handleScroll)

	return (
		<div className='cards'>
			<h1>{Strings.cards_header_title}</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<SVGLocation className={classWithScroll(scroll_state_globe, "globe")}/>
					<ul className='cards__items'>
						<CardItem
							src={Images.img_amsterdam}
							text={Countries.netherlands}
							label='Holiday'
							path={Paths.netherlands}
						/>
						<CardItem
							src={Images.img_crete}
							text={Countries.greece}
							label='Holiday'
							path={Paths.greece}
						/>
						<CardItem
							src={Images.img_berlin}
							text={Countries.germany}
							label='Holiday'
							path={Paths.germany}
						/>
					</ul>
					<SVGLocation className={classWithScroll(scroll_state_france, "france")}/>
					<ul className='cards__items'>
						<CardItem
							src={Images.img_trouville}
							text={Trips.trouville}
							label='Weekend'
							path={Paths.trouville}
						/>
						<CardItem
							src={Images.img_bourgogne}
							text={Trips.bourgogne}
							label='Insolite'
							path={Paths.bourgogne}
						/>
						<CardItem
							src={Images.img_bretagne}
							text={Trips.bretagne}
							label='Weekend'
							path={Paths.bretagne}
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src={Images.img_perche}
							text={Trips.perche}
							label='Weekend'
							path={Paths.perche}
						/>
						<CardItem
							src={Images.img_bourges}
							text={Trips.bourges}
							label='Weekend'
							path={Paths.bourges}
						/>
						<CardItem
							src={Images.img_etretat}
							text={Trips.etretat}
							label='Weekend'
							path={Paths.etretat}
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src={Images.img_gacilly}
							text={Trips.gacilly + " & " + Trips.mans}
							label='Weekend'
							path={Paths.gacilly}
						/>
						<CardItem
							src={Images.img_honfleur}
							text={Trips.honfleur}
							label='Weekend'
							path={Paths.honfleur}
						/>
						<CardItem
							src={Images.img_corse}
							text={Trips.corse}
							label='Vacances'
							path={Paths.corse}
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
