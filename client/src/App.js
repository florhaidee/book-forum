import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './utils/Apollo';
import { Provider } from 'react-redux';
import store from './utils/State';
import Book from './components/Book';
  
function App() {
	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<Router>
            <div>
              <h1> Book Forum</h1>
              <div className= "container">
                  <Book /> 
              </div>
            </div>
					{/* Header/Nav */}
					<Switch>
						{/* <Route exact path='/' component={Home} /> */}
						{/* <Route component={NoMatch} /> */}
					</Switch>
					{/* Footer */}
				</Router>
			</Provider>
		</ApolloProvider>
	);
}

export default App;