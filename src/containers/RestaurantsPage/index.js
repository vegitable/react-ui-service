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

  backClicked = () => {
    this.setState({
      restaurantClicked: false
    })
  }

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

  restaurantFocus = () => {
    return (
      <div>
        <RestaurantPage 
          restaurantData={this.state.clickedRestaurantData} 
          backClicked={this.backClicked}/>
      </div>
    );
  };

  render () {
    return (
      <div>
        { this.state.restaurantClicked ? this.restaurantFocus() : this.restaurantsTileList() }
      </div>
    );
  };
};

export default withRouter(RestaurantsPage);
