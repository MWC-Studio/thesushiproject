import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { CopyrightTwoTone, Instagram } from '@mui/icons-material';
import MuiNextLink from '@components/MuiNextLink';
import { Container, Grid, Typography, useMediaQuery } from '@mui/material';

//Add logo and icons
import Link from '@mui/material/Link';

// import IconButton from '@mui/material/IconButton';
import NextLink from 'next/link';
import Image from 'next/image';
// TODO CLEAN CODE

const Footer = ({ isMobile }) => {
  // const mobileView = useMediaQuery('(min-width: 375px)');
  return (
    <Container
      component="footer"
      sx={{
        py: 5,
        bgcolor: 'footer.main',
        textDecoration: 'none',
        color: 'common.white',
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {/* Logo */}
        <Grid item sx={{ align: 'center' }}>
          <MuiNextLink href="/" underline="none">
            <Image
              src="/footer/footer_rollinlogo_white.svg"
              alt="logo"
              // layout="responsive"
              width={195.18}
              height={23.86}
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
              // need to edit
              // spacing={1}
            >
              {/* Contact us */}
              <Grid item sx={{ mt: 2 }}>
                <Image
                  src="/footer/contactus.svg"
                  alt="email"
                  // layout="responsive"
                  width="127"
                  height="16"
                />

                <Box sx={{ mb: 2, mt: 2 }}>
                  <Link
                    sx={{ textDecoration: 'none', color: 'common.white' }}
                    href="wnsrl91@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/footer/email.svg"
                      alt="email"
                      // layout="responsive"
                      width="313"
                      height="29"
                    />
                    {/* <Email /> */}
                  </Link>
                </Box>
                <Box>
                  {/* <Link href=""> */}
                  <Image
                    src="/footer/phone.svg"
                    alt="phone number"
                    // layout="responsive"
                    width="263"
                    height="29"
                  />
                  {/* <Phone /> */}
                  {/* </Link> */}
                </Box>
              </Grid>

              {/* Find us on */}
              <Grid item sx={{ mt: 4 }}>
                <Image
                  src="/footer/findus.svg"
                  alt="find us"
                  // layout="responsive"
                  width="114"
                  height="16"
                />
                {/* <Box sx={{ mt: 3 }}>FOLLOW ON US</Box> */}

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
                      // layout="responsive"
                      width="240"
                      height="28"
                    />
                  </Link>
                  {/* <MuiNextLink
                    sx={{ textDecoration: 'none', color: 'common.white' }}
                    href="https://YourInstagramLink/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram fontSize="large" />
                    <Typography
                      variant={isMobile ? 'body2' : 'h3'}
                      fontWeight="700"
                      fontFamily="Nunito"
                    >
                      Sushi Rollin’ Garland
                    </Typography>
                  </MuiNextLink> */}
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
                      // layout="responsive"
                      width="258"
                      height="28"
                    />
                  </Link>
                </Box>

                {/* <Container>
                  <Stack direction="column" spacing={5} sx={{ mb: 5, py: 2 }}>
                    <Grid item direction="row">
                      <MuiNextLink
                        sx={{ textDecoration: 'none', color: 'common.white' }}
                        href="https://YourInstagramLink/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram fontSize="large" />
                        <Typography
                          variant={isMobile ? 'body2' : 'h3'}
                          fontWeight="700"
                          fontFamily="Nunito"
                        >
                          Sushi Rollin’ Garland
                        </Typography>
                      </MuiNextLink>{' '}
                    </Grid>{' '}
                    <Grid item direction="row"></Grid>
                    <MuiNextLink
                      sx={{ textDecoration: 'none', color: 'common.white' }}
                      href="https://YourInstagramLink/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram fontSize="large" />
                      <Typography
                        variant={isMobile ? 'body2' : 'h3'}
                        fontWeight="700"
                        fontFamily="Nunito"
                      >
                        Sushi Rollin’ Lewisville
                      </Typography>
                    </MuiNextLink>
                  </Stack>
                </Container> */}
              </Grid>
            </Grid>
          </Grid>
        </Container>
        {/* Copyright */}
        <Grid item xs={12} sx={{ mb: 1, mt: 9 }}>
          <Typography
            align="center"
            color="common.white"
            varoant="h6"
            fontFamily="Nunito"
          >
            Copyright by ©{new Date().getFullYear()} Sushi Rollin. All rights
            reserved.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
