import React from 'react';
import Book from '../components/Book';



const Home = () => {
	const genres = ['Fantasy', 'Adventure', 'Romance', 'Mystery'];
	const genre = "Fantasy";
	return (
		<main>
        <div id='searchBar'></div>
		<div id='genreGrid'>
			<Book genre={genre}/>
		</div>
		</main>
	);
};

export default Home;
