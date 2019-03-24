import React from 'react';
import VideoBox from '../VideoBox';
import AlertBox from '../../components/AlertBox';
import SearchBar from '../SearchBar';

class HomePage extends React.Component {
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

  render () {
    return (
      <div>
        { this.state.alert ? <AlertBox alertMessage={this.state.alertMessage} /> : <VideoBox />}
        <SearchBar sendAlert={this.sendAlert}/>
      </div>
    )
  }
}

export default HomePage;