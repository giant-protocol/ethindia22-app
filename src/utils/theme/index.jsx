import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00C853",
      light: "#CED6E0",
      contrastText: "#FFFFFF",
    },
    common: {
      white: "#FCFCFC",
      black: "#0B213E",
    },
    secondary: {
      main: "rgba(69, 181, 73, 0.1)",
    },
    text: {
      primary: "#0B213E",
    },
    grey: {
      200: "#C4C4C4",
      400: "#F3F5F8",
      600: "#414141",
      700: "#646464",
      800: "#F3F5F7",
    },
  },
  typography: {
    fontFamily: "DM Sans",
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#45B549",
        },
        arrow: {
          "&::before": {
            backgroundColor: "#45B549",
          },
        },
      },
    },
  },
});
