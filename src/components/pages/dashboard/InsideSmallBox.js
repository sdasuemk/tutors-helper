import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React from 'react';

const InsideSmallBox = ({ width, height, backgroundColor, chartToDisplay }) => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 1,
            width: width,
            height: height,
            backgroundColor: backgroundColor,
            borderRadius: '8px',
          },
        }}
      >
        <Paper variant='outlined'>{chartToDisplay}</Paper>
      </Box>
    </div>
  );
};

export default InsideSmallBox;
