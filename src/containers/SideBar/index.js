import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import './SideBar.css';

const SideBar = (props) => (
  <Menu {...props}>
      <a className="menu-item" href="/">
        HOME
      </a>
      <a className="menu-item" href="/about">
        ABOUT
      </a>
      <a className="menu-item" href="/donate">
        DONATE
      </a>
  </Menu>
);

export default SideBar;