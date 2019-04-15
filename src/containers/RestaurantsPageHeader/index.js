import React from 'react';
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './RestaurantsPageHeader.css';

const RestaurantsPageHeader = () => (
  <div className='restaurantsPageHeader'>
    <button>
      <FontAwesomeIcon icon={faUtensils} />
    </button>
  </div>
);

export default RestaurantsPageHeader;