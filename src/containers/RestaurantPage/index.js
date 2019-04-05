import React from 'react';
import Map from '../../components/Map';
import './RestaurantPage.css';

const RestaurantPage = (props) => (
  <div className='restaurantPage'>
    <div className='restaurantPageName'>{props.restaurantData.name}</div>
    <div className='backButton' onClick={() => props.backClicked()}>
      BACK
    </div>
    <Map />
  </div>
);

export default RestaurantPage;