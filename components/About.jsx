
import * as React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import MuiNextLink from '@components/MuiNextLink';
import Button from '@mui/material/Button';
import FranchiseTimeline from './aboutus/FranchiseTimeline';

const AboutPage = ({isMobile}) => {

  return (
    <Container 
  
      justify="center"
      direction="column"
      justifycontent="center"
      alignitems="center"
      // xl={12}
      // lg={12}
      // xs={12}
      // sm={12}
      sx={{ mb: isMobile ? 3: 0, mt: isMobile ? 2: 7}}
    >
      <Grid item
        container
        justify="center"
        flexDirection="column"
        justifycontent="center"
        alignItems="center" 
        sx={{ mb: 1, mt: 1}}
      >
        <Grid
          item
          flexDirection="column"
          justifycontent="center"
          alignitems="center"
          sx={{ mb: 1, mt: 3 }}
        >
          <Typography variant= {isMobile ? 'h6' : 'h3'} textAlign="center" color="secondary.main">
          Fast, Affordable and Authentic Sushi Experience
        </Typography>
        <Typography
          color="text"
          variant= {isMobile ? 'h3' : 'h2'}
          align="center"
          fontWeight={"fontWeightBold"}
          fontFamily={"Nunito"}
          sx={{ mb: 4}}
        >
          The Journey of Sushi Rollin’
        </Typography>
        <Typography
          color="text"
          variant= "h3"
          align="center"
          fontWeight={"fontWeightBold"}
          fontFamily={"Nunito"}
          sx={{
            maxWidth: "830px",
            paddingBottom: {xs: "0", md: "48px"}
          }}
        >
          As a franshisee turned Chef CEO, June Kim has passion for creating a small business and owner-friendly ecosystem. Sushi Rollin’ will be the low startup cost and rewarding business partner that franchisees strive to be a part of.
        </Typography>

        <FranchiseTimeline />
      </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignitems="left"
          width={isMobile ? 346 : 596} 
        > 
          <Typography variant='body1' fontStyle='italic' color="text.main" textAlign="center" pt = {isMobile ? 6 : 8 } 
            paddingTop={isMobile ? 0 : "68px"}>
          “Most people consider sushi to be pricey and not an everyday kind of experience. At Sushi Rollin’, the experience is approachable yet still unique.”
          </Typography>
          <Typography variant='body1' color="333333" 
            textAlign="center"
            pt = {isMobile ? 0 : 2 }
            py = {isMobile ? 2 : 0 }
            pb = {isMobile ? 6 : 0 }
            paddingTop = "24px"
            >
          -The Chef CEO, June Kim-
          </Typography>
        </Grid>
          <MuiNextLink href="/franchise" underline="none" sx={{ mt: isMobile ? 0 : 8 }} >
            <Button> Franchise Opportunity</Button>
          </MuiNextLink>
          <MuiNextLink href="/menu" underline="none" sx={{ mt: 4, mb: 5 }}>
            <Button 
            style={{maxWidth: isMobile ? '230px' : '263px', minWidth: isMobile ? '230px' :'263px'}}
            variant="outlined" // black outline
            sx={{ 
              backgroundColor: "white",
              borderColor: "primary.main",
              color: "primary.main",
              '&:hover': {
                borderColor: "secondary.main",
            }}}
          >
            View Our Menu
          </Button>
        </MuiNextLink>
      </Grid>
    </Container>
  );
};
export default AboutPage;
