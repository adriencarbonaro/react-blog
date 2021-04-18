import React                 from 'react';
import { Button }            from './Button';

/* Assets */
import { Strings }           from '../assets/Strings';
import { Videos }            from "../assets/Images";

/* CSS */
import '../css/App.css';
import '../css/Banner.css';

function Banner() {
	return (
		<div className='banner-container'>
			<video src={Videos.video_corse} autoPlay loop muted />
			<h1>CORSE 2021</h1>
			<p>{Strings.banner_msg}</p>
			<div className='banner-btns'>
				<Button
					className='btns'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
					link='/corse'
				>
					LET'S GO
				</Button>
				<Button
					className='btns'
					buttonStyle='btn--primary'
					buttonSize='btn--large'
					onClick={console.log('hey')}
				>
					VOIR LE FILM <i className='far fa-play-circle' />
				</Button>
			</div>
		</div>
	);
}

export default Banner;