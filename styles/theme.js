import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const fontBold = 700;

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
    primary: { main: '#40464D', contrastText: '#FFFFFF' },
    secondary: { main: '#F48A88' },
    text: { main: '#333333' },
    common: { beige: '#FBF8ED' },
    footer: { main: '#262626' },
  },
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
    h1: {
      fontSize: 60,
      fontWeight: fontBold,
    },
    h2: {
      fontSize: 32,
      fontWeight: fontBold,
    },
    h3: {
      fontSize: 20,
      fontWeight: fontBold,
    },
    h4: {
      fontSize: 18,
      fontWeight: fontBold,
    },
    h5: {
      fontSize: 16,
      fontWeight: fontBold,
    },
    h6: {
      fontSize: 12,
      fontWeight: fontBold,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: fontBold,
    },
    subtitle2: {
      fontSize: 12,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    body3: {
      fontSize: 14,
      fontweight: fontBold,
    },
    button: {
      fontWeight: fontBold,
      fontSize: 16,
      textTransform: 'none',
    },
  },
});
theme.components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 100,
        height: 54,
        paddingLeft: 48,
        paddingRight: 48,
        paddingTop: 16,
        paddingBottom: 16,
        // mobile button
        [theme.breakpoints.down('md')]: {
          height: 43,
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 12,
          paddingBottom: 12,
        },
        backgroundColor: '#40464D',
        color: '#FFFFFF',
        '&:hover': {
          backgroundColor: '#F48A88',
          color: '#40464D',
        },
      },
      outlined: {
        backgroundColor: 'transparent',
        color: '#FAF6E8',
        borderColor: '#FAF6E8',
        borderWidth: 2,
      },
    },
  },
};

theme = responsiveFontSizes(theme);

export default theme;