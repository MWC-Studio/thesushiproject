import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Typography } from "@mui/material";

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
        <Link 
          href="#" 
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
        </Link>
      ))}
    </Box>
  );
}


function Item(props) {
  return (
    <div>
      <Typography
                  component={"div"}
                  color="text"
                  variant="h4"
                  fontWeight={"fontWeightBold"}
                  fontFamily={"Nunito"}
                  my={2}
      >
      {props.item}
      </Typography>     
    </div>
  )
}

const categoryList = [
  'Special Rolls', 'Appetizers', 'Fusion Bowl', 'Sashimi & Nigiri', 'Fried Rice', 'Regular Rolls', 'Hand Rolls'
];

export default MobileMenuCatogory;
