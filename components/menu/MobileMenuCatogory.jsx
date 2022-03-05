import * as React from 'react';
import Box from '@mui/material/Box';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const preventDefault = (event) => event.preventDefault();

function MobileMenuCatogory() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
     {categoryList.map((item, i) => (
        <AnchorLink 
          href={"#" + item}
          underline="hover" 
          key={i}
          component={"div"}
          color="text"
          variant="h5"
          fontWeight={"fontWeightBold"}
          fontFamily={"Nunito"}
          my={2}
          mx={2}
          align="center"
        >
          {item}
        </AnchorLink>
      ))}
    </Box>
  );
}
const categoryList = [
  'Special Rolls', 'Appetizers', 'Fusion Bowls', 'Sashimi & Nigiri', 'Fried Rice', 'Regular Rolls', 'Hand Rolls'
];

export default MobileMenuCatogory;
