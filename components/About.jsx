import * as React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import MuiNextLink from '@components/MuiNextLink';
import Button from '@mui/material/Button';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <Container maxwidth="lg">
      <Box sx={{ mt: 2, mb: 2 }}>
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ pt: 2, pb: 2 }}
        >
          <Typography textAlign="center" color="background: #F48A88">
            {`Quick, Approachable, but keeping the Quality`}
          </Typography>
          <Typography
            component="h2"
            variant="h4"
            textAlign="center"
            gutterBottom
            mt={2}
          >
            That's How We're Rollin'
          </Typography>
        </Grid>
      </Box>
      <Box></Box>
      <Box sx={{ mt: 2, mb: 2 }}>
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ pt: 2, pb: 2 }}
        >
          <Image
            src="/about-page/about_img_outline.svg"
            alt="Cooking"
            layout="responsive"
            width={588}
            height={426}
          />
          <Typography
            component="h2"
            variant="h4"
            textAlign="center"
            gutterBottom
            mt={2}
          >
            {/* It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like). */}
          </Typography>
        </Grid>
      </Box>
      <Box sx={{ mt: 2, mb: 2 }}>
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ pt: 2, pb: 2 }}
        >
          <Image
            src="/about-page/ceo_frame.svg"
            alt="Ceo"
            layout="responsive"
            width={606}
            height={546}
          />
        </Grid>
      </Box>

      <Box sx={{ mt: 2, mb: 2 }}>
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ pt: 2, pb: 2 }}
        >
          <MuiNextLink href="/menu" underline="none">
            <Button variant="fill" size="large">
              Franchise Oppurtunity
            </Button>
          </MuiNextLink>
        </Grid>
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ pt: 2, pb: 2 }}
        >
          <MuiNextLink href="/menu" underline="none">
            <Button variant="outlined" size="large">
              View Our Menu
            </Button>
          </MuiNextLink>
        </Grid>
      </Box>
      <Box>a</Box>
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
<Grid
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
</Grid>;
