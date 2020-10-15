import React from 'react';
import {Link} from 'react-router-dom'
import '../index.css'




const Home = () => {
	return (
		<main>
			<div className="container-fluid">
				{/*Fantasy*/}
				<div class="col">
					<Link to="/threads/Fantasy">
					<img src="images/fantasy-book.jpg"/>
					</Link>
				</div>
				{/*Adventure*/}
				<div class="col">
					<Link to="/threads/Adventure">
					<img src="images/adventure.jpg" />
					</Link>
				</div>
				{/*Romance*/}
				<div class="col">
					<Link to="/threads/Romance">
					<img src="images/heart-book.jpg" />
					</Link>
				</div>
				{/*Mystery*/}
				<div class="col">
					<Link to="/threads/Mystery">
					<img src="images/mystery-book.png" />
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Home;
