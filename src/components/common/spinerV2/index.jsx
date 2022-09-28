/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const SpinerV2 = () => {
  return (
    <div className='spinerV2'>
      <div className='spinerV2__content'>
        <CircularProgress
          variant='indeterminate'
          disableShrink
          sx={{
            color: '#FFC59E',
          }}
          size={120}
        />
      </div>
    </div>
  );
};

export default SpinerV2;
