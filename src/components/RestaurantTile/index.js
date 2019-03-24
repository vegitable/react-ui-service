import React from 'react';
import ReactFitText from 'react-fittext';
import { pickColourPair } from '../../helpers/ColourPicker';
import './RestaurantTile.css';

const RestaurantTile = (props) => {
  const colours = pickColourPair();

  const tileStyle = {
    color: colours.light,
    backgroundColor: colours.dark
  };

  return (
    <div className='restaurantTile' style={tileStyle}>
      <ReactFitText compressor={1}>
        <div className='restaurantName'>
          <span className='restaurantNameText'>
            {props.data.name}
          </span>
        </div>
      </ReactFitText>
    </div>
  )
};

export default RestaurantTile;