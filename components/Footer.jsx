import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {
  CopyrightTwoTone,
  Facebook,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import MuiNextLink from "@components/MuiNextLink";
import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
//Add logo and icons
import FooterLogo from "../public/footer/footer_rollinlogo_white.svg";
import Email from "../public/footer/email.svg";
import Phone from "../public/footer/phone.svg";
import Link from "@mui/material/Link";
// future use
// import IconButton from '@mui/material/IconButton';
import NextLink from "next/link";
import Image from "next/image";

const Footer = ({ isMobile }) => {
  return (
    <Container
      component="footer"
      sx={{
        py: 5,
        maxWidth: "100vw !important",
        bgcolor: "footer.main",
        textDecoration: "none",
        color: "common.white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "80vw",
          maxWidth: "1000px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Logo */}

        <MuiNextLink href="/" underline="none">
          <Image
            src="/footer/footer_rollinlogo_white.svg"
            alt="logo"
            // layout="responsive"
            width={isMobile ? 148 : 205}
            height={isMobile ? 25 : 35}
          />
          {/* <FooterLogo /> weppack*/}
        </MuiNextLink>

        {/* Contaact us and Find us on */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: isMobile ? "40px" : "16px",
            rowGap: isMobile ? "50px" : "0",
          }}
        >
          {/* Contact us */}
          <Box>
            <Typography
              variant={isMobile ? "h5" : "h3"}
              color="primary.contrastText"
              fontWeight="700"
              fontFamily="Nunito"
            >
              CONTACT US
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Link
                sx={{ textDecoration: "none", color: "common.white" }}
                href="mailto:info@rollinsushi.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "grid",
                  gridTemplateColumns: isMobile
                    ? "20px 40px 1fr"
                    : "30px 80px 1fr",
                  columnGap: "12px",
                  rowGap: "16px",
                }}
              >
                <Image
                  src="/icons/email.svg"
                  alt="email"
                  width={isMobile ? "20" : "24"}
                  height={isMobile ? "16" : "18.67"}
                />
                <Typography
                  variant={isMobile ? "body2" : "h3"}
                  color="primary.contrastText"
                  fontWeight="700"
                  fontFamily="Nunito"
                >
                  Email
                </Typography>
                <Typography
                  variant={isMobile ? "body2" : "h3"}
                  color="primary.contrastText"
                  fontWeight="400"
                  fontFamily="Nunito"
                >
                  info@rollinsushi.com
                </Typography>
                <Image
                  src="/icons/phone.svg"
                  alt="phone number"
                  // layout="responsive"
                  width={isMobile ? "24" : "28"}
                  height={isMobile ? "24" : "28"}
                />
                <Typography
                  variant={isMobile ? "body2" : "h3"}
                  color="primary.contrastText"
                  fontWeight="700"
                  fontFamily="Nunito"
                >
                  Phone
                </Typography>
                <Typography
                  variant={isMobile ? "body2" : "h3"}
                  color="primary.contrastText"
                  fontWeight="400"
                  fontFamily="Nunito"
                >
                  956-249-0167
                </Typography>
              </Link>
            </Box>
          </Box>

          {/* Find us on */}
          <Box>
            <Typography
              variant={isMobile ? "h5" : "h3"}
              color="primary.contrastText"
              fontWeight="700"
              fontFamily="Nunito"
            >
              FIND US ON
            </Typography>
            <Stack direction="column">
              <MuiNextLink
                sx={{
                  textDecoration: "none",
                  color: "common.white",
                  mt: 2,
                }}
                href="https://YourInstagramLink/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  sx={{
                    display: "flex",
                    columnGap: "18px",
                    alignItems: "center",
                  }}
                >
                  <Instagram fontSize={isMobile ? "medium" : "large"} />
                  <Typography
                    variant={isMobile ? "body2" : "h3"}
                    fontWeight="700"
                    fontFamily="Nunito"
                  >
                    Sushi Rollin’ Garland
                  </Typography>
                </Box>
              </MuiNextLink>
              <MuiNextLink
                sx={{
                  textDecoration: "none",
                  color: "common.white",
                  mt: 2,
                }}
                href="https://YourInstagramLink/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  sx={{
                    display: "flex",
                    columnGap: "18px",
                    alignItems: "center",
                  }}
                  alignItems="center"
                >
                  <Instagram fontSize={isMobile ? "medium" : "large"} />
                  <Typography
                    variant={isMobile ? "body2" : "h3"}
                    fontWeight="700"
                    fontFamily="Nunito"
                  >
                    Sushi Rollin’ Lewisville
                  </Typography>
                </Box>
              </MuiNextLink>
            </Stack>
          </Box>
        </Box>
        {/* Copyright */}
        <Box sx={{ mt: "20px" }}>
          <Typography
            align="center"
            color="common.white"
            variant="h6"
            fontFamily="Nunito"
          >
            Copyright by ©{new Date().getFullYear()} Sushi Rollin. All rights
            reserved.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
