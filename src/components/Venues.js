import React, {
  useContext,
  useState,
  useEffect,
  useReducer /* useCallback */,
} from "react";
import { CityContext } from "../contexts/CityContext";
import ErrorSnackbar from "./ErrorSnackbar";
// import {Paper, makeStyles} from "@material-ui/core";
import VenuesDisplay from "./VenuesDisplay";

const clientId = "EP4ZZTBXPWE3LVNLTLM2GJ4QITRAP00T3JZ2QNLRXATBGK2L";
const clientSecret = "A53P043ZL0PT1WV5J1B1O1BZMCL3LUC5PYA1AR25WIFW4SMD";
const urlBase = "https://api.foursquare.com/v2/venues/explore?near=";
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const dateToday = date.getDate();
const dateString = `${year}${month < 10 ? "0" + month : month}${
  dateToday < 10 ? "0" + dateToday : dateToday
}`;

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
        err: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        err: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        err: true,
      };
    default:
      throw new Error();
  }
};

const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    err: false,
    data: initialData,
  });
  console.log(initialUrl);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const res = await fetch(url);

        const respJson = await res.json();

        const places = respJson.response.groups[0].items.map(
          (item) => item.venue
        );
        console.log(places);
        dispatch({ type: "FETCH_SUCCESS", payload: places });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE" });
      }
    };
    console.log(url);
    fetchData();
  }, [url]);

  return [state, setUrl];
};

function Venues({ heading }) {
  //  const [data, setData] = useState( []);
  const [city] = useContext(CityContext);
  console.log("city venues", city);
  //  const [pending, setPending] = useState(false);
  // const [err, setErr] = useState(false);
  //  const [url, setUrl] = useState(`${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=${dateString}`)
  const [{ data, isLoading, err }, doFetch] = useDataApi(
    `${urlBase}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=${dateString}`,
    []
  );
  useEffect(() => {
    doFetch();
    console.log("doing fetch url");
  }, [city, doFetch]);

  return (
    <>
      <h1> {heading} </h1>

      {err && (
        <ErrorSnackbar
          errorMessage={err.message || `${city} ${err.statusText}`}
        />
      )}
      {isLoading ? <p>Loading...</p> : <VenuesDisplay data={data} />}
    </>
  );
}
export default Venues;

// https://api.foursquare.com/v2/venues/explore?near=london&limit=10&client_id=EP4ZZTBXPWE3LVNLTLM2GJ4QITRAP00T3JZ2QNLRXATBGK2L&client_secret=A53P043ZL0PT1WV5J1B1O1BZMCL3LUC5PYA1AR25WIFW4SMD&v=20200429

//   function Venues ({heading}){;

//     const [city] =  useContext(CityContext);
//     const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=${dateString}`;

//     return (
//       <>
//       {isError && <div>Something went wrong ...</div>}

//       {loading ? (
//         <div>Loading ...</div>
//       ) :(
//         <div>
//         <h1> {heading} </h1>

//      {data.map(venue => (

//      <div key={venue.id}>
//                <h3>{venue.name}</h3>

//                  <img src={`${venue.categories[0].icon.prefix}bg_64${venue.categories[0].icon.suffix}`} alt={venue.categories[0].name} />
//                  <p>{venue.categories[0].name}</p>
//                  <h4>Address</h4>
//                   <p>{venue.location.address}</p>

//                  <p>{venue.url}</p>
//                </div>
//      ))}

//      </div>

//     )
//     }
//     </>)
//     }

//  export default Venues;

// useEffect(()=>{
//   async function getVenues(){
//     const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=${dateString}`;
//       console.log('calling venues')
//       setErr(false);
//       setPending(true);

//       try {
//         const res= await fetch(urlToFetch);

//           const respJson = await res.json();

//         const places =respJson.response.groups[0].items.map(item => item.venue);
//           console.log(places);
//           console.log(places[0].location.city)
//          setData(places);

//           } catch (error) {
//             console.log(err);
//             setErr(true);
//           } setPending(false) }
//           getVenues();
//         }, [city]);

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
