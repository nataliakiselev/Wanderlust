import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#58a5f0",
      main: "#004c8c",

      contrastText: "#fff",
    },
    secondary: {
      light: "#e5ffff",
      main: "#b2dfdb",
      dark: "#82ada9",
      contrastText: "#000000",
    },
  },
});

export default theme;
