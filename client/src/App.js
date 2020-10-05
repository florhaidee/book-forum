import React from 'react';
import Header from './components/Header';
import Book from './components/Book';


function App() {
    return(
        <div>
            <h1> Book Forum</h1>
            <div className= "container">
                <Book /> 
            </div>
        </div>
    )
}

export default App;
