import React from 'react';
import styles from './home.module.css';
import Slideshow from './slideShow';
import 'react-slideshow-image/dist/styles.css'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../../assets/images/logo-horizontal.png';
import uploadAndShare from '../../assets/icons/upload.svg';
import threedIcon from '../../assets/icons/3d-printing.svg';
import binocullarIcon from '../../assets/icons/binocullar.png';

const features = [
  { img: uploadAndShare, title: 'Upload and Share' },
  { img: threedIcon, title: 'View 3D Model' },
  { img: binocullarIcon, title: 'Find 3D Model' },
]

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Slideshow />
      <section className={styles.browseNow}>
        <Button
          className={styles.browseNowBtn}
          color="primary"
          variant="contained"
        >
          Browse Now
        </Button>
      </section>
      <section className={styles.aboutUs}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Interviews Logo" />
        </div>
        <div className={styles.projectName}>
          <Typography variant="h1" align="center">
            INTEGRATABLE THREE DIMENSIONAL PRODUCT VIEWER WEB SERVICE
          </Typography>
        </div>
      </section>
      <section className={styles.features}>
        {
          features.map((row, key) => (
            <div key={key} className={styles.featuresItem}>
              <img src={row.img} alt="" />
              <Typography align="center">
                {row.title}
              </Typography>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default Home;
