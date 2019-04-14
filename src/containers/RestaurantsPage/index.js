import React, {Fragment} from 'react';
import RestaurantsPageHeader from '../RestaurantsPageHeader';
import RestaurantsTileList from '../RestaurantTileList';
import RestaurantFocusPage from '../RestaurantFocusPage';
import { withRouter } from 'react-router-dom';

class RestaurantsPage extends React.Component {
  state = {
    restaurantClicked: false,
  }
  
  routeToHome = () => {
    this.props.history.push('/');
  };

  displayRestaurants = () => (
    <div>
      <RestaurantsPageHeader />
      <RestaurantsTileList 
        restaurantData={this.props.restaurantData}
        restaurantOnClick={this.restaurantClicked}  
      />
    </div>
  )

  restaurantClicked = (data) => {
    this.setState({
      restaurantClicked: true,
      clickedRestaurantData: data
    });
  };

  backClicked = () => {
    this.setState({
      restaurantClicked: false
    });
  };

  restaurantsTileList = () => {
    return (
      <Fragment>
        { this.props.restaurantData.length ? this.displayRestaurants() : this.routeToHome()  
        }
      </Fragment>
    );
  };

  restaurantFocus = () => {
    return (
      <div>
        <RestaurantFocusPage 
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
