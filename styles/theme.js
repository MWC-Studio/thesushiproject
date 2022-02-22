import { createTheme, responsiveFontSizes } from '@mui/material/styles';

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
    primary: { main: '#40464D', dark: '#262626', contrastText: '#FFFFFF' },
    secondary: { main: '#FBF8ED', contrastText: '#F48A88' },
    text: { main: '#333333' },
  },
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
    fontWeightLight: 400,
    fontWeightBold: 700,
    h1: {
      fontSize: 32
    },
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
    button: {
      fontWeight: 700,
      fontSize: 16,
      textTransform: "none"
    },
  },
  components: {
    MuiButton: {
      // TODO: update hover, active pseudo class
      styleOverrides: {
        root: {
          borderRadius: 100,
          height: 54,
          paddingLeft: 48,
          paddingRight: 48,
          paddingTop: 16,
          paddingBottom: 16,
          // TODO: update palette
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
