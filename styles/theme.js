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
    secondary: { main: '#f48a88' },
  },
  typography: {
    fontFamily: [
      'Nunito',
      'sans-serif',
    ].join(','),
    fontWeightLight: 400,
    fontWeightBold: 700,
    button: {
      fontWeight: 700,
      fontSize: 16,
      textTransform: "none"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          height: 54,
          paddingLeft: 48,
          paddingRight: 48,
          paddingTop: 16,
          paddingBottom: 16,
          backgroundColor: '#40464D',
          color: '#FFFFFF'
        },
        outlined: {
          backgroundColor: 'transparent',
          color: '#FAF6E8',
          borderColor: '#FAF6E8',
          borderWidth: 2,
        }
      },
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;