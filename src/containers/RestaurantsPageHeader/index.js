import React from 'react';
import { faUtensils, faStar, faRoute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './RestaurantsPageHeader.css';

const RestaurantsPageHeader = () => (
  <div className='restaurantsPageHeader'>
    <div>
      <FontAwesomeIcon icon={faRoute} />
    </div>
    <div>
      <FontAwesomeIcon icon={faUtensils} />
    </div>
    <div>
      <FontAwesomeIcon icon={faStar} />
    </div>
  </div>
);

export default RestaurantsPageHeader;