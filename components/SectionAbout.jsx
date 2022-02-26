import { Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import MuiNextLink from '@components/MuiNextLink';


const SectionAbout = () => {
  return (
    <Container maxWidth="md" sx={{ my: 10 }}>
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
          color="text"
          variant="h2"
          align="center"
          fontWeight={"fontWeightBold"}
          fontFamily={"Nunito"}
        >
          About Us
        </Typography>
          <Typography textAlign="left" sx={{ my: 5 }}>
            {`Your sushi experience should be special. Sushi Rollin’ provides quick, and Our food stays fresh `}
          </Typography>
          <MuiNextLink href="/aboutus" underline="none">
            <Button> Read More</Button>
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
          color="text"
          variant="h2"
          align="center"
          fontWeight={"fontWeightBold"}
          fontFamily={"Nunito"}
        >
          Roll with us, It’s an opportunity that keeps rolling.
        </Typography>
        <Typography textAlign="left" sx={{ my: 5 }}>
            {`will be updated `}
          </Typography>
          <MuiNextLink href="/aboutus" underline="none">
            <Button> Join Us Today</Button>
          </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
    
  );
};

export default SectionAbout;
