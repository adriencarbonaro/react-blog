import React                 from 'react';
import { Link }              from 'react-router-dom';

/* CSS */
import '../css/Button.css';
import '../css/Navbar.css';

const STYLES = [
	'btn--primary',
	'btn--outline'
];

const SIZES = [
	'btn--medium',
	'btn--large'
];

export const Button = ({
	children,
	type,
	onClick,
	buttonBaseStyle,
	buttonStyle,
	buttonSize,
	link
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
	  ? buttonStyle
	  : STYLES[0];

	const checkButtonSize = SIZES.includes(buttonSize)
	  ? buttonSize
	  : SIZES[0];

	return (
		<Link to={link} className='btn-mobile'>
			<button className={`btn ${checkButtonStyle} ${checkButtonSize} ${buttonBaseStyle}`} onClick={onClick} type={type}>
				{children}
			</button>
		</Link>
	)
};