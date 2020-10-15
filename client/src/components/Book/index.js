import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import HTMLFlipBook from "react-pageflip";
import fantasy from "../../utils/images/fantasy-book.jpg"
import adventure from "../../utils/images/adventure.jpg"
import romance from "../../utils/images/heart-book.jpg"
import mystery from "../../utils/images/mystery-book.png"
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
  const genre = props.children;
  return (
    <div className="Page" ref={ref} data-density="hard">
      <div className="pageCover">
        {(() => {
          switch (genre) {
            case 'fantasy':
              return(
                <span><img src={fantasy} alt="category"/></span>
              )
            case 'adventure':
              return(
                <span><img src={adventure} alt="category"/></span>
              )
            case 'romance':
              return(
                <span><img src={romance} alt="category"/></span>
              )
            case 'mystery':
              return(
                <span><img src={mystery} alt="category"/></span>
              )
            default:
              return ("")
          }
        })()}
        <h2>{genre}</h2>
      </div>
    </div>
  )
});

const Page = React.forwardRef((props, ref) => {
  console.log(props)
 
  return (
    <div className="Page" ref={ref}>
      <h2 className="pageHeader">{props.children.genre}</h2>
      <div className="pageText">{props.children.threadText}
      { props.children.posts.length > 0 
        ? <h4>Posts: </h4>
        : <h5>No Posts Yet. </h5>
      }
      { props.children.posts.length > 0 &&
        props.children.posts.map((post) => {
          return (
            <p className="postText">{post.postBody}</p>
          )
        })
      }
      </div>
      <div className="pageFooter">Page number: {props.number + 2} - {props.children.createdAt}  - Created by: {props.children.username}</div>
    </div>
  );
});


function Book() {

  const { genre: genre } = useParams();

  const { loading, data } = useQuery(QUERY_THREADS, {
    variables: { genre: genre},
  });

  const threads = data?.threads || {};
  console.log(threads)

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(genre)
  return (

    <div className="container">
      <div className="bookContainer">
        <HTMLFlipBook width={500} height={600}>
          <PageCover></PageCover>
          <PageContent>{genre}</PageContent>
          {threads.map( (thread, i) => {
            return (
              <Page number={i}>{ thread }</Page>
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