import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/dist/client/image";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { section1 } from "data/menu";

function CarouselSpecialRoll(props) {
  return (
    <Carousel 
       navButtonsAlwaysInVisible="false" 
       sx={{ p: 1 }}
       autoPlay= "false"
       fullHeightHover="true"
    >
      {section1.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <Typography
                  component={"div"}
                  color="text"
                  variant="h3"
                  align="left"
                  fontWeight={"fontWeightBold"}
                  fontFamily={"Nunito"}
                  my={2}
      >
      {props.item.type}
      </Typography>
      <Image
        src={props.item.img}
        width="343"
        height="266"
        layout="responsive"
        // position='absolute'
        // top="11.68%"
        // left="4.27%"
        alt={props.item.name}
      />
      <Typography
                  component={"div"}
                  color="text"
                  variant="h3"
                  align="center"
                  fontWeight={"fontWeightBold"}
                  fontFamily={"Nunito"}
                  my={2}
      >
      {props.item.name}
      </Typography>
    </Paper>
  )
}

export default CarouselSpecialRoll;
