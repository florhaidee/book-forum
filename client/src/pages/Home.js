import React from 'react';
import {Link} from 'react-router-dom'
import '../index.css'




const Home = () => {
	return (
		<main className='container'>
			<div className="row homepage">
				{/*Fantasy*/}
				<div class="col-12 col-md-6 col-lg-3">
					<Link to="/threads/Fantasy">
					<img src="images/fantasy-book.jpg"/>
					</Link>
					<span>Fantasy</span>
				</div>
				{/*Adventure*/}
				<div class="col-12 col-md-6 col-lg-3">
					<Link to="/threads/Adventure">
					<img src="images/adventure.jpg" />
					</Link>
				</div>
				{/*Romance*/}
				<div class="col-12 col-md-6 col-lg-3">
					<Link to="/threads/Romance">
					<img src="images/heart-book.jpg" />
					</Link>
					<span>Romance</span>
				</div>
				{/*Mystery*/}
				<div class="col-12 col-md-6 col-lg-3">
					<Link to="/threads/Mystery">
					<img src="images/mystery-book.png" />
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Home;
