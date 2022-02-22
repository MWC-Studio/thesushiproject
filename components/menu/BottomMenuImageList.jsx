import { Container, Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { section3 } from "data/menu";

export default function BottomMenuImageList() {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: "relative",
        width: "100vw",
        bgcolor: "#FAF6E8",
      }}
    >
      <Container sx={{ mt: 7 }}>
        <Typography sx={{ fontSize: "h1.fontSize", textAlign: "center" }}>
          Sushi Rollin' Experience
        </Typography>

        <ImageList sx={{ p: 7 }} cols={4} gap={33}>
          {section3.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=278&h=278&fit=crop&auto=format`}
                srcSet={`${item.img}?w=278&h=278&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Grid>
  );
}
