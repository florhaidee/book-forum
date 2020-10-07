import React from 'react';
import { Link } from 'react-router-dom';
// import Auth from '../../../../utils/auth'

const Nav = () => {
	const logout = (e) => {
		e.preventDefault();
		// Auth.logout()
	};

	return (
		<>
			{/* change true to Auth.loggedIn() when available*/}
			{true ? (
				<>
					<Link to='/login'>Login</Link>
					<Link to='/signup'>Signup</Link>
				</>
			) : (
				<>
					<Link to='/dashboard'>Dashboard</Link>
					<a href='/' onClick={logout}>
						Logout
					</a>
				</>
			)}
		</>
	);
};

export default Nav;
