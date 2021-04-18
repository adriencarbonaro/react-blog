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
				<section className='footer-subscription'>
					<p className='footer-subscription-heading'>
						{Strings.footer_news_title}
					</p>
					<div className='input-areas'>
						<form>
							<input
							className='footer-input'
							name='email'
							type='email'
							placeholder={Strings.footer_news_mail_placeholder}
							/>
							<Button buttonStyle='btn--outline'>{Strings.footer_news_mail_send}</Button>
						</form>
					</div>
				</section>
				<section class='social-media'>
					<div class='social-media-wrap'>
						<small class='website-rights'>Fait avec <i className="fa fa-heart"></i> par Camille & Adrien</small>
						<div class='social-icons'>
							<Link
							class='social-icon-link facebook'
							to='/'
							target='_blank'
							aria-label='Facebook'
							>
								<i class='fab fa-facebook-f' />
							</Link>
							<Link
							class='social-icon-link instagram'
							to='/'
							target='_blank'
							aria-label='Instagram'
							>
								<i class='fab fa-instagram' />
							</Link>
							<Link
							class='social-icon-link youtube'
							to='/'
							target='_blank'
							aria-label='Youtube'
							>
								<i class='fab fa-youtube' />
							</Link>
							<Link
							class='social-icon-link twitter'
							to='/'
							target='_blank'
							aria-label='Twitter'
							>
								<i class='fab fa-twitter' />
							</Link>
							<Link
							class='social-icon-link linkedin'
							to='/'
							target='_blank'
							aria-label='LinkedIn'
							>
								<i class='fab fa-linkedin' />
							</Link>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Footer;