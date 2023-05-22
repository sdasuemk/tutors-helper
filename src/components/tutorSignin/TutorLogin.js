import AssignmentIcon from '@mui/icons-material/Assignment';
import { Button, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import loginImage from '../assets/login.svg';

import React, { useState } from 'react';
import styles from './tutorLogin.module.css';

const TutorLogin = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = e => {
    e.preventDefault();
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(state);
  };
  return (
    <div>
      <Box className={styles.containerSplit}>
        <Box className={styles.logImage}>
          <img src={loginImage} alt='login' />
        </Box>
        <Box className={styles.logImage}>
          <div className={styles.loginForm}>
            <section className={styles.iconAvatar}>
              <Avatar sx={{ bgcolor: green[500] }}>
                <AssignmentIcon />
              </Avatar>
            </section>
            <section>Login</section>
            <section className={styles.loginInst}>
              Please provide your login credential below
            </section>
            <form onSubmit={handleSubmit} className={styles.inputBox}>
              <TextField
                id='standard-basic'
                label='Email'
                variant='standard'
                required
                margin='normal'
                name='email'
                onChange={handleSubmit}
              />
              <TextField
                id='standard-basic'
                label='Password'
                variant='standard'
                required
                type='password'
                margin='normal'
                name='password'
                onChange={handleSubmit}
              />
              <Button
                className={styles.loginButton}
                variant='contained'
                type='submit'
              >
                Login
              </Button>
            </form>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default TutorLogin;
