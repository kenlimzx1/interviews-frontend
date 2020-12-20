import React from 'react';
import { Slide } from 'react-slideshow-image';
import styles from './slideShow.module.css';
import proto from '../../../assets/images/apple-proto.png';

const slideImages = [
  proto,
  proto,
  proto,
];

const slideProperties = {
  scale: 0.4,
  indicators: (i: number) => (<div className={styles.indicator}></div>)
}

const Slideshow: React.FC = () => {
  return (
    <section className={styles.container}>
      <Slide easing="ease" {...slideProperties}>
        <div className="each-slide">
          <div className={styles.imageWrapper}>
            <img src={slideImages[0]} alt="" />
          </div>
        </div>
        <div className="each-slide">
          <div className={styles.imageWrapper}>
            <img src={slideImages[1]} alt="" />
          </div>
        </div>
        <div className="each-slide">
          <div className={styles.imageWrapper}>
            <img src={slideImages[2]} alt="" />
          </div>
        </div>
      </Slide>
    </section>
  )
};

export default Slideshow;