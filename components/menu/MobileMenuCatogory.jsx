import React from "react";
import { Typography } from "@mui/material";
import { section1, section2 } from "data/menu";


function MobileMenuCatogory() {
  return (
    <div>
     {section1.map((item, i) => (
        <Item key={i} item={item} />
      ))}
     {section2.map((item, i) => (
        <Item2 key={i} item={item} />
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
      {props.item.type}
      </Typography>     
    </div>
  )
}

function Item2(props) {
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
        {props.item.category}
        </Typography>     
      </div>
    )
  }

export default MobileMenuCatogory;
