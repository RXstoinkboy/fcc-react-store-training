import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'; 
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Defaults from './components/Defaults';
import Details from './components/Details';
import Cart from './components/Cart';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar /> {/* shouldn't be included in switch - we want to display it all the time */}
        <Switch>
          <Route exact {/* use "exact" for the home page. Otherwis you will always be redirected to home page unless this path is included in the end */} path="/" component={ProductList} /> { /* home path - display ProductList as default page */}
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Defaults} /> {/* display when page can't be found -> wrong path was inserted */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
