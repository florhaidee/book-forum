import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './utils/Apollo';
import { Provider } from 'react-redux';
import store from './utils/State';
import Book from './components/Book';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './components/LoginForm';
import NavBar from './components/NavBar';

function App() {
	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<Router>
					<NavBar />
					{/* <Book /> */}
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
