import React from 'react';
import RestaurantFocusPageHeader from '../RestaurantFocusPageHeader';
import Map from '../../components/Map';
import './RestaurantPage.css';

const RestaurantPage = (props) => (
  <div className='restaurantPage'>
    <RestaurantFocusPageHeader 
      restaurantData={props.restaurantData} 
      backClicked={props.backClicked}
    />
    <div className='restaurantPageMapContainer'>
      <Map />
    </div>
  </div>
);

export default RestaurantPage;