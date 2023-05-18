import React                 from 'react';
import { Button }            from './Button';

/* Assets */
import { Strings }           from '../assets/Strings';

/* CSS */
import '../css/App.css';
import '../css/Banner.css';
import '../css/BannerHero.css';

function Banner() {
	return (
		<div className='banner-hero'>
			<div class="banner-hero-elem banner-hero-content">
				<div className='banner-hero-title'>Auvergne</div>
				<div className='banner-hero-desc'>{Strings.banner_msg}</div>
				{<div className='banner-hero-btns'>
					<Button
					  className='btns'
					  buttonStyle='btn--outline'
					  buttonSize='btn--large'
					  link='/auvergne'
					>
						{Strings.banner_btn}
					</Button>
				</div>}
			</div>
			<div class="banner-hero-elem banner-hero-overlay"></div>
			<video className='banner-hero-elem banner-hero-video' src="https://nid-de-poule.s3.eu-west-3.amazonaws.com/videos/banner_auvergne_3.mp4" type="video/mp4" autoPlay loop muted />
		</div>
	);
}

export default Banner;
