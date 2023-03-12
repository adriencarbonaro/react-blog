import React                 from 'react';
import { Button }            from './Button';

/* Assets */
import { Strings }           from '../assets/Strings';

/* CSS */
import '../css/App.css';
import '../css/Banner.css';

function Banner() {
	return (
		<div className='banner-container'>
			<video className='video-banner' src="https://nid-de-poule.s3.eu-west-3.amazonaws.com/videos/banner.mp4" type="video/mp4" autoPlay loop muted />
			<h1>Malte</h1>
			<p>{Strings.banner_msg}</p>
			{/* <div className='banner-btns'>
				<Button
					className='btns'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
					link='/corse'
				>
					LET'S GO
				</Button>
			</div> */}
		</div>
	);
}

export default Banner;
