import * as React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import MuiNextLink from '@components/MuiNextLink';
import Button from '@mui/material/Button';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <Container
      justify="center"
      direction="column"
      justifyContent="center"
      alignItems="center"
      xs={12}
      md={6}
      sx={{ mb: 3, mt: 3 }}
    >
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 3, mt: 3 }}
      >
        <Grid
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          sx={{ mb: 2, mt: 4 }}
        >
         <Typography textAlign="center" color="#F48A88" gutterBottom py={1}>
         Quick & Approachable while Keeping the Quality
        </Typography>
        <Typography
          color="text"
          variant="h2"
          align="center"
          fontWeight={"fontWeightBold"}
          fontFamily={"Nunito"}
          sx={{ mb: 8}}
        >
          That’s How We’re Rollin’
        </Typography>
        {/*Image*/}
         <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        > 
          <Image
            src="/aboutpage/about_img.svg"
            alt="Cooking"
            width={592}
            height={420}
          />
        </Grid>
      </Grid>
          {/* need to change text color code */}
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="left"
          width={596}
        > 
          <Typography variant="body1" textAlign="left" color="#333333" pt={2}>
          Your friendly neighborhood sushi place is here! 
          </Typography>
          <Typography>
          In Sushi Rollin’ we offer freshness, variety, and authentic experience. A true hole in the wall where you expect something ordinary but walk out with a content belly and heart. We’ve been rolling since 2019.
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="left"
          width={604} //596으로 하면 줄이 3줄이 됨 604부터 2줄
        > 
          <Typography variant="body1" textAlign="center" color="#333333" pt={12}>
          “When people think about Sushi, It’s pricey and not an everyday kind of experience. But with Sushi Rollin, the experience gets more approachable but still unique."
          </Typography>
          <Typography variant="body1" textAlign="center" color="#333333" py={3} pb={5}>
          -The Chef CEO, June Kim-
          </Typography>
        </Grid>
      {/*</Grid> */}  
          <MuiNextLink href="/franchise" underline="none" sx={{ my: 5 }} >
            <Button> Franchise Opportunity</Button>
          </MuiNextLink>
          <MuiNextLink href="/menu" underline="none" sx={{ mb: 10 }}>
            <Button 
            style={{maxWidth: '263px', minWidth: '263px'}}
            variant="outlined" 
            sx={{ 
            borderColor: "primary.main", 
            color: "primary.main"
            }}
          >
          View Our Menu
          </Button>
          </MuiNextLink>
      </Grid>
    </Container>

  );
};

export default AboutPage;