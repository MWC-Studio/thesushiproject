import { Button, Container, Grid, Typography } from "@mui/material";
import { section1 } from "../../data/homemenu";
import MuiNextLink from "@components/MuiNextLink";
import ImageListWithTitle from "../menu/ImageListWithTitle";

export default function SectionMenu(props) {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: "relative",
        width: "100vw",
        bgcolor: "common.beige",
      }}
    >
      <Container sx={{ mt: props.isMobile ? 5 : 8 }}>
        <Typography variant="h3" textAlign="center" color="secondary.main">
          FAST & TASTY
        </Typography>
        <Typography
          color="text"
          variant="h2"
          align="center"
          sx={{ pb: props.isMobile ? 3 : 0 }}
        >
          Rollin’ Experience
        </Typography>

        <ImageListWithTitle
          imgData={section1}
          isHome={props.isHome}
          isMobile={props.isMobile}
        />

        <Grid align="center" pb={7} pt={props.isMobile ? 3 : 0}>
          <MuiNextLink href="/menu" underline="none" sx={{ py: 2 }}>
            <Button> View More Menu</Button>
          </MuiNextLink>
        </Grid>
      </Container>
    </Grid>
  );
}
