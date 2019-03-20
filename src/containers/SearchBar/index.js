import React from 'react';
import './SearchBar.css';

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
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            onChange={this.handleChange}
            placeholder='postcode'
          ></input>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
};

export default SearchBar;