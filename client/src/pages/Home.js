import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';



const Home = () => {
	return (
		<main>
			<div className='container-fluid'>
				<div className='container-images'>
					<div className='col'>
						<Link to='/threads/Fantasy'>
							<img
								className='photo'
								src='images/fantasy-book.jpg'
								alt='Fantasy'
							/>
						</Link>
						<span>Fantasy</span>
					</div>

					<div className='col'>
						<Link to='/threads/Adventure'>
							<img className='photo' src='images/adventure.jpg' alt='Adventure' />
						</Link>
					</div>

					<div className='col'>
						<Link to='/threads/Romance'>
							<img
								className='photo'
								src='images/heart-book.jpg'
								alt='Romance'
							/>
						</Link>
						<span>Romance</span>
					</div>
					<div className='col'>
						<Link to='/threads/Mystery'>
							<img
								className='photo'
								src='images/mystery-book.png'
								alt='Mystery'
							/>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
