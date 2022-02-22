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
          <Typography variant="body1" textAlign="center" py={2}>
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
            <Box sx={{ mb: 2, mt: 2 }}>
              <MuiNextLink href="/franchise" underline="none">
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

{
  /* <Grid
  container
  item
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
></Grid>; */
}

// <Container maxwidth="lg">
//           <Grid
//             container
//             direction="column"
//             justifyContent="center"
//             alignItems="center"
//             xs={12}
//             md={6}
//           >
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               container
//               flexDirection="column"
//               justifyContent="center"
//               alignItems="center"
//             >
//               <Typography
//                 textAlign="center"
//                 color="background: #F48A88;
// "
//               >
//                 {`Quick, Approachable, but keeping the Quality`}
//               </Typography>
//               <Typography
//                 component="h2"
//                 variant="h4"
//                 textAlign="center"
//                 gutterBottom
//               >
//                 That's How We're Rollin'
//               </Typography>
//               <Grid
//                 item
//                 xs={12}
//                 sm={6}
//                 container
//                 flexDirection="column"
//                 justifyContent="center"
//                 alignItems="center"
//               >
//                 <Image
//                   src="/about-page/about_img_outline.svg"
//                   alt="Cooking"
//                   layout="responsive"
//                   width="588"
//                   height="426"
//                 />
//                 <Typography></Typography>
//               </Grid>
//             </Grid>
//             <Grid item>
//               <Image
//                 src="/about-page/ceo_frame.svg"
//                 alt="Ceo"
//                 layout="responsive"
//                 width="606"
//                 height="546"
//               />
//               <Typography></Typography>
//             </Grid>
//             <Grid item>
//               <MuiNextLink href="/menu" underline="none">
//                 <Button variant="fill" size="large">
//                   Franchise Oppurtunity
//                 </Button>
//               </MuiNextLink>
//             </Grid>
//             <Grid item>
//               <MuiNextLink href="/menu" underline="none">
//                 <Button variant="outlined" size="large">
//                   View Our Menu
//                 </Button>
//               </MuiNextLink>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

{
  /* 가운데 정렬 */
}
{
  /* <Grid
  container
  item
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  xs={12}
  flexDirection="column"
  justifyContent="center"
>
  a
</Grid>; */
}
