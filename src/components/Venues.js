import React, { useContext, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CityContext } from "../contexts/CityContext";
import ErrorSnackbar from "./ErrorSnackbar";
import VenuesDisplay from "./VenuesDisplay";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 0,
  },
}));

const clientId = process.env.REACT_APP_VENUES_CLIENT_ID;
const clientSecret = process.env.REACT_APP_VENUES_CLIENT_SECRET;
const urlBase = "https://api.foursquare.com/v2/venues/explore?near=";
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const dateToday = date.getDate();
const dateString = `${year}${month < 10 ? "0" + month : month}${
  dateToday < 10 ? "0" + dateToday : dateToday
}`;

function Venues({ heading }) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [city] = useContext(CityContext);
  console.log("city venues", city);
  const [pending, setPending] = useState(false);
  const [err, setErr] = useState();

  useEffect(() => {
    async function getVenues() {
      const urlToFetch = `${urlBase}${city}&limit=9&client_id=${clientId}&client_secret=${clientSecret}&v=${dateString}`;
      console.log("calling venues");
      setErr(false);
      setPending(true);

      try {
        const res = await fetch(urlToFetch);

        const respJson = await res.json();

        const places = respJson.response.groups[0].items.map(
          (item) => item.venue,
        );
        console.log(places);
        console.log(places[0].location.city);
        setData(places);
      } catch (err) {
        console.log(err);
        setErr(true);
      }
      setPending(false);
    }
    getVenues();
  }, [city]);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <h1>{heading}</h1>
      </Grid>

      {err && (
        <ErrorSnackbar
          errorMessage={err.message || `${city} ${err.statusText}`}
        />
      )}
      {pending ? <p>Loading...</p> : <VenuesDisplay data={data} />}
    </Grid>
  );
}
export default Venues;
