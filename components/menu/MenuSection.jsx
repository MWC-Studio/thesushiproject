import React from "react";
import { Box, Grid, Container } from "@mui/material";
import Image from "next/image";

const MenuSection = (props) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        position: "relative",
        width: "100vw",
      }}
    >
      <Container sx={{ my: 7 , mx:1}}>
          <Box sx={{border: 10, borderColor: "secondary.main"}}>  
          <Image
            src={"/menu_page/menu.jpg"}
            width={500}
            height={800}
            layout="responsive"
          />
          </Box>
      </Container>
    </Grid>
  );
};

export default MenuSection;
