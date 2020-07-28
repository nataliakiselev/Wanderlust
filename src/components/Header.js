import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import CitySearch from "./CitySearch";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  list: {
    width: 250,
  },
}));

function Header({ searchBar }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <div
            className={classes.list}
            role="presentation"
            onClick={() => setOpen(false)}
            onKeyDown={() => setOpen(false)}
          >
            <List>
              <ListItem button>
                <NavLink to="/">Home</NavLink>
                {/* <ListItemText primary={text} /> */}
              </ListItem>
              <ListItem button>
                <NavLink to="/newsfeed">News Feed</NavLink>
              </ListItem>
            </List>
          </div>
        </Drawer>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            WANDERLUST
          </Typography>
          {searchBar && <CitySearch />}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
