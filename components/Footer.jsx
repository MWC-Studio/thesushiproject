import Box from '@mui/material/Box';

import Stack from '@mui/material/Stack';
import {
  CopyrightTwoTone,
  Facebook,
  Instagram,
  Twitter,
} from '@mui/icons-material';
import MuiNextLink from '@components/MuiNextLink';

import { Container, Grid, Typography } from '@mui/material';

//Add logo in the middle 2/19
import FooterLogo from '../public/footer/footer_rollinlogo_white.svg';
import Email from '../public/footer/email.svg';
import Phone from '../public/footer/phone.svg';

import IconButton from '@mui/material/IconButton';
import NextLink from 'next/link';
import Image from 'next/image';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        bgcolor: '#262626',
        textDecoration: 'none',
        color: 'common.white',
      }}
    >
      <Container maxwidth="sm">
        {/* Logo Grid */}
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          // margin bottom
          sx={{ mb: 2 }}
        >
          <Grid item xs={12} sm={6}>
            <Box sx={{ align: 'center' }}>
              <MuiNextLink href="/" underline="none">
                {/* <Image
                  src="/footer_rollinlogo_white.svg"
                  alt="logo"
                  layout="responsive"
                  width={195.18}
                  height={23.86} 
                /> */}
                <FooterLogo />
              </MuiNextLink>
            </Box>
          </Grid>
        </Grid>
        {/* Second Grid with Contact and Follow on us */}
        <Container>
          <Grid container spacing={2} direction="row">
            <Grid item xs={8}>
              <Box>CONTACT US</Box>
              <Box sx={{ py: 1 }}></Box>

              <Box>
                <Link
                  sx={{ textDecoration: 'none', color: 'common.white' }}
                  href="mailto:info@rollinsushi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Email />
                </Link>
              </Box>
              <Box>
                {/* <Link href=""> */}
                <Phone />
                {/* </Link> */}
              </Box>
            </Grid>

            {/* Follow on us Grid */}

            <Grid item xs={4}>
              <Box>FOLLOW ON US</Box>
              <Box>
                <Stack direction="row" spacing={5} sx={{ mb: 5, py: 2 }}>
                  <MuiNextLink
                    sx={{ textDecoration: 'none', color: 'common.white' }}
                    href="https://YourInstagramLink/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram fontSize="large" />
                  </MuiNextLink>
                  <MuiNextLink
                    sx={{ textDecoration: 'none', color: 'common.white' }}
                    href="https://YourFacebookLink/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook fontSize="large" />
                  </MuiNextLink>
                  <MuiNextLink
                    sx={{ textDecoration: 'none', color: 'common.white' }}
                    href="https://YourTwitterLink/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter fontSize="large" />
                  </MuiNextLink>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Grid>
          <Typography align="center" color="common.white">
            Copyright by ©{new Date().getFullYear()} Sushi Rollin. All rights
            reserved.
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

// 2/20

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         py: 5,
//         bgcolor: '#262626',
//         textDecoration: 'none',
//         color: 'common.white',
//       }}
//     >
//       <Container maxwidth="sm">
//         {/* Logo Grid */}
//         <Grid
//           container
//           direction="column"
//           justifyContent="center"
//           alignItems="center"
//           // margin bottom
//           sx={{ mb: 2 }}
//         >
//           <Grid item sx={12}>
//             <Box sx={{ align: 'center' }}>
//               <MuiNextLink href="/" underline="none">
//                 {/* <Image
//                   src="/footer_rollinlogo_white.svg"
//                   alt="logo"
//                   layout="responsive"
//                   width={195.18}
//                   height={23.86}
//                 /> */}
//                 <FooterLogo />
//               </MuiNextLink>
//             </Box>
//           </Grid>
//         </Grid>
//         {/* Second Grid with Contact and Follow on us */}
//         <Container>
//           <Grid container spacing={2} direction="row">
//             <Grid item xs={8}>
//               <Box>CONTACT US</Box>
//               <Box sx={{ py: 1 }}></Box>
//               {/* <Box>Email 956-249-0167</Box> */}
//               <Box>
//                 <Link
//                   sx={{ textDecoration: 'none', color: 'common.white' }}
//                   href="mailto:info@rollinsushi.com"
//                   target="_blank"
//                   // rel="noopener noreferrer"
//                 >
//                   <Email />
//                 </Link>
//               </Box>
//               <Box>
//                 {/* <Link href=""> */}
//                 <Phone />
//                 {/* </Link> */}
//               </Box>

//               {/* <Box>Phone 956-249-0167</Box> */}
//             </Grid>

//             {/* Follow on us Grid */}

//             <Grid item xs={4}>
//               <Box>FOLLOW ON US</Box>
//               <Box>
//                 <Stack direction="row" spacing={5} sx={{ mb: 5, py: 2 }}>
//                   <MuiNextLink
//                     sx={{ textDecoration: 'none', color: 'common.white' }}
//                     href="https://YourInstagramLink/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Instagram fontSize="large" />
//                   </MuiNextLink>
//                   <MuiNextLink
//                     sx={{ textDecoration: 'none', color: 'common.white' }}
//                     href="https://YourFacebookLink/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Facebook fontSize="large" />
//                   </MuiNextLink>
//                   <MuiNextLink
//                     sx={{ textDecoration: 'none', color: 'common.white' }}
//                     href="https://YourTwitterLink/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Twitter fontSize="large" />
//                   </MuiNextLink>
//                 </Stack>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>

//         <Grid>
//           <Typography align="center" color="common.white">
//             © 2022 Sushi Rollin'
//           </Typography>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;
//

// 2/20 svg image
{
  /* <Image
                  src="/footer_rollinlogo_white.svg"
                  alt="logo"
                  layout="responsive"
                  width={205}
                  height={35}
                /> */
}

{
  /* <Image
                      src="/footer/email-icon.svg"
                      alt="Phone"
                      layout="responsive"
                      width={29}
                      height={29}
                    /> */
}
