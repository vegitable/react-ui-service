import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './containers/Header';
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import ResultsPage from './containers/ResultsPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/restaurants' component={ResultsPage}/>
      </div>
    );
  }
}

export default App;
