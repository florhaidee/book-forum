import React from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';

const Header = () => {
	return (
		<header>
			<Link to='/'>
				<h1>Book Forum</h1>
			</Link>
			<NavMenu />
		</header>
	);
};

export default Header;
