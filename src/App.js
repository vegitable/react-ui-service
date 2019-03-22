import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';
import VideoBox from './containers/VideoBox';
import AlertBox from './components/AlertBox';
import SearchBar from './containers/SearchBar';

class App extends Component {
  state = {
    alert: false,
    alertMessage: ''
  };

  sendAlert = (message) => {
    this.setState({
      alertMessage: message
    });
    this.setState({
      alert: true
    });
    setTimeout(() => { 
      this.setState({
        alert: false,
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* { this.state.alert ? <AlertBox alertMessage={this.state.alertMessage} /> : <VideoBox />} */}
        <AlertBox alertMessage='Fill in yer postcode!' />
        <SearchBar sendAlert={this.sendAlert}/>
      </div>
    );
  }
}

export default App;
