import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Context} from './Context' // this is the highest where you can put context
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    // wrap all the content which should get state from context in <Context> tags
    <Context>
        <Router>
            <App />
        </Router>    
    </Context>
    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
