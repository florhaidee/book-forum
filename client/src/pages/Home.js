import React from 'react';
import Book from '../components/Book';

const Home = () => {
	return (
		<main>
      <div id='searchBar'></div>
			<div id='genreGrid'>
				<Book />
			</div>
		</main>
	);
};

export default Home;
