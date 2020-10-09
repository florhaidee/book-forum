import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Login = () => {
	const [formState, setFormState] = useState({ username: '', password: '' });
	const [errorMessage, setErrorMessage] = useState('');
	const [login, { error }] = useMutation(LOGIN);

	// update state based on form input changes
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	// submit form
	const handleFormSubmit = async (event) => {
		event.preventDefault();

		if (formState.username && formState.password.length >= 5) {
			try {
				const { data } = await login({
					variables: { ...formState },
				});

				Auth.login(data.login.token);
			} catch (e) {
				console.error(e);
			}
			// clear form values
			setFormState({
				username: '',
				password: '',
			});
		} else if (!formState.username) {
			setErrorMessage('Username is required');
		} else {
			setErrorMessage('Password must be at least 5 characters');
		}
	};

	return (
		<>
			<form onSubmit={handleFormSubmit}>
				<input
					className='form-input'
					placeholder='Your username'
					name='username'
					type='username'
					id='username'
					value={formState.username}
					onChange={handleChange}
				/>
				<input
					className='form-input'
					placeholder='******'
					name='password'
					type='password'
					id='password'
					value={formState.password}
					onChange={handleChange}
				/>
				<button className='btn d-block w-100' type='submit'>
					Submit
				</button>
			</form>
			{errorMessage && <div>{errorMessage}</div>}
			{error && <div>Incorrect Credentials</div>}
		</>
	);
};

export default Login;
