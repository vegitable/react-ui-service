import React from 'react';
import axios from 'axios';
import './SearchBar.css';
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends React.Component {
  state = {
    postcode: ''
  };

  handleChange = (event) => {
    this.setState({postcode: event.target.value});
  };

  handleSubmit = async (event) => {
    if (!this.state.postcode) {
      this.props.sendAlert('Fill in yer postcode!');
    } else {
      const result = await this.fetchRestaurants();
      console.log(result);
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
  }

  render() {
    return (
      <div className='searchBar'>
        <input 
          className='searchBarTextInput'
          type="text" 
          onChange={this.handleChange}
          placeholder='POSTCODE'
        ></input>
        <button className='searchBarSubmitButton' onClick={this.handleSubmit}><FontAwesomeIcon icon={faAngleDoubleRight} /></button>
      </div>
    );
  }
};

export default SearchBar;