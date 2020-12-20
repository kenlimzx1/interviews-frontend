import React, { useEffect, useRef } from 'react';
import Footer from '../footer';
import Header from '../header';
import styles from './container.module.css';

const Container: React.FC = (props) => {
  const { children } = props;

  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let scrollEvent:any = null;
    let curContainer = container.current;
    const header = document.getElementsByTagName('header')[0];

    if (curContainer) {
      scrollEvent = curContainer.addEventListener('scroll', (event: any) => {
        const { target } = event;

        if (target.scrollTop > 0) {
          header.style.boxShadow = '1px 2px 5px #0000001a';
        } else {
          header.style.boxShadow = 'none';
        }

      }, false);
    }

    return (() => {
      if (scrollEvent && curContainer) {
        curContainer.removeEventListener('scroll', scrollEvent, false);
      }
    })
  }, []);

  return (
    <div className={styles.container} ref={container}>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Container;
