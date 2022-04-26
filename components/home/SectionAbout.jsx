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
            align="center"
            fontWeight={"fontWeightBold"}
            fontFamily={"Nunito"}
          >
            About Us
          </Typography>
          <Typography
            textAlign={isMobile ? "left" : "center"}
            sx={isMobile ? { my: 2 } : { my: 2, px: 2 }}
          >
            {`Your friendly neighborhood sushi place is here! 
            In Sushi Rollin’ we offer freshness, variety, and authentic experience. A true hole in the wall where you expect something ordinary but walk out with a content belly and heart. We’ve been rolling since 2019.`}
          </Typography>
          <MuiNextLink href="/aboutus" underline="none" sx={{ py: 2 }}>
            <Button> Read More</Button>
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
            align="center"
            fontWeight={"fontWeightBold"}
            fontFamily={"Nunito"}
            // sx = {{pt : 2}}
          >
            Roll with Us
          </Typography>
          <Typography
            textAlign={isMobile ? "left" : "center"}
            sx={isMobile ? { my: 2 } : { my: 2, px: 2 }}
            // sx={isMobile ? { my: 1 } : { my: 1, px: 1 }}
          >
            Sushi Rollin’ started its journey in the middle of Pandemic. Our
            business model successfully supported delivery focus experience.
            Over 500+ customer reviews prove that success! Now that we’re
            expanding, our focus has also evolved to provide a more approachable
            and enjoyable sushi experience.
            <br /> <br />
            It’s an opportunity that keeps rolling. Join us today!
          </Typography>
          <MuiNextLink href="/franchise" underline="none" sx={{ py: 2 }}>
            <Button> Join Us Today</Button>
          </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAbout;
