import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';
import SearchBar from './containers/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
      </div>
    );
  }
}

export default App;
