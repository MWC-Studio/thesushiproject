import { Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import MuiNextLink from "@components/MuiNextLink";

const SectionLocations = ({ isMobile }) => {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: "relative",
        width: "100vw",
      }}
    >
      <Container sx={{ mt: 6 }}>
        <Typography
          color="text"
          variant={isMobile ? "h3" : "h2"}
          align="center"
          sx={{ mb: 4 }}
        >
          Where We are Rollin’
        </Typography>

        <Grid container sx={{ mb: 1 }} spacing={2}>
          <Grid item xs={12} sm={6}>
            <Image
              src="/home_page/location-garland.jpg"
              alt="Location Garland"
              width="592"
              height="420"
            />
            <Grid item display="row">
              {/* <Image
                src={"/icons/logo-circle.svg"}
                width={isMobile ? "18" : "18"}
                height={isMobile ? "18" : "18"}
              /> */}

              <Typography
                color="text"
                variant={isMobile ? "h4" : "h5"}
                align="left"
                sx={isMobile ? { mb: 2, mt: 2 } : { mb: 2, mt: 4 }}
              >
                Sushi Rollin' Garland
              </Typography>
            </Grid>
            <Typography
              color="text"
              align="left"
              variant={isMobile ? "body2" : "body1"}
            >
              6850 N Shiloh Rd, Garland, TX 75044
            </Typography>
            <Typography
              color="text"
              variant={isMobile ? "body2" : "body1"}
              align="left"
              fontFamily={"Nunito"}
              sx={{ mb: 2 }}
            >
              Opens Daily 11 a.m. - 9:30 p.m.
            </Typography>
            <Typography
              color="text"
              variant={isMobile ? "body2" : "body1"}
              align="left"
              fontFamily={"Nunito"}
              sx={{ mb: 1 }}
            >
              (469) 798-7831
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Image
              //
              src="/home_page/location-lewisville.jpg"
              alt="Location Lewisville"
              width="592"
              height="420"
            />

            {/* <Image
              src={"/icons/logo-circle.svg"}
              width={isMobile ? "18" : "18"}
              height={isMobile ? "18" : "18"}
            /> */}

            <Typography
              color="text"
              variant={isMobile ? "h4" : "h5"}
              align="left"
              sx={isMobile ? { mb: 2, mt: 2 } : { mb: 2, mt: 4 }}
            >
              Sushi Rollin' Lewisville
            </Typography>
            <Typography
              color="text"
              variant={isMobile ? "body2" : "body1"}
              align="left"
            >
              1288 W Main St #142, Lewisville, TX 75067
            </Typography>
            <Typography
              color="text"
              variant={isMobile ? "body2" : "body1"}
              align="left"
              sx={{ mb: 2 }}
            >
              Opens Daily 11 a.m. - 9:00 p.m.
            </Typography>
            <Typography
              color="text"
              variant={isMobile ? "body2" : "body1"}
              align="left"
            >
              (817) 320-3722
            </Typography>
          </Grid>
        </Grid>

        <Grid align="center" pt={4} pb={6}>
          <MuiNextLink href="/locations" underline="none" sx={{ py: 2 }}>
            <Button>View More Store Pictures</Button>
          </MuiNextLink>
        </Grid>
      </Container>
    </Grid>
  );
};
export default SectionLocations;
