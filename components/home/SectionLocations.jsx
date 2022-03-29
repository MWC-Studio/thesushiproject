import { Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import MuiNextLink from '@components/MuiNextLink';

const SectionLocations = ( isMobile )=> {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: 'relative',
        width: '100vw',
      }}
    >
      <Container sx={{ mt: 6 }}>
        <Typography
          color="text"
          variant={isMobile ? "h3" : "h2"}
          align="center"
          fontWeight={'fontWeightBold'}
          fontFamily={'Nunito'}
          sx={{ mb: 4 }}
        >
          Locations
        </Typography>

        <Grid container sx={{ mb: 1 }} spacing={2}>
          <Grid item xs={12} sm={6}>
            <Image
              src="/home_page/location-garland.svg"
              alt="Location Shshi Rollin"
              // layout="responsive"
              width="592"
              height="420"
            />

            <Typography
              color="text"
              variant={isMobile ? "h4" : "h3"}
              align="center"
              fontWeight={'fontWeightBold'}
              fontFamily={'Nunito'}
              sx={isMobile ? {mb: 2, mt: 2} : { mb: 2, mt: 4 }}
            >
              Sushi Rollin' Garland
            </Typography>
            <Typography
              color="text"
              variant="body1"
              //align="center"
              textAlign={isMobile ? "center": "left"}
              fontFamily={'Nunito'}
            >
              6850 N Shiloh Rd, Garland, TX 75044
            </Typography>
            <Typography
              color="text"
              variant={isMobile ? "body2" : "body1"}
              //align="center"
              fontFamily={'Nunito'}
              textAlign={isMobile ? "center": "left"}
              sx={{ mb: 2 }}
            >
              6Opens Daily 11 a.m. - 9:30 p.m.
            </Typography>
            <Typography
              color="text"
              variant="body1"
              align="center"
              fontFamily={'Nunito'}
              sx={{ mb: 1 }}
            >
              (469) 798-7831
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Image
              src="/home_page/location-lewisville.svg"
              alt="about-us"
              // layout="responsive"
              width="592"
              height="420"
            />

            <Typography
              color="text"
              variant={isMobile ? "h4" : "h3"}
              align="center"
              fontWeight={'fontWeightBold'}
              fontFamily={'Nunito'}
              sx={{ mb: 2, mt: 4 }}
            >
              Sushi Rollin' Lewisville
            </Typography>
            <Typography
              color="text"
              variant={isMobile ? "body2" : "body1"}
              align="center"
              textAlign={isMobile ? "center": "left"}
              fontFamily={'Nunito'}
      
            >
              1288 W Main St #142, Lewisville, TX 75067
            </Typography>
            <Typography
              color="text"
              variant="body2"
              align="center"
              textAlign={isMobile ? "center": "left"}
              fontFamily={'Nunito'}
              sx={{ mb: 2 }}
            >
              Opens Daily 11 a.m. - 9:00 p.m.
            </Typography>
            <Typography
              color="text"
              variant="body1"
              align="center"
              fontFamily={'Nunito'}
            >
              (817) 320-3722
            </Typography>
          </Grid>
        </Grid>

        <Grid align="center" pt={4} pb={6}>
          <Button>
            <MuiNextLink
              sx={{ textDecoration: 'none', color: 'common.white' }}
              href="/"
            >
              View Locations
            </MuiNextLink>
          </Button>
        </Grid>
      </Container>
    </Grid>
  );
}
export default SectionLocations;