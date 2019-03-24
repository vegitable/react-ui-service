import React, { Fragment } from 'react';
import RestaurantTile from '../../components/RestaurantTile';

const RestaurantTileList = (props) => {
  const renderedItems = (props.restaurantData).map((restaurant, index) => (
    <Fragment key={restaurant._id}>
      <RestaurantTile data={restaurant} />
    </Fragment>
  ));

  return (
    <div>
      {renderedItems}
    </div>
  )
};

export default RestaurantTileList;