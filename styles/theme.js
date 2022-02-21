import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },
  palette: {
    primary: { main: '#40464d' },
    secondary: { main: '#f48a88' }
  },
  typography: {
    fontFamily: [
      'Nunito',
      'sans-serif',
    ].join(','),
    fontWeightLight: 400,
    fontWeightBold: 700,
    header1: {
      fontSize: 32,
    },
    header2: {
      fontSize: 20,
    },
    header3: {
      fontSize: 16,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    body3: {
      fontSize: 12,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;