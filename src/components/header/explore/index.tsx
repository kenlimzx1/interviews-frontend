import React from 'react';
import Button from '@material-ui/core/Button';
import DropDownIcon from '@material-ui/icons/ArrowDropDownRounded';
import styles from './explore.module.css';

const Explore: React.FC = () => {
  return (
    <Button
      size="small"
      className={styles.exploreButton}
    >
      Explore
      <DropDownIcon />
    </Button>
  )
}

export default Explore;
