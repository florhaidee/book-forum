import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './utils/Apollo';
import { Provider } from 'react-redux';
import store from './utils/State';
import Book from './components/Book';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<Router>
					<div>
						<h1> Book Forum</h1>
					</div>
					{/* Header/Nav */}
					<Switch>
						<Route exact path='/' component={Home} />
						<Route component={NotFound} />
					</Switch>
					{/* Footer */}
				</Router>
			</Provider>
		</ApolloProvider>
	);
}

export default App;
