import { Container, Grid, Typography } from "@mui/material";
import { section1 } from "../../data/menu";
import ImageListWithTitle from "./ImageListWithTitle";

const ChefSpecialRolls = (props) => {
  return (
    <section id="Chef Special Rolls">
      <Grid
        component="section"
        container
        sx={{
          position: "relative",
          width: "100vw",
          bgcolor: "common.beige",
        }}
        my={props.isMobile ? 2 : 0}
        py={props.isMobile ? 4 : 0}
      >
        <Container sx={{ mt: props.isMobile ? 0 : 7 }}>
          <Typography
            color="text"
            variant={props.isMobile ? "h3" : "h2"}
            align="center"
          >
            Chef Special Rolls
          </Typography>
          <ImageListWithTitle imgData={section1} isMobile={props.isMobile} />
        </Container>
      </Grid>
    </section>
  );
};

export default ChefSpecialRolls;
