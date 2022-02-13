import { Container, Grid, Typography } from "@mui/material";
import AlexReview from "./ReviewCard/Alex";
import MonaReview from "./ReviewCard/Mona";
import ShanenReview from "./ReviewCard/Shanen";

const SectionReview = () => {
  return (
    <Container maxWidth="md" sx={{ my: 15 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 10 }}>
        Customer Review
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
  );
};

export default SectionReview;
