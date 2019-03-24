import React from 'react';
import './RestaurantTile.css';

const RestaurantTile = (props) => (
  <div className='restaurantTile'>
    {props.data.name}
  </div>
);

export default RestaurantTile;