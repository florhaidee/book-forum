import React from 'react';
import {Link} from 'react-router-dom'
import '../index.css'




const Home = () => {
	return (
		<main>
			<div className="container-fluid">
				{/*Fantasy*/}
				<div class="col">
					<Link to="/threads/fantasy">  
					<img src="images/fantasy-book.jpg"/>
					</Link> 
				</div>
				{/*Adventure*/}
				<div class="col">
					<Link to="/threads/adventure">  
					<img src="images/adventure.jpg" />
					</Link> 
				</div>
				{/*Romance*/}
				<div class="col">
					<Link to="/threads/romance">  
					<img src="images/heart-book.jpg" />
					</Link> 
				</div>
				{/*Mystery*/}
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
