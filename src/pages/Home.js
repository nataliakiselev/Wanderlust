import React from "react";
import Header from "../components/Header";
import { Container, Grid } from "@material-ui/core";
import WeatherToday from "../components/WeatherToday";
import Venues from "../components/Venues";
import { CityContextProvider } from "../contexts/CityContext";

function Home() {
  return (
    <div>
      <CityContextProvider>
        <Header searchBar />
        <Container>
          <Grid container spacing={3} justify="center">
            <Grid item sm={3}>
              <WeatherToday heading="Weather Today" />
            </Grid>
            <Grid item sm={9}>
              <Venues heading="Explore Venues" />
            </Grid>
          </Grid>
        </Container>
      </CityContextProvider>
    </div>
  );
}

export default Home;
