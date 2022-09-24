/* eslint-disable react/prop-types */
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const CustomeSpiner = ({ text }) => (
  <div className='spiner'>
    <div className='spiner__castome'>
      <div className='spiner__spiner'>
        <CircularProgress
          variant='indeterminate'
          disableShrink
          sx={{
            color: '#FFC59E',
          }}
          size={120}
        />
      </div>
      <h2 className='spiner__text'>{text}</h2>
    </div>
  </div>
);

export default CustomeSpiner;
