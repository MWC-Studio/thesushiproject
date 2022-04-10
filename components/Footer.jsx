import Box from "@mui/material/Box";
import MuiNextLink from "@components/MuiNextLink";
import { Container, Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import Image from "next/image";

const Footer = ({ isMobile }) => {
  return (
    <Container
      component="footer"
      sx={{
        py: 3,
        bgcolor: "footer.main",
        textDecoration: "none",
        color: "common.white",
        minWidth: "100vw",
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
            align: "center",
            mt: isMobile ? "29px" : 3,
            mb: isMobile ? "19px" : 0,
          }}
        >
          <MuiNextLink
            href="/"
            underline="none"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Image
              src="/footer/footer_rollinlogo_white.svg"
              alt="logo"
              width={isMobile ? "148" : "204.49"}
              height={isMobile ? "25" : "34.41"}
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
              flexDirection={isMobile ? "column" : "row"}
              px={isMobile ? 1 : 11}
              sx={{
                ml: isMobile ? -1 : 0,
                mb: isMobile ? 0 : 4,
              }}
            >
              {/* Contact us */}
              <Grid item sx={{ ml: "17", mt: isMobile ? 5 : "26px" }}>
                <Typography
                  variant={isMobile ? "body2" : "h5"}
                  color="secondary.main"
                >
                  CONTACT US
                </Typography>

                <Box sx={{ mb: 2, mt: 2 }}>
                  <Link
                    href="mailto:sushirollin.us@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "grid",
                      gridTemplateColumns: isMobile ? "20px 1fr" : "30px 1fr",
                      columnGap: "12px",
                      rowGap: "16px",
                      textDecoration: "none",
                      color: "common.white",
                    }}
                  >
                    <Image
                      src="/footer/icon_email.svg"
                      alt="email"
                      width={isMobile ? "18" : "22"}
                      height={isMobile ? "18" : "22"}
                    />
                    {/* <Typography
                      variant={isMobile ? 'subtitle2' : 'body1'}
                      color="primary.contrastText"
                      //fontWeight="700"
                      fontFamily="Nunito"
                    >
                      Email
                    </Typography> */}

                    <Typography
                      variant={isMobile ? "subtitle2" : "body1"}
                      color="primary.contrastText"
                    >
                      sushirollin.us@gmail.com
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="tel:+1-956-249-0167"
                    sx={{
                      display: "grid",
                      gridTemplateColumns: isMobile ? "20px 1fr" : "30px 1fr",
                      columnGap: "12px",
                      rowGap: "16px",
                      textDecoration: "none",
                      color: "common.white",
                      href: "956-249-0167",
                    }}
                  >
                    <Image
                      src="/footer/molumen_phone_icon.svg"
                      alt="phone number"
                      width={isMobile ? "18" : "22"}
                      height={isMobile ? "18" : "22"}
                    />

                    <Typography
                      variant={isMobile ? "subtitle2" : "body1"}
                      color="primary.contrastText"
                    >
                      956-249-0167
                    </Typography>
                  </Link>
                </Box>
              </Grid>

              {/* Find us on */}
              <Grid item sx={{ ml: "15", mt: isMobile ? 6.5 : "26px" }}>
                <Typography
                  variant={isMobile ? "body2" : "h5"}
                  color="secondary.main"
                >
                  FIND US ON
                </Typography>

                <Box sx={{ mb: 2, mt: 2 }}>
                  <Link
                    sx={{
                      display: "grid",
                      gridTemplateColumns: isMobile ? "20px 1fr" : "30px 1fr",
                      columnGap: "12px",
                      rowGap: "16px",
                      textDecoration: "none",
                      color: "common.white",
                    }}
                    href="https://www.instagram.com/sushi__rollin/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/footer/instagram.svg"
                      alt="Garland Instagram"
                      width={isMobile ? "15.76" : "19.26"}
                      height={isMobile ? "15.76" : "19.26"}
                    />
                    <Typography
                      variant={isMobile ? "subtitle2" : "body1"}
                      color="primary.contrastText"
                    >
                      Sushi Rollin’ Garland
                    </Typography>
                  </Link>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Link
                    sx={{
                      display: "grid",
                      gridTemplateColumns: isMobile ? "20px 1fr" : "30px 1fr",
                      columnGap: "12px",
                      rowGap: "16px",
                      textDecoration: "none",
                      color: "common.white",
                    }}
                    href="https://www.instagram.com/sushi_rollin_lewisville/?utm_medium=copy_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/footer/instagram.svg"
                      alt="Lewisville Instagram"
                      width={isMobile ? "15.76" : "19.26"}
                      height={isMobile ? "15.76" : "19.26"}
                    />
                    <Typography
                      variant={isMobile ? "subtitle2" : "body1"}
                      color="primary.contrastText"
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
        <Grid item xs={6} sx={{ mb: isMobile ? 2 : 1, mt: 3 }}>
          {isMobile ? (
            <>
              <Typography
                align="center"
                color="common.white"
                variant="subtitle2"
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
