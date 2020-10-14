import React from 'react';
import HTMLFlipBook from "react-pageflip";
import image from "../../utils/images/fantasy-book.jpg"
import background from "../../utils/images/background.jpg"
import { useQuery } from '@apollo/react-hooks';
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
  return (
    <div className="Page" ref={ref} data-density="hard">
      <div className="pageCover">
        <h2>{props.children}</h2>
        <div className="pageImage"><img src={image} alt="category"/></div>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  console.log(props)
  return (
    <div className="Page" ref={ref}>
      <h2 className="pageHeader">{props.children.genre}</h2>
      <div className="pageText">{props.children.threadText}</div>
      <div className="pageFooter">Page number: {props.number} - {props.children.createdAt}  - Created by: {props.children.username}</div>
    </div>
  );
});


function Book({genre}) {
  
  const { loading, data } = useQuery(QUERY_THREADS, {
    variables: { genre: genre }
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