import React from 'react';
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

  handleSubmit = (event) => {
    alert('A postcode was submitted: ' + this.state.postcode);
    event.preventDefault();
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