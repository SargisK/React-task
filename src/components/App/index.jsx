import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../Header';
import Section from '../Section';
import 'typeface-roboto';
import './app.css';

export default () =>
  <div className="app">
    <Paper>
      <Grid container direction="column">
        <Header />
        <Section />
      </Grid>
    </Paper>
  </div>
