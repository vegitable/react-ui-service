import React from 'react';
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './RestaurantsPageHeader.css';

const RestaurantsPageHeader = () => (
  <div className='restaurantsPageHeader'>
    <div>
      <FontAwesomeIcon icon={faUtensils} />
    </div>
  </div>
);

export default RestaurantsPageHeader;