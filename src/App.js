import React, { Component } from 'react';
import logo from './logo.svg';
import RaisedButton from 'material-ui/RaisedButton'
import './App.css';
import ProductGrid from './ProductGrid'
import Layout from "./components/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/*<RaisedButton>Test</RaisedButton>*/}
            <Layout/>
            <ProductGrid/>
            Edit <code>src/App.js gfhghfghg</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer" >
            Learn React
          </a>
        </header>
        <div>

        </div>

      </div>
    );
  }
}

export default App;
