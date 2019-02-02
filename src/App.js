import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">column number one</div>
          <div className="col-6">column number one<i class="fas fa-home"></i></div>
        </div>
      </div>

    );
  }
}

export default App;
