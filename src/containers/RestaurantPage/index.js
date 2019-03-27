import React from 'react';
import './RestaurantPage.css';

const RestaurantPage = (props) => (
  <div className='restaurantPage'>
    {props.restaurantData.name}
    <div className='backButton' onClick={() => props.backClicked()}>
      BACK
    </div>
  </div>
);

export default RestaurantPage;