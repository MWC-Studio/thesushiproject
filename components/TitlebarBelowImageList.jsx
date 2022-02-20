import { Container, Grid, Typography } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowImageList() {
  return (
    <Container sx={{ my: 15 }}>

    <Typography 
      variant="h1" 
      textAlign="center" 
      sx={{ mb: 10 }}
      fontFamily={'Nunito'}
      >
    Special Rolls
    </Typography>

    <ImageList 
        sx={{ p: 10}} 
        cols={3}
        gap={31} 
        >
        {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=380&h=380&fit=crop&auto=format`}
            srcSet={`${item.img}?w=380&h=380&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Container>

  );
}

const itemName = ['Shrimp Tempura Chef Special Roll',
    'Titanic Chef Special Roll',
    'Flaming Hot Chef Special Roll',
    'Crispy Rice SpicyTuna',
    'Red Dragon Roll',
    'Rollin Burrito']

const itemData = itemName.map((item, index) => (
    {
      img: `/menu_page/roll${index}.svg`,
      title: item,
    }
))

