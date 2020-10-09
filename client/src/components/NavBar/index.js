import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Auth from '../../utils/auth';

const NavBar = () => {
	return (
		<Navbar bg='dark' expand='lg' variant='dark'>
			<Navbar.Brand>
				<Link to='/' className='text-light' role='button'>
					Book Forum
				</Link>
			</Navbar.Brand>
			<Nav className='flex-row mr-auto'>
				{!Auth.loggedIn() ? (
					<>
						<LinkContainer to='/login'>
							<Nav.Item className='text-light mx-2' role='button'>
								Login
							</Nav.Item>
						</LinkContainer>
						<LinkContainer to='/signup'>
							<Nav.Item className='text-light mx-2' role='button'>
								Signup
							</Nav.Item>
						</LinkContainer>
					</>
				) : (
					<>
						<LinkContainer to='/logout'>
							<Nav.Item className='text-light mx-2' role='button'>
								Logout
							</Nav.Item>
						</LinkContainer>
						<LinkContainer to='/dashboard'>
							<Nav.Item className='text-light mx-2' role='button'>
								DashBoard
							</Nav.Item>
						</LinkContainer>
					</>
				)}
			</Nav>
			<Navbar.Toggle />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Form inline className='ml-auto'>
					<FormControl
						type='text'
						placeholder='Search'
						className='ml-auto my-2'
					/>
					<Button variant='outline-success' className='ml-sm-2'>
						Search
					</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
