import React, { Component }  from 'react';
import { Version }           from './Version';

/* CSS */
import '../css/Footer.css';

class Footer extends Component {
	render() {
		return (
			<>
			<div className='footer-margin'></div>
			<div className='footer-container'>
				<section class='social-media'>
					<div class='social-media-wrap'>
						<small class='website-rights'>Fait avec <i className="fa fa-heart"></i> par Camille & Adrien</small>
						<a class='social-icon-link' rel="noopener noreferrer" target='_blank' href='https://www.instagram.com/le_petit_bonnet_rose/'>
							<i class='fab fa-instagram' />
						</a>
						<small class='website-version'><Version /></small>
					</div>
				</section>
			</div>
			</>
		);
	}
}

export default Footer;
