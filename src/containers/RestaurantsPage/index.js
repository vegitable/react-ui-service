import React from 'react';
import RestaurantsTileList from '../RestaurantTileList';

class RestaurantsPage extends React.Component {
  render () {
    return (
      <div>
        <RestaurantsTileList restaurantData={this.props.restaurantData}/> 
      </div>
    );
  };
};

export default RestaurantsPage;
