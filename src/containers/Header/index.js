import React from 'react';
import './Header.css';
import Logo from '../../components/Logo';
import SideBar from '../SideBar';

const Header = () => (
  <div className='header'>
    <Logo />
    <SideBar pageWrapId={"header"} outerContainerId={"App"} />
  </div>
);

export default Header;