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
  },
});

theme = responsiveFontSizes(theme);

export default theme;