import React from 'react';
import RestaurantsTileList from '../RestaurantTileList';
import { withRouter } from 'react-router-dom';

class RestaurantsPage extends React.Component {
  
  routeToHome = () => {
    this.props.history.push('/');
  };

  restaurantClicked = () => {
    console.log('working')
  };

  render () {
    return (
      <div>
        { this.props.restaurantData.length ? 
          <RestaurantsTileList 
            restaurantData={this.props.restaurantData}
            restaurantOnClick={this.restaurantClicked}  
          /> : 
          this.routeToHome()  
        }
      </div>
    );
  };
};

export default withRouter(RestaurantsPage);
