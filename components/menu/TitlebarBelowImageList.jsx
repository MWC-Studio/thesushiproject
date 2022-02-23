import { Container, Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { section1 } from "../../data/menu";

export default function TitlebarBelowImageList() {
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
      <Container sx={{ my: 7 }}>
        <Typography
          color="text"
          variant="h1"
          align="center"
          fontWeight={"fontWeightBold"}
          fontFamily={"Nunito"}
        >
          Special Rolls
        </Typography>

        <ImageList sx={{ p: 7, overflow: "hidden" }} cols={3} gap={33}>
          {section1.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=380&h=380&fit=crop&auto=format`}
                srcSet={`${item.img}?w=380&h=380&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="eager"
              />

              <ImageListItemBar
                title={item.name}
                position="below"
                align="center"
                sx={{ fontSize: "h3.fontSize" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Grid>
  );
}
