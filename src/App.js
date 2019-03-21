import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';
import VideoBox from './containers/VideoBox';
import SearchBar from './containers/SearchBar';

class App extends Component {
  sendAlert = (message) => {
    alert('send alert is working');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <VideoBox />
        <SearchBar sendAlert={this.sendAlert}/>
      </div>
    );
  }
}

export default App;
