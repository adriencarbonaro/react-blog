import React                 from 'react';
import { useState }          from 'react';
import { Link }              from 'react-router-dom';
import SVGLogo               from './SVGLogo';
import { Paths }             from '../assets/Paths';

/* Assets */
import '../css/logo.css'

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
								France <i className="fas fa-chevron-down"></i>
							</div>
							<ul className={classWithScroll("nav-submenu")}>
								<li className="submenu-item"><Link to={Paths.auvergne} className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Auvergne</Link></li>
								<li className="submenu-item"><Link to={Paths.bourgogne} className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Bourgogne</Link></li>
								<li className="submenu-item"><Link to={Paths.bourges} className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Bourges</Link></li>
								<li className="submenu-item"><Link to={Paths.bretagne} className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Bretagne</Link></li>
								<li className="submenu-item"><Link to={Paths.corse} className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Corse</Link></li>
								<li className="submenu-item"><Link to={Paths.etretat} className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Etretat</Link></li>
								<li className="submenu-item"><Link to={Paths.gacilly} className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Gacilly</Link></li>
								<li className="submenu-item"><Link to={Paths.honfleur} className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Honfleur</Link></li>
								<li className="submenu-item"><Link to={Paths.perche} className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Perche</Link></li>
								<li className="submenu-item"><Link to={Paths.trouville} className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Trouville</Link></li>
							</ul>
						</li>
						<li className={click_submenu_2 ? "nav-item active" : "nav-item"} onClick={(e) => handleClickSubMenu("click_submenu_2")}>
							<div to="/products" className={classWithScroll("nav-links")}>
								Monde <i className="fas fa-chevron-down"></i>
							</div>
							<ul className={classWithScroll("nav-submenu")}>
								<li className="submenu-item"><Link to={Paths.amsterdam} className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Amsterdam</Link></li>
								<li className="submenu-item"><Link to={Paths.berlin} className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Berlin</Link></li>
								<li className="submenu-item"><Link to={Paths.crete} className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Crète</Link></li>
								<li className="submenu-item"><Link to={Paths.malta} className={classWithScroll("nav-links")} onClick={closeMobileMenu}>Malte</Link></li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>

		</>
	)
}

export default Navbar
