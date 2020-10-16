import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';



const Home = () => {
	return (
		<main>
			<div class='container-fluid'>
				<div class='container-images'>
					<div class='col'>
						<Link to='/threads/Fantasy'>
							<img
								className='photo'
								src='images/fantasy-book.jpg'
							/>
						</Link>
						<span>Fantasy</span>
					</div>

					<div class='col'>
						<Link to='/threads/Adventure'>
							<img className='photo' src='images/adventure.jpg' />
						</Link>
					</div>

					<div class='col'>
						<Link to='/threads/Romance'>
							<img
								className='photo'
								src='images/heart-book.jpg'
							/>
						</Link>
						<span>Romance</span>
					</div>
					<div class='col'>
						<Link to='/threads/Mystery'>
							<img
								className='photo'
								src='images/mystery-book.png'
							/>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
