import React from 'react';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantPageHeader = (props) => (
  <div>
    <div className='restaurantPageName'>{props.restaurantData.name}</div>
    <div className='backButton' onClick={() => props.backClicked()}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  </div>
);

export default RestaurantPageHeader;