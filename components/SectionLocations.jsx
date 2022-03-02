import { Button, Container, Grid, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { section1 } from '/data/homelocations';
import MuiNextLink from '@components/MuiNextLink';
import SectionLocationsInfo from '@components/SectionLocationsInfo';

export default function SectionLocations() {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: 'relative',
        width: '100vw',
      }}
    >
      <Container sx={{ mt: 8 }}>
        <Typography
          color="text"
          variant="h2"
          align="center"
          fontWeight={'fontWeightBold'}
          fontFamily={'Nunito'}
        >
          Locations
        </Typography>
        <ImageList sx={{ p: 7, overflow: 'hidden' }} cols={2} gap={33}>
          {section1.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=380&h=380&fit=crop&auto=format`}
                srcSet={`${item.img}?w=380&h=380&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="eager"
              />
            </ImageListItem>
          ))}
        </ImageList>

        {/* TODO how we can arrange these two sections?
        <SectionLocationsInfo /> */}

        <Grid container sx={{ mb: 1 }}>
          <Grid item xs={12} sm={6}>
            <Typography
              color="text"
              variant="h3"
              align="center"
              fontWeight={'fontWeightBold'}
              fontFamily={'Nunito'}
              sx={{ mb: 1 }}
            >
              Sushi Rollin'
            </Typography>
            <Typography
              color="text"
              variant="body1"
              align="center"
              fontFamily={'Nunito'}
              sx={{ mb: 1 }}
            >
              6850 N Shiloh Rd, Garland, TX 75044
            </Typography>
            <Typography
              color="text"
              variant="body1"
              align="center"
              fontFamily={'Nunito'}
              sx={{ mb: 1 }}
            >
              6Opens Daily 11 a.m. - 9:30 p.m.
            </Typography>
            <Typography
              color="text"
              variant="body1"
              align="center"
              fontFamily={'Nunito'}
              sx={{ mb: 1 }}
            >
              (469) 798-7831
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              color="text"
              variant="h3"
              align="center"
              fontWeight={'fontWeightBold'}
              fontFamily={'Nunito'}
              sx={{ mb: 1 }}
            >
              Sushi Rollin' Lewisville
            </Typography>
            <Typography
              color="text"
              variant="body1"
              align="center"
              fontFamily={'Nunito'}
              sx={{ mb: 1 }}
            >
              1288 W Main St #142, Lewisville, TX 75067
            </Typography>
            <Typography
              color="text"
              variant="body1"
              align="center"
              fontFamily={'Nunito'}
              sx={{ mb: 1 }}
            >
              Opens Daily 11 a.m. - 9:00
            </Typography>
            <Typography
              color="text"
              variant="body1"
              align="center"
              fontFamily={'Nunito'}
              sx={{ mb: 1 }}
            >
              (817) 320-3722
            </Typography>
          </Grid>
        </Grid>

        <Grid align="center" gutterBottom pt={10} pb={10}>
          <Button>
            <MuiNextLink
              sx={{ textDecoration: 'none', color: 'common.white' }}
              href="/"
            >
              View Locations
            </MuiNextLink>
          </Button>
        </Grid>
      </Container>
    </Grid>
  );
}
