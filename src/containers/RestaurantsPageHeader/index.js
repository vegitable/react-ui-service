import React from 'react';
import { faUtensils, faStar, faRoute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './RestaurantsPageHeader.css';

const RestaurantsPageHeader = (props) => {
  const orderByButtonClicked = (button) => {
    props.changeDisplayOrder(button);
  };

  return (
    <div className='restaurantsPageHeader'>
      <div onClick={() => orderByButtonClicked('distance')}>
        <FontAwesomeIcon icon={faRoute} />
      </div>
      <div onClick={() => orderByButtonClicked('dishes')}>
        <FontAwesomeIcon icon={faUtensils} />
      </div>
      <div onClick={() => orderByButtonClicked('rating')}>
        <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
  );
};

export default RestaurantsPageHeader;