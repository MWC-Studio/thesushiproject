import { Button, Container, Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { section1 } from "/data/homelocations";
import MuiNextLink from '@components/MuiNextLink';

export default function SectionLocations() {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: "relative",
        width: "100vw",   
      }}
    >
      <Container sx={{ mt:8 }}>
          
        <Typography
          color="text"
          variant="h2"
          align="center"
          fontWeight={"fontWeightBold"}
          fontFamily={"Nunito"}
        >
          Locations
        </Typography>

        <ImageList sx={{ p: 7, overflow: "hidden" }} cols={2} gap={33}>
          {section1.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=380&h=380&fit=crop&auto=format`}
                srcSet={`${item.img}?w=380&h=380&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="eager"
              />
              <ImageListItemBar
                position="below" />
               <Typography
                component={"div"}
                color="text"
                variant="body1"
                align="center"
                fontWeight={"fontWeightBold"}
                fontFamily={"Nunito"}
              >{item.name}</Typography>
            </ImageListItem>
          ))}
        </ImageList>
        {/*<Grid item lg={7} md={7} sm={9} xs={12} align="center">
        */}<Grid align="center"gutterBottom pb={10}>
      </Grid>
      </Container>
    </Grid>
  );
}


