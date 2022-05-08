import React                 from 'react';
import { useState }          from 'react';
import { Link }              from 'react-router-dom';
import { Button }            from './Button';
import SVGLogo               from './SVGLogo';

/* Assets */
import '../css/logo.css'
import {
	Countries,
	Trips
}                            from '../assets/Strings';
import { Paths }             from '../assets/Paths';

function Navbar() {
	const [click_menu, setClickMenu]          = useState(false);
	const [click_submenu_1, setClickSubMenu1] = useState(false);
	const [click_submenu_2, setClickSubMenu2] = useState(false);
	const [scroll_state, setScrollState]      = useState(false);

	const handleClickMenu = () => setClickMenu(!click_menu);
	const closeMobileMenu = () => setClickMenu(false);

	const handleScroll = () => {
		let scrollY = window.scrollY;
		setScrollState(scrollY > 200)
	}

	const handleClickSubMenu = (click_menu) => {
		if (click_menu === "click_submenu_1") {
			setClickSubMenu1(!click_submenu_1)
		}
		if (click_menu === "click_submenu_2") {
			setClickSubMenu2(!click_submenu_2)
		}
	}

	const classWithScroll = (classname) => {
		return scroll_state ? classname + " scrolled" : classname
	}

	window.addEventListener('scroll', handleScroll)

	return (
		<>
			<nav className={click_menu ? classWithScroll("navbar nav-mob-active") : classWithScroll("navbar")}>
				<div className="navbar-container">
					<div className="menu-icon" onClick={handleClickMenu}>
						<i className={click_menu ? classWithScroll("fas fa-times") : classWithScroll("fas fa-bars")} />
					</div>
					<Link to="/" className={classWithScroll("navbar-logo")} onClick={closeMobileMenu}>
						<SVGLogo
						  fontClass={classWithScroll("logo-font")}
						/>
					</Link>
					<ul className={click_menu ? "nav-menu active" : "nav-menu"}>
						<li className={click_submenu_1 ? "nav-item active" : "nav-item"} onClick={(e) => handleClickSubMenu("click_submenu_1")}>
							<div className={classWithScroll("nav-links")}>
								France <i class="fas fa-chevron-down"></i>
							</div>
							<ul className={classWithScroll("nav-submenu")}>
								<li className="submenu-item"><Link to="/bourgogne" className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Bourgogne</Link></li>
								<li className="submenu-item"><Link to="/bourges" className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Bourges</Link></li>
								<li className="submenu-item"><Link to="/bretagne" className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Bretagne</Link></li>
								<li className="submenu-item"><Link to="/corse" className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Corse</Link></li>
								<li className="submenu-item"><Link to="/etretat" className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Etretat</Link></li>
								<li className="submenu-item"><Link to="/gacilly" className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Gacilly</Link></li>
								<li className="submenu-item"><Link to="/honfleur" className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Honfleur</Link></li>
								<li className="submenu-item"><Link to="/perche" className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Perche</Link></li>
								<li className="submenu-item"><Link to="/trouville" className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Trouville</Link></li>
							</ul>
						</li>
						<li className={click_submenu_2 ? "nav-item active" : "nav-item"} onClick={(e) => handleClickSubMenu("click_submenu_2")}>
							<div to="/products" className={classWithScroll("nav-links")}>
								Monde <i class="fas fa-chevron-down"></i>
							</div>
							<ul className={classWithScroll("nav-submenu")}>
								<li className="submenu-item"><Link to="/amsterdam" className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Amsterdam</Link></li>
								<li className="submenu-item"><Link to="/berlin" className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Berlin</Link></li>
								<li className="submenu-item"><Link to="/crete" className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Crète</Link></li>
							</ul>
						</li>
						<li className="nav-item">
							<Link to="/sign-up" className={classWithScroll("nav-links")} onClick={closeMobileMenu}>
								<Button buttonBaseStyle={classWithScroll("btn-navbar")} buttonStyle='btn-outline'>SIGN UP</Button>
							</Link>
						</li>
					</ul>
				</div>
			</nav>

		</>
	)
}

export default Navbar
