import { Container, Grid, Typography } from "@mui/material";
import { section1 } from "../../data/menu";
import ImageListWithTitle from "./ImageListWithTitle";

const TitlebarBelowImageList = () => {
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
      <Container sx={{ mt: 9 }}>
        <Typography color="text" variant="h2" align="center">
          Special Rolls
        </Typography>
        <ImageListWithTitle imgData={section1} />
      </Container>
    </Grid>
  );
};

export default TitlebarBelowImageList;
