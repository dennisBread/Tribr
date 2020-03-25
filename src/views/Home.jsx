import React from 'react';
import Grid from '@material-ui/core/Grid';
import {useStyles } from "../styles/lib/header.styles";
import Header from '../components/layouts/Header.component';
import Welcome from './WelcomePage'

const Home = () => {
  const classes = useStyles();
  
  return (
    <Grid>
        <Header />
        <Welcome />
    </Grid>
  );
};

export default Home;
