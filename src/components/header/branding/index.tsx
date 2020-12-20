import React from 'react';
import styles from './branding.module.css';
import logo from '../../../assets/images/logo.png';

const Branding: React.FC = () => {
  return (
    <div className={styles.brand}>
      <img src={logo} alt="Interviews Logo" />
    </div>
  )
}

export default Branding;
