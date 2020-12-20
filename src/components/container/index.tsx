import React from 'react';
import Footer from '../footer';
import Header from '../header';
import styles from './container.module.css';

const Container: React.FC = (props) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Container;
