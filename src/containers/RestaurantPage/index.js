import React from 'react';
import Map from '../../components/Map';
import './RestaurantPage.css';

const RestaurantPage = (props) => (
  <div className='restaurantPage'>
    {props.restaurantData.name}
    <div className='backButton' onClick={() => props.backClicked()}>
      BACK
    </div>
    <Map />
  </div>
);

export default RestaurantPage;