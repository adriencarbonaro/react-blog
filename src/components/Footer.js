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
				<section className='social-media'>
					<div className='social-media-wrap'>
						<small className='website-rights'>Fait avec <i className="fa fa-heart"></i> par Camille & Adrien</small>
						<a className='social-icon-link' rel="noopener noreferrer" target='_blank' href='https://www.instagram.com/le_petit_bonnet_rose/'>
							<i className='fab fa-instagram' />
						</a>
						<small className='website-version'><Version /></small>
					</div>
				</section>
			</div>
			</>
		);
	}
}

export default Footer;
