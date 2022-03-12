import { Button, Container, Grid, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { section1 } from '../../data/homemenu';
import MuiNextLink from '@components/MuiNextLink';

export default function SectionMenu() {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: 'relative',
        width: '100vw',
        bgcolor: '#FAF6E8',
      }}
    >
      <Container sx={{ mt: 4}}>
        <Typography textAlign="center" color="secondary.main">
          FAST & TASTY
        </Typography>
        <Typography
          color="text"
          variant="h2"
          align="center"
          fontWeight={'fontWeightBold'}
          fontFamily={'Nunito'}
          pb={4}
        >
          Rollin’ Experience
        </Typography>

        <ImageList sx={{ overflow: 'hidden' }} cols={3} gap={33}>
          {section1.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=380&h=380&fit=crop&auto=format`}
                srcSet={`${item.img}?w=380&h=380&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="eager"
              />
              <ImageListItemBar position="below" />
              <Typography
                component={'div'}
                color="text"
                variant="body1"
                align="center"
                fontWeight={'fontWeightBold'}
                fontFamily={'Nunito'}
              >
                {item.name}
              </Typography>
            </ImageListItem>
          ))}
        </ImageList>
        {/*<Grid item lg={7} md={7} sm={9} xs={12} align="center">
         */}
        <Grid align="center" pb={10}>
          <Button>
            <MuiNextLink
              sx={{ textDecoration: 'none', color: 'common.white' }}
              href="/menu"
            >
              View Store Menu
            </MuiNextLink>
          </Button>
        </Grid>
      </Container>
    </Grid>
  );
}
