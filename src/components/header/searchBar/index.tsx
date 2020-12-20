import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { Box } from '@material-ui/core';

const SearchBar: React.FC = () => {
  return (
    <Box
      flexGrow={1}
    >
      <TextField
        fullWidth
        margin="dense"
        size="small"
        placeholder="Search 3D Models"
        color="primary"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="disabled"/>
            </InputAdornment>
          )
        }}
      />
    </Box>
  )
}

export default SearchBar;
