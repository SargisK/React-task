import React from 'react'
import Header from '../Header'
import Section from '../Section'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto/index.css'
import './app.css';

export default () => {
  return (
    <div className='app' >
      <Paper>  
        <Grid container direction='column'>
          <Header />
          <Section />       
        </Grid>
      </Paper>   
    </div>
  )
}

