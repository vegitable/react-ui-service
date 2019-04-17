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

  const buttonStyleArray = {
    distanceStyle: selectedButtonStyle(), 
    dishesStyle: unselectedButtonStyle(), 
    ratingStyle: unselectedButtonStyle()
  };

  const orderByButtonClicked = (button) => {
    props.changeDisplayOrder(button);
  };

  return (
    <div className='restaurantsPageHeader'>
      <div onClick={() => orderByButtonClicked('distance')} style={buttonStyleArray.distanceStyle}>
        <FontAwesomeIcon icon={faRoute} />
      </div>
      <div onClick={() => orderByButtonClicked('dishes')} style={buttonStyleArray.dishesStyle}>
        <FontAwesomeIcon icon={faUtensils} />
      </div>
      <div onClick={() => orderByButtonClicked('rating')} style={buttonStyleArray.ratingStyle}>
        <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
  );
};

export default RestaurantsPageHeader;