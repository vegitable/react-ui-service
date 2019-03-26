import React from 'react';
import { pickColourPair } from '../../helpers/ColourPicker';
import ReactFitText from 'react-fittext';
import './AlertBox.css';

const AlertBox = (props) => {
  const colours = pickColourPair();
  
  const showAlert = () => {
    if (props.alertVisible) {
      return 'inline-block'
    } else {
      return 'none'
    };
  };
  
  const alertStyle = {
    color: colours.light,
    backgroundColor: colours.dark,
    display: showAlert()
  };


  return (
    <div className='alertBox'>
        <div className='alert'
          style={alertStyle}>
          <div className='alertTextContainer'>
            <ReactFitText compressor={1}>
              <div className='alertText'>
                {props.alertMessage}
              </div>
            </ReactFitText>
          </div>
        </div>
    </div>
  );
};

export default AlertBox;