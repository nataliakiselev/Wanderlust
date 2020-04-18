import React from 'react';
import Header from '../components/Header';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import WeatherToday from '../components/WeatherToday';
import {CityContextProvider} from '../CityContext'
import ErrorBoundary from '../components/ErrorBoundary';

function Home() {
  return (
    <div className="page">
     <CityContextProvider>
      <Header />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={6}>
          <ErrorBoundary>
            <WeatherToday  heading="Weather Today" />
            </ErrorBoundary>
          </Grid>
          <Grid item xs={6}>
            <h1>Things to do</h1>
          </Grid>
        </Grid>
      </Container>
      </CityContextProvider>
    </div>
  );
}

export default Home;
