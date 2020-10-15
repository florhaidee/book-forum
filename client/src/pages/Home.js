import React from 'react';
import {Link} from 'react-router-dom'
import '../index.css'




const Home = () => {
	const genres = ['Fantasy', 'Adventure', 'Romance', 'Mystery'];
	const genre = "Fantasy";
	return (
		<main>
			<div class="container-fluid">
  
    <div class="col">
	<Link to="/threads/fantasy">  
	<img src="images/fantasy-book.jpg"/>
	
	</Link> 
    </div>

	<div class="col">
	<Link to="/threads/adventure">  
	<img src="images/adventure.jpg" />
	</Link> 
    </div>
	

    <div class="col">
	<Link to="/threads/romance">  
	<img src="images/heart-book.jpg" />
	</Link> 
    </div>
	<div class="col">
	<Link to="/threads/mystery">  
	<img src="images/mystery-book.png" />
	</Link> 
    </div>
	</div>
			
		</main>
	);
};

export default Home;
