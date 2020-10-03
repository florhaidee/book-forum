import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import { Provider } from 'react-redux';
import store from './utils/State';

const client = new ApolloClient({
	request: (operation) => {
		const token = localStorage.getItem('id_token');
		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : '',
			},
		});
	},
	uri: '/graphql',
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<Router>
					{/* Header/Nav */}
					<Switch>{/* <Route exact path={} component={} />*/}</Switch>
					{/* Footer */}
				</Router>
			</Provider>
		</ApolloProvider>
	);
}

export default App;
