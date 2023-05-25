import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import Router from '../components/router/Router';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#263238',
      darker: '#053e85',
    },
    secondary: {
      main: '#bf360c',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default IndexPage;
