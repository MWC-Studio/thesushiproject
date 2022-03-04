import React from "react";
import { Typography } from "@mui/material";

function MobileMenuCatogory() {
  return (
    <div>
     {categoryList.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </div>
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
