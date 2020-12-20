import React from 'react';
import styles from './header.module.css';
import SearchBar from './searchBar';
import Actions from './actions';
import Explore from './explore';
import Branding from './branding';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Branding/>
      <Explore/>
      <SearchBar/>
      <Actions/>
    </header>
  )
}

export default Header;
