import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ErrorSnackbar({ errorMessage }) {
  const classes = useStyles();
  const [open, setOpen] = useState(() => {
    console.log(`Initial snackbar state: ${!!errorMessage}`);
    return !!errorMessage;
  });
  console.log("open", open);
  console.log("errorMessage", errorMessage);

  if (!errorMessage) {
    console.warn(
      `Tried to show a snackbar with no message set: ${errorMessage}`
    );
    setOpen(false);
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={errorMessage && open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
