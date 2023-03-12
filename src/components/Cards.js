import React from 'react';
import { useState } from 'react';
import CardItem from './CardItem';
import SVGLocation from './SVGLocation';

/* Assets */
import { Paths }              from '../assets/Paths';
import {
	Countries,
	Strings,
	Trips
}                             from '../assets/Strings';
import Consts                 from '../consts';

/* CSS */
import '../css/Cards.css';

function Cards() {
	const [scroll_state_globe,  setScrollStateGlobe]   = useState(false);
	const [scroll_state_france, setScrollStateFrance]  = useState(false);

	const photos = Consts.AWS_URL + "photos/cards/";

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
							src={photos + "img-amsterdam.jpg"}
							text={Countries.netherlands}
							label='Holiday'
							path={Paths.netherlands}
						/>
						<CardItem
							src={photos + "img-crete.jpg"}
							text={Countries.greece}
							label='Holiday'
							path={Paths.greece}
						/>
						<CardItem
							src={photos + "img-berlin.jpg"}
							text={Countries.germany}
							label='Holiday'
							path={Paths.germany}
						/>
					</ul>
					<SVGLocation className={classWithScroll(scroll_state_france, "france")}/>
					<ul className='cards__items'>
						<CardItem
							src={photos + "img-trouville.jpg"}
							text={Trips.trouville}
							label='Weekend'
							path={Paths.trouville}
						/>
						<CardItem
							src={photos + "img-bourgogne.jpg"}
							text={Trips.bourgogne}
							label='Insolite'
							path={Paths.bourgogne}
						/>
						<CardItem
							src={photos + "img-bretagne.jpg"}
							text={Trips.bretagne}
							label='Weekend'
							path={Paths.bretagne}
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src={photos + "img-perche.jpg"}
							text={Trips.perche}
							label='Weekend'
							path={Paths.perche}
						/>
						<CardItem
							src={photos + "img-bourges.jpg"}
							text={Trips.bourges}
							label='Weekend'
							path={Paths.bourges}
						/>
						<CardItem
							src={photos + "img-etretat.jpg"}
							text={Trips.etretat}
							label='Weekend'
							path={Paths.etretat}
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src={photos + "img-gacilly.jpg"}
							text={Trips.gacilly + " & " + Trips.mans}
							label='Weekend'
							path={Paths.gacilly}
						/>
						<CardItem
							src={photos + "img-honfleur.jpg"}
							text={Trips.honfleur}
							label='Weekend'
							path={Paths.honfleur}
						/>
						<CardItem
							src={photos + "img-corse.jpg"}
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
