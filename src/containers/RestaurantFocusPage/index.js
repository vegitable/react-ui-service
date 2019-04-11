import React from 'react';
import RestaurantPageHeader from '../RestaurantPageHeader';
import Map from '../../components/Map';
import './RestaurantPage.css';

const RestaurantPage = (props) => (
  <div className='restaurantPage'>
    <RestaurantPageHeader 
      restaurantData={props.restaurantData} 
      backClicked={props.backClicked}
    />
    <div className='restaurantPageMapContainer'>
      <Map />
    </div>
  </div>
);

export default RestaurantPage;