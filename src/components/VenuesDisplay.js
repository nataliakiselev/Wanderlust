import React from "react";
import { Paper } from "@material-ui/core";

const VenuesDisplay = ({ data }) => {
  return data.map((venue) => (
    <Paper variant="outlined" square key={venue.id}>
      <h3>{venue.name}</h3>

      <img
        src={`${venue.categories[0].icon.prefix}bg_64${venue.categories[0].icon.suffix}`}
        alt={venue.categories[0].name}
      />
      <p>{venue.categories[0].name}</p>
      <h4>Address</h4>
      <p>{venue.location.address}</p>

      <p>{venue.url}</p>
    </Paper>
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
