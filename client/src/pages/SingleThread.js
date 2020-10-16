import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THREAD } from '../utils/queries';
import HTMLFlipBook from "react-pageflip";

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
      <Link to={`/threads/${props.children.genre}`}>See All Threads!</Link>
			<div className='pageFooter'>
				Page number: {props.number + 2} - {props.children.createdAt} -
				Created by: {props.children.username}
			</div>
		</div>
	);
});

const SingleThread = props => {

  let { id: id} = useParams();
  const { loading, data } = useQuery(QUERY_THREAD, {
    variables: { _id: id},
  });

  const thread = data?.thread || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
      <div className="SinglePage">
        <HTMLFlipBook width={700} height={800}>
          <Page number={1} key={thread._id}>{ thread }</Page>
        </HTMLFlipBook>
      </div>
  );
};


export default SingleThread;
