import { Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import MuiNextLink from '@components/MuiNextLink';


const SectionAbout = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 10 }}>
      <Grid container spacing={2}></Grid>
    {/*<Container component="section" maxWidth="md" sx={{ mb: 15 }}>chaged for up spacing*/}
      <Grid container spacing={3}>
          {/*top text*/}
          <Grid
          item
          xs={12}
          sm={6}
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            component="header1"
            variant="h4"
            textAlign="center"
            gutterBottom
          >
            About us
          </Typography>
          <Typography textAlign="center" sx={{ mb: 5 }}>
            {`We mix Japanese and Western ingredients and cooking methods. Provide you
    with a different tasting dimension with the fusion food in our restaurant.
    Don't miss the chance to surprise your tongue!`}
          </Typography>
          <MuiNextLink href="/aboutus" underline="none">
          
                <Button> Read More</Button>
                {/*button color changed
            <Button variant="outlined" size="large">
            Read More
            </Button>  */}
          </MuiNextLink>
        </Grid>
        {/*top image*/}
        <Grid item xs={12} sm={6}>
          <Image
            src="/sectionabout_top.svg"
            alt="about-us"
            layout="responsive"
            width={800}
            height={600}
          />
        </Grid>
      
      </Grid>
      {/*bottom*/}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Image
            src="/sectionabout_bottom.svg"
            alt="about-us"
            layout="responsive"
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
        >
          <Typography
            component="header1"
            variant="h4"
            textAlign="center"
            gutterBottom
          >
            Roll with us, It’s an opportunity that keeps rolling.
          </Typography>
          <Typography textAlign="center" sx={{ mb: 5 }}>
            {`We mix Japanese and Western ingredients and cooking methods.`}
          </Typography>
          <MuiNextLink href="/aboutus" underline="none">
            <Button> Read More</Button>
          </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
    
  );
};

export default SectionAbout;
