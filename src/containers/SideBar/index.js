import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = (props) => (
  <div className='menuContainer'>
    <Menu {...props}>
      <Link className="menu-item" to="/">
        HOME
      </Link>
      <Link className="menu-item" to="/about">
        ABOUT
      </Link>
      <Link className="menu-item" to="/donate">
        DONATE
      </Link>
    </Menu>
  </div>
);

export default SideBar;