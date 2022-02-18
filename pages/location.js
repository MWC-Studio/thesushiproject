import TopBanner from "@components/TopBanner";
import QuiltedImages from "@components/QuiltedImages";
import BottomBanner from "@components/BottomBanner";
import LocationInfoCard from "@components/LocationInfoCard";

const LocationPage = () => {
  return (
    <>
      <TopBanner title="Location" description="Location" />
      <QuiltedImages />
      <BottomBanner />
      <Container maxWidth="lg" sx={{ my: 15 }}>
        <Grid container spacing={2}>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <LocationInfoCard 
              imgSrc = '/logodot2.svg'
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
            <LocationInfoCard />
          </Grid>
        </Grid>
      </Container>
    </>
  )
};

export default LocationPage;