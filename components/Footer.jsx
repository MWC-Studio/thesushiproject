import Box from '@mui/material/Box';
import MuiNextLink from '@components/MuiNextLink';
import { Container, Grid, Typography } from '@mui/material';
//Add logo and icons
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
        <Grid item sx={{ align: 'center', mt: 1, mb: 3 }}>
          <MuiNextLink href="/" underline="none">
            <Image
              src="/footer/footer_rollinlogo_white.svg"
              alt="logo"
              // width="205"
              // height="35"
              width={isMobile ? '148' : '204.49'}
              height={isMobile ? '25' : '34.41'}
            />
          </MuiNextLink>
        </Grid>
        {/* Contaact us and Find us on */}
        <Container>
          <Grid item xs={12}>
            <Grid
              container
              display="flex"
              direction="row"
              wrap="wrap"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              px={3}
              // py={2}
            >
              {/* Contact us */}
              <Grid item sx={{ mt: 2 }}>
                <Typography
                  // TODO MOBILE VERSION SIZE DOESN'T APPLY
                  variant={isMobile ? 'body3' : 'h3'}
                  color="primary.contrastText"
                  fontWeight="700"
                  fontFamily="Nunito"
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
                      // width="28"
                      // height="28"
                    />
                    <Typography
                      variant={isMobile ? 'subtitle3' : 'h3'}
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
                      Sushirollin.us@gmail.com
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <Link
                    // href=""
                    // target="_blank"
                    // rel="noopener noreferrer"
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
                      variant={isMobile ? 'subtitle3' : 'h3'}
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
              <Grid item sx={{ mt: 5.5 }}>
                <Typography
                  variant={isMobile ? 'body3' : 'h3'}
                  // variant="h3"
                  color="primary.contrastText"
                  fontWeight="700"
                  fontFamily="Nunito"
                >
                  FIND US ON
                </Typography>

                <Box sx={{ mb: 2, mt: 2 }}>
                  <Link
                    sx={{ textDecoration: 'none', color: 'common.white' }}
                    href="https://www.instagram.com/sushi__rollin/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/footer/insta1.svg"
                      alt="Garland Instagram"
                      // width="240"
                      // height="28"
                      width={isMobile ? '154.49' : '240'}
                      height={isMobile ? '19' : '28'}
                    />
                    <Typography
                      variant={isMobile ? 'subtitle3' : 'h3'}
                      color="primary.contrastText"
                      fontWeight="700"
                      fontFamily="Nunito"
                    ></Typography>
                  </Link>
                </Box>

                <Box sx={{ mb: 2, mt: 2 }}>
                  <Link
                    sx={{ textDecoration: 'none', color: 'common.white' }}
                    href="https://www.instagram.com/sushi_rollin_lewisville/?utm_medium=copy_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/footer/insta2.svg"
                      alt="Lewisville Instagram"
                      // width="258"
                      // height="28"
                      width={isMobile ? '167.49' : '258'}
                      height={isMobile ? '19' : '28'}
                    />
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        {/* Copyright */}
        <Grid item 
        //md={12}
        //lg={5}
        xs={6}
        sx={{ mb: 1, mt: 5 }}>
        { isMobile ?
          <>
          <Typography
            align="center"
            color="common.white"
            variant="subtitle2"
            fontFamily="Nunito"
          > 
            Copyright by ©{new Date().getFullYear()} <br/>Sushi Rollin. All rights
            reserved.
          </Typography>
          </>
          :
          <>
          <Typography
            align="center"
            color="common.white"
            variant="subtitle2"
            fontFamily="Nunito"
          > 
            <></>
            Copyright by ©{new Date().getFullYear()} Sushi Rollin. All rights
            reserved.
          </Typography>
          </>
          }
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
