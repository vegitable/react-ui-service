import React from 'react';
import './AlertBox.css';

const AlertBox = (props) => (
  <div className='alertBox'>
    <div className='alertText'>
      {props.alertMessage}
    </div>
  </div>
);

export default AlertBox;