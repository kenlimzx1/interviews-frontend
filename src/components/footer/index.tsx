import { Button, Typography } from '@material-ui/core';
import React from 'react';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.webInfo}>
        <Typography color="primary">
          &copy; {new Date().getFullYear()}
        </Typography>
      </div>
      <div className={styles.contacts}>
        <Button color="primary" size="small">
          About Us
        </Button>
        <Button color="primary" size="small">
          Contact Us
        </Button>
      </div>
    </footer>
  )
}

export default Footer;
