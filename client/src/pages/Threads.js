import React, { useEffect, useState } from 'react';
import Book from '../components/Book';
import { useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/react-hooks';
import { QUERY_THREADS } from '../utils/queries';

const Threads = props => {
	const { genre } = useParams();
	const [isMounted, setIsMounted] = useState('true');

	// Lazy query to cancel query on unmount
	const [getThreads, { loading, data }] = useLazyQuery(QUERY_THREADS, {
		variables: { genre: genre },
	});

	useEffect(() => {
		if (isMounted) {
			getThreads();
		}
		return () => {
			setIsMounted(false);
		};
	}, [isMounted, getThreads]);

	const threads = data?.threads || [];

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Book threads={threads} genre={genre} />
		</div>
	);
};


export default Threads;