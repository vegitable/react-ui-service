import React from 'react';
import './Header.css';
import SideBar from '../SideBar';

const Header = () => (
  <div className='header'>
    <SideBar pageWrapId={"header"} outerContainerId={"App"} />
  </div>
);

export default Header;