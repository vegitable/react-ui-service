import React from 'react';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './RestaurantPageHeader.css';

const RestaurantPageHeader = (props) => (
  <div className='restaurantPageHeader'>
    <div className='restaurantPageHeaderBackButton' onClick={() => props.backClicked()}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
    <div className='restaurantPageHeaderName'>{props.restaurantData.name}</div>
  </div>
);

export default RestaurantPageHeader;