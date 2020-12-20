import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import styles from './actions.module.css';
import UploadIcon from '@material-ui/icons/CloudUpload';

const Actions: React.FC = () => {
  return (
    <div className={styles.container}>
      <Button
        size="small"
        variant="text"
        color="primary"
      >
        LOGIN        
      </Button>
      <Button
        size="small"
        variant="contained"
        color="primary"
      >
        SIGN UP        
      </Button>
      <Button
        size="small"
        variant="contained"
        color="secondary"
      >
        <Box
          mr={1}
          display="flex"
          alignItems="center"
        >
          <UploadIcon fontSize="small"/>
        </Box>
        UPLOAD        
      </Button>
    </div>
  )
}

export default Actions;
