import React from 'react';
import './SearchBar.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
          type="text" 
          onChange={this.handleChange}
          placeholder='postcode'
        ></input>
        <button onClick={this.handleSubmit}><FontAwesomeIcon icon={faSearch} /></button>
      </div>
    );
  }
};

export default SearchBar;