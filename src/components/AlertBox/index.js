import React from 'react';
import pickColourPair from '../../helpers/ColourPicker';

import './AlertBox.css';

const AlertBox = (props) => {
  const colours = pickColourPair();

  const alertStyle = {
    color: colours.light,
    backgroundColor: colours.dark
  };

  return (
    <div className='alertBox'>
      <div className='alert'
        style={alertStyle}>
        {props.alertMessage}
      </div>
    </div>
  );
};

export default AlertBox;