import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SearchBar.css';

class SearchBar extends React.Component {
  state = {
    postcode: ''
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    };
  };

  handleChange = (event) => {
    this.setState({postcode: event.target.value});
  };

  handleSubmit = async () => {
    if (!this.state.postcode) {
      this.props.sendAlert('Fill in yer postcode!');
    } else {
      const result = await this.fetchRestaurants();
      this.handleRestaurantResults(result);
    }
  };

  fetchRestaurants = async () => {
    const url = `${process.env.REACT_APP_RESTAURANT_API_URL}${this.state.postcode || ''}`;
    return axios.get(url)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleRestaurantResults = (result) => {
    if (!result || !result.data.length) {
      this.props.sendAlert('No restaurants for you!');
    } else {
      this.props.setRestaurantData(result.data);
      this.props.history.push('/restaurants');
    };
  };

  render() {
    return (
      <div className='searchBar'>
        <input 
          className='searchBarTextInput'
          type="text" 
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          placeholder='POSTCODE'
        ></input>
        <button className='searchBarSubmitButton' onClick={this.handleSubmit}>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </button>
      </div>
    );
  }
};

export default withRouter(SearchBar);