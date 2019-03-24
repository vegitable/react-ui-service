import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => (
  <div className='logo'>
    <Link className="logoLink" to="/">
      VEGITABLE
    </Link>
  </div>
);

export default Logo;