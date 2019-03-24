import React from 'react';
import { pickDarkColour } from '../../helpers/ColourPicker';
import './RestaurantTile.css';

const RestaurantTile = (props) => {
  const colour = pickDarkColour();

  const tileStyle = {
    backgroundColor: colour
  };

  return (
    <div className='restaurantTile' style={tileStyle}>
      {props.data.name}
    </div>
  )
};

export default RestaurantTile;