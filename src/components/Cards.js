import React from 'react';
import { useState } from 'react';
import CardItem from './CardItem';
import SVGGlobe from './SVGGlobe';
import SVGFrance from './SVGFrance';

/* Assets */
import { Strings, Trips }    from '../assets/Strings';
import { Images }            from '../assets/Images';

/* CSS */
import '../css/Cards.css';

function Cards() {
	const [scroll_state, setScrollState]      = useState(false);

	const handleScroll = () => {
		let scrollY = window.scrollY;
		setScrollState(scrollY > (window.innerHeight * 0.95))
	}

	const classWithScroll = (classname) => {
		return scroll_state ? classname + " scrolled" : classname
	}

	window.addEventListener('scroll', handleScroll)

	return (
		<div className='cards'>
			<h1>{Strings.cards_header_title}</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<SVGGlobe className={classWithScroll()}/>
					<ul className='cards__items'>
						<CardItem
							src={Images.img_crete}
							text={Trips.crete}
							label='Holiday'
							path='/crete'
						/>
						<CardItem
							src={Images.img_berlin}
							text={Trips.berlin}
							label='Weekend'
							path='/berlin'
						/>
					</ul>
					<SVGFrance className={classWithScroll()}/>
					<ul className='cards__items'>
						<CardItem
							src={Images.img_bourgogne}
							text={Trips.bourgogne}
							label='Insolite'
							path='/bourgogne'
						/>
						<CardItem
							src={Images.img_bretagne}
							text={Trips.bretagne}
							label='Weekend'
							path='/bretagne'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src={Images.img_perche}
							text={Trips.perche}
							label='Weekend'
							path='/perche'
						/>
						<CardItem
							src={Images.img_bourges}
							text={Trips.bourges}
							label='Weekend'
							path='/bourges'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;