import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THREAD, QUERY_THREADS } from '../utils/queries';
import PostList from '../components/PostList';
import { useSelector } from 'react-redux';

const SingleThread = props => {
  const { id: threadId } = useParams();

  const { loading, data } = useQuery(QUERY_THREAD, {
    variables: { id: threadId }
  });

  const thread = data?.thread || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  const state = useSelector((state) => state.thread);
  const { loading, data } = useQuery(QUERY_THREADS, {
    variables: { state },
  });
  
  const threads = data?.threads || [];

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {thread.username}
          </span>{' '}
          thread on {thread.createdAt}
        </p>
        <div className="card-body">
          <p>{thread.threadText}</p>
        </div>
      </div>

      {thread.postCount > 0 && <PostList posts={thread.posts} />}
    </div>
  );
};


export default SingleThread;
