import React from 'react';
import HTMLFlipBook from "react-pageflip";
import image from "../../utils/images/fantasy-book.jpg"
import background from "../../utils/images/background.jpg"

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
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="Page" ref={ref}>
      <h2 className="pageHeader">Page Header</h2>
      <div className="pageImage"><img src={image} alt="fantasy-category"/></div>
      <div className="pageText">{props.children}</div>
      <div className="pageFooter">Page number: {props.number}</div>
    </div>
  );
});

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function Book(props) {
  return (
    <div className="container">
    <div className="bookContainer">
      <HTMLFlipBook width={500} height={600}>
        <PageCover></PageCover>
        <PageContent>BOOK TITLE</PageContent>
        <Page number="1">{text}</Page>
        <Page number="2">{text}</Page>
        <Page number="3">{text}</Page>
        <Page number="4">{text}</Page>
        <Page number="5">{text}</Page>
        <PageContent></PageContent>
        <PageCover> </PageCover>
      </HTMLFlipBook>
    </div>
    </div>
  );
}

export default Book;