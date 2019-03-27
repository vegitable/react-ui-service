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
    <div className='restaurantTile' style={tileStyle} onClick={props.restaurantOnClick}>
      <ReactFitText compressor={1}>
        <div className='restaurantName'>
          <span className='restaurantNameText'>
            {props.data.name}
          </span>
        </div>
      </ReactFitText>
      <div className='restaurantInfo'>
        <div className='restaurantRating'>
          {props.data.rating}
        </div>
        <div className='restaurantDishes'>
          {props.data.dishes.length}
        </div>
          <div className='restaurantLocation'>
            {props.data.postcode}
          </div>
      </div>
    </div>
  )
};

export default RestaurantTile;