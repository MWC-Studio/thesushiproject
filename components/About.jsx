
import * as React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import MuiNextLink from '@components/MuiNextLink';
import Button from '@mui/material/Button';
import Image from 'next/image';

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
          Fresh, Various, and Authentic
        </Typography>
        <Typography
          color="text"
          variant= {isMobile ? 'h3' : 'h2'}
          align="center"
          fontWeight={"fontWeightBold"}
          fontFamily={"Nunito"}
          sx={{ mb: 4}}
        >
          That’s How We’re Rollin’
        </Typography>
        {/*Image*/}
         <Grid item
        container
        direction="column"
        justifyContent="center"
        alignitems="center"
        // lg={12}
        // md={12}
        // sm={12}
        // xs={12}
        > 
          <Image
            src="/aboutpage/aboutimg.jpg"
            alt="Cooking"
            width={isMobile ? '343' : '592'}
            height={isMobile ? '266' : '420'}
          />
        </Grid>
      </Grid>
        <Grid item
          container
          direction="column"
          justifyContent="center"
          alignitems="center"
          width={isMobile ? 346 : 596}
        > 
          <Typography variant="body1" textAlign="left" color="text.main" pt = {isMobile ? 1 : 4 }>
          Your friendly neighborhood sushi place is here! Founded by June Kim - the Chef CEO, Sushi Rollin has served delicious rolls and premium sushi to fellow Texans since 2019. Our day starts by preparing items with freshly sourced ingredients. We strive to provide a warm atmosphere that encourages people to connect with their community while enjoying delicious rolls. Our team puts a lot of effort into providing excellent service that makes customers feel welcome and comfortable.
          <br/><br/>
          If you’re friendly, hardworking, and ambitious, please join our team at Sushi Rollin’! We are also now focusing on expanding our franchise opportunities for those looking for a low start-up cost business. Chef CEO June will be offering one-on-one training sessions and sharing special skills that he learned from his own experience as a head sushi chef at one of the best fine-dining sushi restaurants in town. Please reach out for more details if you are interested!
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignitems="left"
          width={isMobile ? 346 : 596} 
        > 
          <Typography variant='body1' fontStyle='italic' color="text.main" textAlign="center" pt = {isMobile ? 6 : 8 } >
          “When people think about Sushi, It’s pricey and not an everyday kind of experience. But with Sushi Rollin, the experience gets more approachable but still unique."
          </Typography>
          <Typography variant='body1' color="333333" textAlign="center" pt = {isMobile ? 0 : 2 }  py = {isMobile ? 2 : 0 } pb = {isMobile ? 6 : 0 }>
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
