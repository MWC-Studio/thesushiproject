import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import MuiNextLink from "@components/MuiNextLink";

const SectionAbout = ({ isMobile }) => {
  return (
    <Container component="section" maxWidth="lg" sx={{ my: 4 }}>
      <Grid
        container
        direction={isMobile ? "column-reverse" : "row"}
        alignItems="center"
        justifyContent="center"
        sx={isMobile ? { mb: 2 } : { mb: -0.8 }} // 사진 모서리 맞추기 위한 간격 조절 화면 사이즈에 따라 변화 체크 필요
      >
        {/*top text*/}
        <Grid
          item
          xs={12}
          sm={6}
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          pt={2}
        >
          <Typography
            color="text"
            variant={isMobile ? "h3" : "h2"}
            textAlign={isMobile ? "left" : "center"}
            sx={isMobile ? { my: 2 } : { my: 2, px: 2 }}
          >
            Started in the middle of pandemic, but we kept rolling with xx % of
            average annual growth.
          </Typography>
          <MuiNextLink href="/aboutus" underline="none" sx={{ py: 2 }}>
            <Button>About Sushi Rollin’</Button>
          </MuiNextLink>
        </Grid>
        {/*top image*/}
        <Grid
          item
          xs={12}
          sm={6}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="/home_page/about_us.jpg"
            alt="about-us"
            width={800}
            height={600}
          />
        </Grid>
      </Grid>
      {/*bottom*/}
      <Grid
        container
        direction={isMobile ? "column" : "row"}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          item
          xs={12}
          sm={6}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="/home_page/roll_with_us.jpg"
            alt="roll_with_us"
            width={800}
            height={600}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          pt={2}
        >
          <Typography
            color="text"
            variant={isMobile ? "h3" : "h2"}
            textAlign={isMobile ? "left" : "center"}
            sx={isMobile ? { my: 2 } : { my: 2, px: 2 }}
          >
            Adaptable business model with low cost, Great choice for the
            first-timer franchisees
          </Typography>
          <MuiNextLink href="/franchise" underline="none" sx={{ py: 2 }}>
            <Button>Franchise Opportunity</Button>
          </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAbout;
