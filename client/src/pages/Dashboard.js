import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';

import { QUERY_ME } from '../utils/queries';
import { ADD_THREAD, UPDATE_THREAD } from '../utils/mutations';

const Dashboard = () => {
	const [threadText, setText] = useState('');
	const [characterCount, setCharacterCount] = useState(0);
	const [editThread, setEditThread] = useState(false);
	const [genre, setGenre] = useState('Fantasy');
	const [updateThread] = useMutation(UPDATE_THREAD);;

	const [addThread, { error }] = useMutation(ADD_THREAD, {
		update(cache, { data: { addThread } }) {
			const { me } = cache.readQuery({ query: QUERY_ME });
			// prepend the newest thread to the front of the array
			cache.writeQuery({
				query: QUERY_ME,
				data: { me: { ...me, threads: [addThread, ...me.threads] } },
			});
		},
	});

	const { loading, data } = useQuery(QUERY_ME);

	const me = data?.me;

	const handleTextChange = (event) => {
		if (event.target.value.length <= 1000) {
			setText(event.target.value);
			setCharacterCount(event.target.value.length);
		}
	};

	const handleGenreChange = (event) => {
		setGenre(event.target.value);
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			await addThread({
				variables: { threadText, genre },
			});

			setText('');
			setCharacterCount(0);
		} catch (e) {
			console.error(e);
		}
	};

	// useEffect(() => {

	// }, [setEditThread])

	const handleEditThread = (e) => {
		e.preventDefault();
		setEditThread(true);
	};

	const submitEditThread = (e) => {
		e.preventDefault();

		updateThread({
			variables: {threadId: e.target.id, threadText: e.target.value},
		});

		setEditThread(false);
	};

	return (
		<div className='container'>
			<p className={`m-0 ${characterCount === 1000 ? 'text-error' : ''}`}>
				Character Count: {characterCount}/1000
				{error && <span className='ml-2'>Something went wrong...</span>}
			</p>
			<form
				className='flex-row justify-center justify-space-between-md align-stretch row'
				onSubmit={handleFormSubmit}
			>
				<textarea
					placeholder="Here's a new thread..."
					value={threadText}
					className='form-input col-12 col-md mx-2'
					onChange={handleTextChange}
				></textarea>
				<select
					onChange={handleGenreChange}
					className='col-5 col-md-2 mx-2'
				>
					<option value='Fantasy'>Fantasy</option>
					<option value='Adventure'>Adventure</option>
					<option value='Romance'>Romance</option>
					<option value='Mystery'>Mystery</option>
				</select>
				<button
					className='btn col-5 col-md-2 border border-dark mx-2'
					type='submit'
				>
					Submit
				</button>
			</form>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div className='mx-2 mt-4'>
					My Threads (Click text to edit):
					{me.threads.map(({ _id, threadText, genre, createdAt }) => (
						<div
							key={_id}
							className='row my-2 border border-dark p-2'
						>
							{editThread ? (
								<textarea
									id={_id}
									className='col-12 col-lg-8'
									onBlur={submitEditThread}
									defaultValue={threadText}
								/>
							) : (
								<div
									className='col-12 col-lg-8'
									onClick={handleEditThread}
								>
									{threadText}
								</div>
							)}
							<div className='col-12 col-lg-2'>
								Genre: {genre}
							</div>
							<div className='col-12 col-lg-2'>{createdAt}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Dashboard;
