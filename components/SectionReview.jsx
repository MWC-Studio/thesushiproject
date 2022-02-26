import { Container, Grid, Typography } from "@mui/material";
import AlexReview from "./ReviewCard/Alex";
import MonaReview from "./ReviewCard/Mona";
import ShanenReview from "./ReviewCard/Shanen";

const SectionReview = () => {
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
    <Container  maxWidth="md" sx={{ my: 8 }}>
      <Typography variant="h2" textAlign="center" fontFamily={'Nunito'} fontWeight={'fontWeightBold'} sx={{ mb: 10 }}>
      Here’s What the Customers Say
      </Typography>
      <Grid container spacing={2}>
        <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
          <AlexReview />
        </Grid>
        <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
          <MonaReview />
        </Grid>
        <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
          <ShanenReview />
        </Grid>
      </Grid>
    </Container>
    </Grid>
  );
};

export default SectionReview;
