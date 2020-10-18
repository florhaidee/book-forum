import React from 'react';
import { Link } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import Fantasy from '../../utils/images/fantasy-book.jpg';
import Adventure from '../../utils/images/adventure.jpg';
import Romance from '../../utils/images/heart-book.jpg';
import Mystery from '../../utils/images/mystery-book.png';

const PageCover = React.forwardRef((props, ref) => {
	return (
		<div className='Page' ref={ref} data-density='hard'>
			<div className='hard'>
				<h2>{props.children}</h2>
			</div>
		</div>
	);
});

const PageContent = React.forwardRef((props, ref) => {
	console.log('genre pagecontent', props.children);
	return (
		<div className='Page' ref={ref} data-density='hard'>
			<div className='pageCover'>
				{(() => {
					switch (props.children) {
						case 'Fantasy':
							return (
								<span>
									<img src={Fantasy} alt='category' />
								</span>
							);
						case 'Adventure':
							return (
								<span>
									<img src={Adventure} alt='category' />
								</span>
							);
						case 'Romance':
							return (
								<span>
									<img src={Romance} alt='category' />
								</span>
							);
						case 'Mystery':
							return (
								<span>
									<img src={Mystery} alt='category' />
								</span>
							);
						default:
							return <p></p>;
					}
				})()}
				<h2>{props.children}</h2>
			</div>
		</div>
	);
});

const Page = React.forwardRef((props, ref) => {
	return (
		<div className='Page' ref={ref}>
			<h2 className='pageHeader'>{props.children.genre}</h2>
			<div className='pageText'>
				<div className='my-4'>
					<h4>Original Post:</h4>
					{props.children.threadText}
				</div>
				{props.children.posts?.length > 0 ? (
					<h4>Posts: </h4>
				) : (
					<h5>No Posts Yet. </h5>
				)}
				{props.children.posts?.length > 0 &&
					props.children.posts.map((post) => {
						return (
							<p className='postText' key={post._id}>
								{post.postBody}
							</p>
						);
					})}
			</div>
			<Link to={`/thread/${props.children._id}`}>
				See the Conversation!
			</Link>
			<div className='pageFooter'>
				Page number: {props.number + 2} - {props.children.createdAt} -
				Created by: {props.children.username}
			</div>
		</div>
	);
});

function Book({ threads = [], genre }) {
  return (
    <div className='container'>
    {console.log(threads.length)}
			<div className='bookContainer'>
				<HTMLFlipBook
					width={600}
					height={800}
					size='stretch'
					minWidth={315}
					maxWidth={1000}
					minHeight={600}
					maxHeight={1533}
				>
					<PageCover></PageCover>
					{genre ? (
						<PageContent>{genre}</PageContent>
					) : (
						<PageContent>Threads</PageContent>
					)}
					{threads.length ? (
            threads.map((thread, i) => {
              return (
                <Page number={i} key={thread._id}>
									{thread}
								</Page>
							);
						})
					) : (
						<Page number={1}>
							<Link to='/dashboard'>
								Be the first to create a thread for this genre!
							</Link>
						</Page>
					)}
					<PageContent></PageContent>
					<PageCover> </PageCover>
				</HTMLFlipBook>
			</div>
		</div>
	);
}

export default Book;
