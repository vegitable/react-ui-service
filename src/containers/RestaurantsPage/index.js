import React from 'react';

class RestaurantsPage extends React.Component {
  render () {
    return (
      <div>
        {console.log(this.props.restaurantData)}
      </div>
    );
  };
};

export default RestaurantsPage;
