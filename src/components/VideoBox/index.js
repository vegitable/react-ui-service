import React from 'react';
import './VideoBox.css';

const VideoBox = () => (
  <div className='videoBox'>
    <video className='video' autoPlay loop muted>
      <source src='/videos/videoBox2000.mp4' type='video/mp4' />
    </video>
  </div>
);

export default VideoBox;
