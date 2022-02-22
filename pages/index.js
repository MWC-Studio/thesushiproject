import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Hero from "@components/Hero";
import SectionAbout from "@components/SectionAbout";
import SectionImage from "@components/SectionImage";
import SectionReview from "@components/SectionReview";
import NavigationCard from "@components/NavigationCard";
import TopBanner from "@components/TopBanner";

const Homepage = () => {
  return (
    <>
      <TopBanner title="Home" description="Re-thinking the" second="Sushi Experience" />
     
      <SectionAbout />

      <SectionImage imgSrc="/fusion-food.jpg" imgAlt="fusion food" />

      <SectionReview />

      <SectionImage imgSrc="/sushi.jpg" imgAlt="fusion sushi" />

      <Container maxWidth="lg" sx={{ my: 15 }}>
        <Grid container spacing={2}>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <NavigationCard
              imgSrc="/menu.jpg"
              imgAlt="food menu"
              title="Menu"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
              pagePath="/menu"
              ctaText="Check Out"
            />
          </Grid>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <NavigationCard
              imgSrc="/catering.jpg"
              imgAlt="catering"
              title="Catering"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
              pagePath="/catering"
              ctaText="Find Out"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Homepage;
