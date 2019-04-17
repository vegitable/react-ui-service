import React from 'react';
import { faUtensils, faStar, faRoute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './RestaurantsPageHeader.css';

const RestaurantsPageHeader = (props) => {
  const unselectedButtonStyle = () => {
    return {
      color: '#E2C2C6',
      backgroundColor: '#fff'
    };
  };

  const selectedButtonStyle = () => {
    return {
      color: '#610F7F',
      backgroundColor: 'none'
    };
  };

  const buttonStyles = {
    distance: selectedButtonStyle(), 
    dishes: unselectedButtonStyle(), 
    rating: unselectedButtonStyle()
  };

  const orderByButtonClicked = (button) => {
    props.changeDisplayOrder(button);
    for (var style in buttonStyles) {
      console.log(style);
    }
  };

  return (
    <div className='restaurantsPageHeader'>
      <div onClick={() => orderByButtonClicked('distance')} style={buttonStyles.distance}>
        <FontAwesomeIcon icon={faRoute} />
      </div>
      <div onClick={() => orderByButtonClicked('dishes')} style={buttonStyles.dishes}>
        <FontAwesomeIcon icon={faUtensils} />
      </div>
      <div onClick={() => orderByButtonClicked('rating')} style={buttonStyles.rating}>
        <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
  );
};

export default RestaurantsPageHeader;