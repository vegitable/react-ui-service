import React from 'react';
import VideoBox from '../../components/VideoBox';
import AlertBox from '../../components/AlertBox';
import SearchBar from '../SearchBar';

class HomePage extends React.Component {
  state = {
    alert: 'none',
    alertMessage: ''
  };

  sendAlert = (message) => {
    this.setState({
      alertMessage: message
    });
    this.setState({
      alert: 'inline-block'
    });
    setTimeout(() => { 
      this.setState({
        alert: 'none',
      });
    }, 2000);
  }

  render () {
    return (
      <div>
        {/* { this.state.alert ? <AlertBox  /> : <VideoBox />} */}
        <VideoBox />
        <AlertBox 
          alertMessage={this.state.alertMessage} 
          alertVisible={this.state.alert}
        />
        <SearchBar sendAlert={this.sendAlert} setRestaurantData={this.props.setRestaurantData}/>
      </div>
    )
  }
}

export default HomePage;