import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  details: {
    display: "flex",
  },
  content: {
    display: "flex",

    flexDirection: "column",
  },

  cover: {
    width: 70,
    height: 70,
    margin: "auto",
  },
  // header: {
  //   flexBasis: "100%",
  // },
}));

const VenuesDisplay = ({ data }) => {
  const classes = useStyles();
  return data.map((venue) => (
    <Grid item sm={4} key={venue.id}>
      <Card className={classes.root}>
        <CardHeader title={venue.name} className={classes.header} />

        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="body1" color="textSecondary">
              {venue.categories[0].name}
            </Typography>

            <Typography component="h6" variant="h6">
              Address
            </Typography>

            <Typography variant="body1" color="textSecondary">
              {venue.location.address}
            </Typography>

            <Typography variant="body1" color="textSecondary">
              {venue.url}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.cover}
            image={`${venue.categories[0].icon.prefix}bg_64${venue.categories[0].icon.suffix}`}
            title={venue.categories[0].name}
          />
        </div>
      </Card>
    </Grid>
  ));
};

export default VenuesDisplay;

//   const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       '& > *': {
//         margin: theme.spacing(1),
//         // width: theme.spacing(22),
//         // height: theme.spacing(22),
//       },
//   },
//   paper: {
//     padding: '10px',
//     margin: '10px',

//     // display: 'flex',
//     // flexWrap: 'wrap'
//   },
//   info: {
//     display: 'flex',
//   },
//   para: {
//     margin : '0 5px'
//   }
// }));
// {/* <div className={classes.root}> */}
//         {/* {data.map(venue => (

//           <Paper className={classes.paper} elevation={2} square key={venue.id} >
//            <h3>{venue.name}</h3>
//            <div className={classes.info}>
//            <div>
//              <img src={`${venue.categories[0].icon.prefix}bg_64${venue.categories[0].icon.suffix}`} alt={venue.categories[0].name} />
//              <p>{venue.categories[0].name}</p>
//              </div>
//              <div>
//              <h4>Address</h4>
//               <p>{venue.location.address} </p>
//               <p>{venue.location.postalCode}</p>
//              <p>{venue.url}</p>
//              </div>
//              </div>
//              </Paper>
//  ))} </div> */}
