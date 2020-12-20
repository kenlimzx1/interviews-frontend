import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import styles from './actions.module.css';
import UploadIcon from '@material-ui/icons/CloudUpload';
import Login from '../../auth/login';
import Register from '../../auth/register';
import { useStateContext } from '../../../context';
import Upload from '../../upload';
import { Avatar } from '@material-ui/core';

const Actions: React.FC = () => {
  const [action, setAction] = useState('none');

  const [{ user }] = useStateContext();

  function handleResetAction() {
    setAction('none');
  }

  return (
    <div className={styles.container}>
      <Grow in={!user?.email} mountOnEnter unmountOnExit>
        <>
          <Button
            size="small"
            variant="text"
            color="primary"
            onClick={() => setAction('login')}
          >
            LOGIN
          </Button>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => setAction('register')}
          >
            SIGN UP
          </Button>
        </>
      </Grow>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        onClick={() => setAction((user?.email) ? 'upload' : 'login')}
      >
        <Box
          mr={1}
          display="flex"
          alignItems="center"
        >
          <UploadIcon fontSize="small" />
        </Box>
        UPLOAD
      </Button>
      <Grow in={user?.email} mountOnEnter unmountOnExit>
        <Box 
          ml="1rem"
        >
          <Avatar color="primary">
            {user?.name[0]}
          </Avatar>
        </Box>
      </Grow>
      <Login
        open={action === 'login'}
        onRegister={() => setAction('register')}
        onClose={handleResetAction}
      />
      <Register
        open={action === 'register'}
        onLogin={() => setAction('login')}
        onClose={handleResetAction}
      />
      <Upload
        open={action === 'upload'}
        onClose={handleResetAction}
      />
    </div>
  )
}

export default Actions;
