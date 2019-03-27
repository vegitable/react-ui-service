import React, { Fragment } from 'react';
import RestaurantTile from '../../components/RestaurantTile';
import './RestaurantTileList.css';

const RestaurantTileList = (props) => {
  const renderedItems = (props.restaurantData).map((restaurant, index) => (
    <Fragment key={restaurant._id}>
      <RestaurantTile data={restaurant} restaurantOnClick={props.restaurantOnClick} />
    </Fragment>
  ));

  return (
    <div className='restaurantTileList'>
      {renderedItems}
    </div>
  )
};

export default RestaurantTileList;