import React, {Fragment} from 'react';
import RestaurantsTileList from '../RestaurantTileList';
import RestaurantPage from '../RestaurantPage';
import { withRouter } from 'react-router-dom';

class RestaurantsPage extends React.Component {
  state = {
    restaurantClicked: false,
  }
  
  routeToHome = () => {
    this.props.history.push('/');
  };

  restaurantClicked = (data) => {
    this.setState({
      restaurantClicked: true,
      clickedRestaurantData: data
    });
  };

  restaurantsTileList = () => {
    return (
      <Fragment>
        { this.props.restaurantData.length ? 
          <RestaurantsTileList 
            restaurantData={this.props.restaurantData}
            restaurantOnClick={this.restaurantClicked}  
          /> : 
          this.routeToHome()  
        }
      </Fragment>
    );
  };

  restaurant = () => {
    console.log('HIT');
    return (
      <div>
        <RestaurantPage />
      </div>
    );
  };

  render () {
    return (
      <div>
        { this.state.restaurantClicked ? this.restaurant() : this.restaurantsTileList() }
      </div>
    );
  };
};

export default withRouter(RestaurantsPage);
