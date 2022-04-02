import Head from 'next/head';
import { useTheme, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';

import '/styles/globals.css';
import theme from '../styles/theme';

import Header from '@components/Header';
import Footer from '@components/Footer';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const themes = useTheme();
  const isMobile = useMediaQuery(themes.breakpoints.down('md'));

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Sushi Rollin'</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header isMobile={isMobile} />
        <Component {...pageProps} isMobile={isMobile} />
        <Footer isMobile={isMobile} />
      </ThemeProvider>
    </CacheProvider>
  );
}
