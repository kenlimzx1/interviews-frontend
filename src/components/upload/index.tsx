import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UploadIcon from '@material-ui/icons/CloudUpload';
import { useForm } from 'react-hook-form';
import TextField from '../common/form/text';
import Dialog from '../dialog';
import styles from './upload.module.css';

const UploadContainer: React.FC = () => {
  return (
    <Box
      height={200}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      borderRadius={5}
      mb="1rem"
      style={{
        backgroundColor: '#F2F2F2',
      }}
    >
      <UploadIcon/>
      <Typography>
        Upload here
      </Typography>
    </Box>
  )
}

interface UploadProps {
  open: boolean;
  onClose: () => void;
}

const Upload: React.FC<UploadProps> = (props: UploadProps) => {
  const { open, onClose } = props; 

  const { control, handleSubmit } = useForm({
    defaultValues: {
      item_name: '',
      item_description: '',
    }
  });

  function handleOnSubmit(values: Record<string, any>) {
  
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={'Upload'}
    >
      <React.Fragment>
        <form className={styles.form} onSubmit={handleSubmit(handleOnSubmit)}>
          <TextField
            name="item_name"
            type="text"
            label="Item Description"
            placeholder="type something"
            required
            control={control}
          />
          <TextField
            name="item_description"
            type="text"
            label="Item Description"
            placeholder="type something"
            control={control}
          />
          <UploadContainer/>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            Submit
          </Button>
        </form>
      </React.Fragment>
    </Dialog >
  )
}

export default Upload;
