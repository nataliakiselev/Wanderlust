import React from "react";
// import NewsHeader from '../components/NewsHeader';
import Header from "../components/Header";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import News from "../components/News";

function NewsFeed() {
  return (
    <div className="page">
      <Header />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <h1>News</h1>
            <News />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default NewsFeed;
