import React from 'react';
import Book from '../components/Book';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THREADS } from '../utils/queries';

const Threads = props => {
	const { genre } = useParams();
	const { loading, data } = useQuery(QUERY_THREADS, {
		variables: { genre: genre },
	});

	const threads = data?.threads || {};

	if (loading) {
		return <div>Loading...</div>;
  }
  
  return (
    <div>
      <Book threads={threads} genre={genre}/>
    </div>
  );
};


export default Threads;