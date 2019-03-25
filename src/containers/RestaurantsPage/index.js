import React from 'react';
import RestaurantsTileList from '../RestaurantTileList';
import { withRouter } from 'react-router-dom';

class RestaurantsPage extends React.Component {
  
  redirectToHome = () => {
    this.props.history.push('/');
  }

  render () {
    return (
      <div>
        { this.props.restaurantData.length ? <RestaurantsTileList restaurantData={this.props.restaurantData}/> : this.redirectToHome() }
      </div>
    );
  };
};

export default withRouter(RestaurantsPage);
