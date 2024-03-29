import React, { Component }  from 'react';
import { Button }            from './Button';
import { Link }              from 'react-router-dom';

/* Assets */
import { Strings }           from '../assets/Strings';

/* CSS */
import '../css/Footer.css';

class Footer extends Component {
	render() {
		return (
			<div className='footer-container'>
				<section class='social-media'>
					<div class='social-media-wrap'>
						<small class='website-rights'>Fait avec <i className="fa fa-heart"></i> par Camille & Adrien</small>
						<a class='social-icon-link' target='_blank' href='https://www.instagram.com/le_petit_bonnet_rose/'>
							<i class='fab fa-instagram' />
						</a>
					</div>
				</section>
			</div>
		);
	}
}

export default Footer;
