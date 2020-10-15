import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';
import HTMLFlipBook from "react-pageflip";
import Fantasy from "../../utils/images/fantasy-book.jpg"
import Adventure from "../../utils/images/adventure.jpg"
import Romance from "../../utils/images/heart-book.jpg"
import Mystery from "../../utils/images/mystery-book.png"
import { QUERY_THREADS } from '../../utils/queries';


const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="Page" ref={ref} data-density="hard">
      <div className="hard">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const PageContent = React.forwardRef((props, ref) => {
  console.log("genre pagecontent", props.children)
  return (
    <div className="Page" ref={ref} data-density="hard">
      <div className="pageCover">
        {(() => {
          switch (props.children) {
            case 'Fantasy':
              return(
                <span><img src={Fantasy} alt="category"/></span>
              )
            case 'Adventure':
              return(
                <span><img src={Adventure} alt="category"/></span>
              )
            case 'Romance':
              return(
                <span><img src={Romance} alt="category"/></span>
              )
            case 'Mystery':
              return(
                <span><img src={Mystery} alt="category"/></span>
              )
            default:
              return (<p></p>)
          }
        })()}
        <h2>{props.children}</h2>
      </div>
    </div>
  )
});

const Page = React.forwardRef((props, ref) => {
	return (
		<div className='Page' ref={ref}>
			<h2 className='pageHeader'>{props.children.genre}</h2>
			<div className='pageText'>
				{props.children.threadText}
				{props.children.posts.length > 0 ? (
					<h4>Posts: </h4>
				) : (
					<h5>No Posts Yet. </h5>
				)}
				{props.children.posts.length > 0 &&
					props.children.posts.map((post) => {
						return <p className='postText'>{post.postBody}</p>;
					})}
			</div>
      <Link to={`/thread/${props.children._id}`}>See the Conversation!</Link>
			<div className='pageFooter'>
				Page number: {props.number + 2} - {props.children.createdAt} -
				Created by: {props.children.username}
			</div>
		</div>
	);
});


function Book() {

  //console.log(state)
  let { genre: genre} = useParams();
 // genre = genre.charAt(0).toUpperCase() + genre.slice(1);
 // const searchText = useSelector((state) => state.thread.threadText);
  const { loading, data } = useQuery(QUERY_THREADS, {
    variables: { genre: genre},
  });

  const threads = data?.threads || {};

  if (loading) {
		return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <div className="bookContainer">
        <HTMLFlipBook width={500} height={600}>
          <PageCover></PageCover>
          <PageContent>{genre}</PageContent>
          {threads.map( (thread, i) => {
            return (
              <Page number={i} key={thread._id}>{ thread }</Page>
            )
          })}
          <PageContent></PageContent>
          <PageCover> </PageCover>
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default Book;