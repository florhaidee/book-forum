import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLazyQuery } from '@apollo/react-hooks';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Auth from '../../utils/auth';

import { QUERY_THREADS } from '../../utils/queries';

const NavBar = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [genre, setGenre] = useState('Fantasy');

	const [searchThreads, { data }] = useLazyQuery(QUERY_THREADS);

	const searchHandler = (e) => {
		e.preventDefault();

		if (genre && searchTerm) {
			searchThreads({
				variables: { genre, searchTerm },
			});
			console.log(data?.threads);
		}
	};

	const handleSearchTermChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleGenreChange = (event) => {
		setGenre(event.target.value);
	};

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
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Form inline className='ml-auto'>
					<FormControl
						size='sm'
						type='text'
						placeholder='Search'
						className='ml-auto my-2'
						onChange={handleSearchTermChange}
					/>
					<FormControl
						as='select'
						size='sm'
						className='ml-2 my-2'
						onChange={handleGenreChange}
					>
						<option>Fantasy</option>
						<option>Adventure</option>
						<option>Romance</option>
						<option>Mystery</option>
					</FormControl>
					<LinkContainer to='/threads'>
						<Nav.Item
							className='py-1 px-2 ml-sm-2 text-light border border-success border-radius rounded'
							role='button'
						>
							Search
						</Nav.Item>
					</LinkContainer>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
