import React from 'react';
import Map from '../../components/Map';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './RestaurantPage.css';

const RestaurantPage = (props) => (
  <div className='restaurantPage'>
    <div className='restaurantPageName'>{props.restaurantData.name}</div>
    <div className='backButton' onClick={() => props.backClicked()}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
    <Map />
  </div>
);

export default RestaurantPage;