import React, { Component } from 'react';
import { faUtensils, faStar, faRoute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './RestaurantsPageHeader.css';

class RestaurantsPageHeader extends Component {
  unselectedButtonStyle = () => {
    return {
      color: '#E2C2C6',
      backgroundColor: '#fff'
    };
  };

  selectedButtonStyle = () => {
    return {
      color: '#610F7F',
      backgroundColor: 'none'
    };
  };

  buttonStyles = {
    distance: this.selectedButtonStyle(), 
    dishes: this.unselectedButtonStyle(), 
    rating: this.unselectedButtonStyle()
  };

  orderByButtonClicked = (button) => {
    for (var style in this.buttonStyles) {
      if (button === style) {
        this.buttonStyles[style] = this.selectedButtonStyle();
        console.log(this.buttonStyles[style])
      } else {
        this.buttonStyles[style] = this.unselectedButtonStyle();
        console.log(this.buttonStyles[style])
      };
    };
    this.props.changeDisplayOrder(button);
  };

  render() {
    return (
      <div className='restaurantsPageHeader'>
        <div onClick={() => this.orderByButtonClicked('distance')} style={this.buttonStyles.distance}>
          <FontAwesomeIcon icon={faRoute} />
        </div>
        <div onClick={() => this.orderByButtonClicked('dishes')} style={this.buttonStyles.dishes}>
          <FontAwesomeIcon icon={faUtensils} />
        </div>
        <div onClick={() => this.orderByButtonClicked('rating')} style={this.buttonStyles.rating}>
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
    );
  };
};

export default RestaurantsPageHeader;