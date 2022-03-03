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
          flexDirection="column"
          justifyContent="center"
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
          flexDirection="column"
          justifyContent="center"
          sx={{ mb: 3, mt: 2 }}
        >
          <Image
            src="/aboutpage/about_img_outline.svg"
            alt="Cooking"
            width="588"
            height="426"
          />
          {/* need to change text color code */}
          <Typography variant="body1" textAlign="center" color="#333333" py={2}>
            Founded in 2019, Sushi Rollin’ has started with a chef who Chef Kim,
            also the CEO of
          </Typography>
        </Grid>
        <Grid
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          flexDirection="column"
          justifyContent="center"
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
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          flexDirection="column"
          justifyContent="center"
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
      </Grid>
    </Container>
  );
};

export default AboutPage;
