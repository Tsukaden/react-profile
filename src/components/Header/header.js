import React from 'react';
import Navigation from '../Navigation/navigation.js';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Kaden Inskeep</h1>
      <Navigation />
    </header>
  );
};

export default Header;