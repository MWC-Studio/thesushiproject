import { Container, Grid } from "@mui/material";
import LocationInfoCard from "@components/LocationInfoCard"

const LocationInfoSection = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 15 }}>
        <Grid container spacing={2}>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <LocationInfoCard 
              imgSrc = '/icons/logodot2.svg'
              imgAlt = 'Logo Dot 2 circle'
              title = "Sushi Rollin' Garland"
              address = '6850 N Shiloh Rd, Garland, TX 75044'
              phone = '(469) 798-7831'
              hours = 'Opens Daily 11 a.m. - 9:30 p.m.'
              lastcall = '(Last Call: 9:15 p.m.)'
              service = 'Dine in, To-go, Delivery'
            />
          </Grid>
          <Grid container item justifyContent="center" xs={12} md={6}>
          <LocationInfoCard 
              imgSrc = '/icons/logodot2.svg'
              imgAlt = 'Logo Dot 2 circle'
              title = "Sushi Rollin’ Lewisville"
              address = '1288 W Main St #142, Lewisville, TX 75067'
              phone = '(817) 320-3722'
              hours = 'Opens Daily 11 a.m. - 9:00 p.m.'
              lastcall = '(Last Call: 8:45 p.m.)'
              service = 'Dine in, To-go, Delivery'
            />
          </Grid>
        </Grid>
    </Container>
  );
};

export default LocationInfoSection;