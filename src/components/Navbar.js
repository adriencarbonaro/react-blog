import React                 from 'react';
import { useState,
         useEffect }         from 'react';
import { Link }              from 'react-router-dom';
import { Button }            from './Button';

/* Assets */
import { Strings }           from '../assets/Strings';

function Navbar() {
	const [click, setClick]   = useState(false);
	const [button, setButton] = useState(true);

	const handleClick     = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		setButton(!(window.innerWidth <= 960))
	}

	useEffect(() => {
		showButton()
	}, [])

	window.addEventListener('resize', showButton)

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						{Strings.navbar_title} <i className="fas fa-paw"></i>
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								<i className="fas fa-home"></i>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/services" className="nav-links" onClick={closeMobileMenu}>
								A propos de nous
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/products" className="nav-links" onClick={closeMobileMenu}>
								Codes Promos
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
								Sign Up
							</Link>
						</li>
					</ul>
					{button && <Button buttonBaseStyle='btn-navbar' buttonStyle='btn-outline'>SIGN UP</Button>}
				</div>
			</nav>

		</>
	)
}

export default Navbar
