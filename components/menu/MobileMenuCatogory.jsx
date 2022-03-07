import * as React from 'react';
import Box from '@mui/material/Box';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

const preventDefault = (event) => event.preventDefault();

const categoryCSS = (categoryList) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        my: 2,
        '& > :not(style) + :not(style)': {
          ml: 3
        },
      }}
      onClick={preventDefault}
      >
      {categoryList.map((item, i) => (
      <AnchorLink 
        href={"#" + item}
        style={{ textDecoration: 'none' }}
        key={i}
      >
      <Typography
        component={"div"}
        color="#333333"
        variant="h5"
        align="center"
        fontWeight={"fontWeightBold"}
        fontFamily={"Nunito"}
        mt={3}
        sx={{
          '&:hover': {
            color: 'secondary.main',
            backgroundColor: 'transparent',
            textUnderlineOffset: '50%',
            textDecoration: 'underline'
            }}}
      >
      {item}
      </Typography>
      </AnchorLink>
    ))}   
    </Box>  
  )
}

function MobileMenuCatogory() {
  return (
    <Container>
      {categoryCSS(categoryList1)}
      {categoryCSS(categoryList2)}
      {categoryCSS(categoryList3)}
    </Container>

          // <Container>

          // <Box
          //   sx={{
          //     display: 'flex',
          //     flexWrap: 'wrap',
          //     justifyContent: 'center',
          //     my: 2,
          //     '& > :not(style) + :not(style)': {
          //       ml: 3
          //     },
          //   }}
          //   onClick={preventDefault}
          // >
          // {categoryList1.map((item, i) => (
          //     <AnchorLink 
          //       href={"#" + item}
          //       style={{ textDecoration: 'none' }}
          //       key={i}
          //     >
          //     <Typography
          //               component={"div"}
          //               color="#333333"
          //               variant="h5"
          //               align="center"
          //               fontWeight={"fontWeightBold"}
          //               fontFamily={"Nunito"}
          //               mt={3}
          //               sx={{
          //                 '&:hover': {
          //                   color: 'secondary.main',
          //                   backgroundColor: 'transparent',
          //                   textUnderlineOffset: '50%',
          //                   textDecoration: 'underline'
          //               }}}
          //     >
          //         {item}
          //     </Typography>
          //     </AnchorLink>
          //   ))}    
          // </Box>
                
          // <Box
          //   sx={{
          //     display: 'flex',
          //     flexWrap: 'wrap',
          //     justifyContent: 'center',
          //     my: 2,
          //     '& > :not(style) + :not(style)': {
          //       ml: 3
          //     },
          //   }}
          //   onClick={preventDefault}
          // >
          // {categoryList2.map((item, i) => (
          //     <AnchorLink 
          //       href={"#" + item}
          //       style={{ textDecoration: 'none' }}
          //       key={i}
          //     >
          //     <Typography
          //               component={"div"}
          //               color="#333333"
          //               variant="h5"
          //               align="center"
          //               fontWeight={"fontWeightBold"}
          //               fontFamily={"Nunito"}
          //               mt={3}
          //               sx={{
          //                 '&:hover': {
          //                   color: 'secondary.main',
          //                   backgroundColor: 'transparent',
          //                   textUnderlineOffset: '50%',
          //                   textDecoration: 'underline'
          //               }}}
          //     >
          //         {item}
          //     </Typography>
          //     </AnchorLink>
          //   ))}    
          // </Box>
                    
          // <Box
          //   sx={{
          //     display: 'flex',
          //     flexWrap: 'wrap',
          //     justifyContent: 'center',
          //     my: 2,
          //     '& > :not(style) + :not(style)': {
          //       ml: 3
          //     },
          //   }}
          //   onClick={preventDefault}
          // >
          // {categoryList3.map((item, i) => (
          //     <AnchorLink 
          //       href={"#" + item}
          //       style={{ textDecoration: 'none' }}
          //       key={i}
          //     >
          //     <Typography
          //               component={"div"}
          //               color="#333333"
          //               variant="h5"
          //               align="center"
          //               fontWeight={"fontWeightBold"}
          //               fontFamily={"Nunito"}
          //               my={3}
          //               sx={{
          //                 '&:hover': {
          //                   color: 'secondary.main',
          //                   backgroundColor: 'transparent',
          //                   textUnderlineOffset: '50%',
          //                   textDecoration: 'underline'
          //               }}}
          //     >
          //         {item}
          //     </Typography>
          //     </AnchorLink>
          //   ))}    
          // </Box>

          // </Container>
  );
}
const categoryList1 = [
  'Special Rolls', 'Appetizers'
];
const categoryList2 = [
  'Fusion Bowls', 'Sashimi & Nigiri', 'Fried Rice'
];
const categoryList3 = [
  'Regular Rolls', 'Hand Rolls'
];

export default MobileMenuCatogory;
