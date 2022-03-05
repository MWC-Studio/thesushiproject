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
          {/* font size = 36px */}
          <Typography textAligh="center" variant="header1" gutterBottom py={1}>
            That’s How We’re Rollin’
          </Typography>
        </Grid>
        <Grid
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          sx={{ mb: 3, mt: 2 }}
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
          alignItems="center"
          xs={12}
          sx={{ mb: 3, mt: 2 }}
        >
          <Image
            src="/aboutpage/ceo_frame.svg"
            alt="CEO"
            // layout="responsive"
            width="606"
            height="546"
          />
          {/* <Typography variant="body1" textAlign="center">
            “When people think about Sushi, It’s pricey and not an everyday kind
            of experience. But with Sushi Rollin, the experience gets more
            approachable but still unique." -The Chef CEO, June Kim-
          </Typography> */}
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          sx={{ mb: 2, mt: 2 }}
        >
          <Container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <MuiNextLink href="/franchise" underline="none">
                <Image
                  src="/aboutpage/button_franchise.svg"
                  alt="Francise oppurtunity"
                  width="264"
                  height="55"
                />
                {/* <Button variant="fill" size="large">
                Franchise Oppurtunity
              </Button> */}
              </MuiNextLink>
            </Box>

            {/* might need to change button  */}
            <Box sx={{ mb: 2, mt: 2 }}>
              <MuiNextLink href="/menu" underline="none">
                <Image
                  src="/aboutpage/button_viewmenu.svg"
                  alt="Francise oppurtunity"
                  width="264"
                  height="55"
                />
                {/* <Button variant="outlined" size="large">
                View Our Menu
              </Button> */}
              </MuiNextLink>
            </Box>
          </Container>
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