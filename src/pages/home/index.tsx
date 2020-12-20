import React from 'react';
import styles from './home.module.css';
import Slideshow from './slideShow';
import 'react-slideshow-image/dist/styles.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Slideshow/>
    </div>
  )
}

export default Home;
