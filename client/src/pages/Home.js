import React from 'react';
import {Link} from 'react-router-dom'
import '../index.css'



const Home = () => {
	return (
		<main>
			<div class="container-fluid">
  <div class="container-images">
    <div class="col">
	<Link to="/threads/fantasy">  
<img className="photo" src="images/fantasy-book.jpg"/>
	
	</Link> 
    </div>

	<div class="col">
	<Link to="/threads/adventure">  
	<img className="photo" src="images/adventure.jpg" />
	</Link> 
    </div>
	

    <div class="col">
	<Link to="/threads/romance">  
	<img className="photo" src="images/heart-book.jpg" />
	</Link> 
    </div>
	<div class="col">
	<Link to="/threads/mystery">  
	<img className="photo" src="images/mystery-book.png" />
	</Link> 
    </div>
	</div>
	</div>		
		</main>
	);
};

export default Home;
