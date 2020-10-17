import React from 'react';
import Book from '../components/Book';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THREADS } from '../utils/queries';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap'
const Threads = props => {

  const searchText = useSelector((state) => state.thread.threadText);
  const genre = useSelector((state) => state.thread.genre);
  const { loading, data } = useQuery(QUERY_THREADS, {
    variables: { genre: genre, searchTerm: searchText },
  });
  const threads = data?.threads || {};
  if (loading) {
		return <div>Loading...</div>;
  }
  
  return (
    <div>
      { threads.length === 0 
      ? <Link to={`/`}>
          <Alert variant={'warning'}>No threads find... Try again</Alert>
        </Link>
      : <Book threads={threads} genre={genre}/>
      }
    </div>
  );
};


export default Threads;