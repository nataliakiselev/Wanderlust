import React, { useContext } from 'react';
import { CityContext } from '../CityContext';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}));


const CitySearch = props => {
  const classes = useStyles();
  const [term, setTerm] = useContext(CityContext)
  return (
   
       <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase 
            value={term}
            onChange={e => {
              console.log('value', e.target.value);
          setTerm(e.target.value)
        }}
              placeholder="Enter your city"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
    </div>
  );
};

// class CitySearch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cityname: ""
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//   }
//   handleChange(e) {
//     const input = e.target;
//     const value = input.value;
//     // console.log('value', value);
//     this.setState({
//       cityname: value
//     });
//   }
//   render() {
//     let component = null;
//     if (this.state.cityname) {
//     } else {
//       component = <p>Choose a city</p>;
//     }
//     return (
//       <>

//         <form onSubmit={this.handleSubmit}>
//           <input
//             name="cityname"
//             type="text"
//             value={this.state.cityname}
//             onChange={this.handleChange}
//           />
//           {/* <select  name="countrycode"
//             type="text"
//             value={this.state.countrycode}
//             onChange={this.handleChange}></select>  */}

//           <button>Get Weather</button>
//         </form>

//       </>
//     );
//   }
// }

export default CitySearch;
