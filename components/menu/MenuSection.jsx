import React from "react";
import { Box, Grid, Container } from "@mui/material";
import MuiNextLink from "@components/MuiNextLink";
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
      <Container sx={{ my: props.isMobile? 3 : 7 , mx: props.isMobile? 0 : 1}}>
          <Box sx={{border: props.isMobile ? 3 :10 , borderColor: "secondary.main"}}>  
          <MuiNextLink underline="none" href="/menu_page/menu.jpg" target="_blank"> 
          <Image
            src={"/menu_page/menu.jpg"}
            width={500}
            height={800}
            layout="responsive"
          />
          </MuiNextLink>
          </Box>
      </Container>
    </Grid>
  );
};

export default MenuSection;
