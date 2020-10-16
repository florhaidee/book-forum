import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './utils/Apollo';
import { Provider } from 'react-redux';
import store from './utils/State';
import SingleThread from './pages/SingleThread';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './components/LoginForm';
import Book from './components/Book';
import Signup from './pages/Signup';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<Router>
					<NavBar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/thread/:id' component={SingleThread} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/signup' component={Signup} />
						<Route exact path='/dashboard' component={Dashboard} />
						<Route exact path='/threads/:genre' component={Book} />
						<Route component={NotFound} />
					</Switch>
				</Router>
			</Provider>
		</ApolloProvider>
	);
}

export default App;
