import React, { Component } from 'react';
import "../Css/bootstrap.min.css";
import "../Css/font-awesome.css";
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button type="button" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star
          </button>
        </p>
      </div>
    );
  }
}

export default App;
