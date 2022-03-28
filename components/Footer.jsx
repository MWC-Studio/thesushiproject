import Box from '@mui/material/Box';
import MuiNextLink from '@components/MuiNextLink';
import { Container, Grid, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import Image from 'next/image';

const Footer = ({ isMobile }) => {
  return (
    <Container
      component="footer"
      sx={{
        py: 3,
        bgcolor: 'footer.main',
        textDecoration: 'none',
        color: 'common.white',
        minWidth: '100vw',
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {/* Logo */}
        <Grid
          item
          sx={{
            align: 'center',
            mt: isMobile ? '29px' : 3,
            mb: isMobile ? '19px' : 0,
          }}
        >
          <MuiNextLink
            href="/"
            underline="none"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Image
              src="/footer/footer_rollinlogo_white.svg"
              alt="logo"
              width={isMobile ? '148' : '204.49'}
              height={isMobile ? '25' : '34.41'}
            />
          </MuiNextLink>
        </Grid>
        {/* Contact us and Find us on */}
        <Container>
          <Grid item xs={12}>
            <Grid
              container
              display="flex"
              justifyContent="space-between"
              // alignItems={isMobile ? 'flex-start' : 'center'}
              alignItems="flex-start"
              flexDirection={isMobile ? 'column' : 'row'}
              px={isMobile ? 1 : 5}
              sx={{ ml: isMobile ? -1 : 0 }}
            >
              {/* Contact us */}
              <Grid item sx={{ mt: isMobile ? 5 : 2 }}>
                <Typography
                  variant={isMobile ? 'body3' : 'h3'}
                  color="primary.contrastText"
                >
                  CONTACT US
                </Typography>

                <Box sx={{ mb: 2, mt: 2 }}>
                  <Link
                    href="mailto:wnsrl91@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: isMobile
                        ? '20px 40px 1fr'
                        : '30px 80px 1fr',
                      columnGap: '12px',
                      rowGap: '16px',
                      textDecoration: 'none',
                      color: 'common.white',
                    }}
                  >
                    <Image
                      src="/footer/icon_email.svg"
                      alt="email"
                      width={isMobile ? 20 : 24}
                      height={isMobile ? 16 : 18.67}
                    />
                    <Typography
                      variant={isMobile ? 'h6' : 'h3'}
                      color="primary.contrastText"
                      fontWeight="700"
                      fontFamily="Nunito"
                    >
                      Email
                    </Typography>
                    <Typography
                      variant={isMobile ? 'subtitle2' : 'h3'}
                      color="primary.contrastText"
                      fontWeight="400"
                      fontFamily="Nunito"
                    >
                      sushirollin.us@gmail.com
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <Link
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: isMobile
                        ? '20px 40px 1fr'
                        : '30px 80px 1fr',
                      columnGap: '12px',
                      rowGap: '16px',
                      textDecoration: 'none',
                      color: 'common.white',
                    }}
                  >
                    <Image
                      src="/footer/molumen_phone_icon.svg"
                      alt="phone number"
                      width="28"
                      height="28"
                    />
                    <Typography
                      variant={isMobile ? 'h6' : 'h3'}
                      color="primary.contrastText"
                      fontWeight="700"
                      fontFamily="Nunito"
                    >
                      Phone
                    </Typography>
                    <Typography
                      variant={isMobile ? 'subtitle2' : 'h3'}
                      color="primary.contrastText"
                      fontWeight="400"
                      fontFamily="Nunito"
                    >
                      956-249-0167
                    </Typography>
                  </Link>
                </Box>
              </Grid>

              {/* Find us on */}
              <Grid item sx={{ mt: isMobile ? 6.5 : '15px' }}>
                <Typography
                  variant={isMobile ? 'body3' : 'h3'}
                  color="primary.contrastText"
                  fontWeight="700"
                  fontFamily="Nunito"
                >
                  FIND US ON
                </Typography>

                <Box sx={{ mb: 2, mt: 2 }}>
                  <Link
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '20px 1fr' : '30px 1fr',
                      columnGap: '12px',
                      rowGap: '16px',
                      textDecoration: 'none',
                      color: 'common.white',
                    }}
                    href="https://www.instagram.com/sushi__rollin/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/footer/instagram.svg"
                      alt="Garland Instagram"
                      width={isMobile ? '18' : '28'}
                      height={isMobile ? '18' : '28'}
                    />
                    <Typography
                      variant={isMobile ? 'h6' : 'h3'}
                      color="primary.contrastText"
                      fontWeight="700"
                      fontFamily="Nunito"
                    >
                      Sushi Rollin’ Garland
                    </Typography>
                  </Link>
                </Box>

                <Box sx={{ mb: 2, mt: 2 }}>
                  <Link
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '20px 1fr' : '30px 1fr',
                      columnGap: '12px',
                      rowGap: '16px',
                      textDecoration: 'none',
                      color: 'common.white',
                    }}
                    href="https://www.instagram.com/sushi_rollin_lewisville/?utm_medium=copy_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/footer/instagram.svg"
                      alt="Lewisville Instagram"
                      width={isMobile ? '18' : '28'}
                      height={isMobile ? '18' : '28'}
                    />
                    <Typography
                      variant={isMobile ? 'h6' : 'h3'}
                      color="primary.contrastText"
                      fontWeight="700"
                      fontFamily="Nunito"
                    >
                      Sushi Rollin’ Lewisville
                    </Typography>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        {/* Copyright */}
        <Grid item xs={6} sx={{ mb: 1, mt: 3 }}>
          {isMobile ? (
            <>
              <Typography
                align="center"
                color="common.white"
                variant="subtitle2"
                fontFamily="Nunito"
              >
                Copyright by ©{new Date().getFullYear()} Sushi Rollin. <br />
                All rights reserved.
              </Typography>
            </>
          ) : (
            <>
              <Typography
                align="center"
                color="common.white"
                variant="subtitle2"
                fontFamily="Nunito"
              >
                Copyright by ©{new Date().getFullYear()} Sushi Rollin. All
                rights reserved.
              </Typography>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
