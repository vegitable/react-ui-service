import React from 'react';
import './RestaurantPage.css';

const RestaurantPage = (props) => (
  <div className='restaurantPage'>
    {console.log(props.restaurantData.name)}
  </div>
);

export default RestaurantPage;