import { Container, Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function TitlebarBelowImageList() {
  return (
    <Grid
            component="section"
            container
            sx={{
                position: "relative",
                width: "100vw",
                bgcolor: "#FAF6E8"
                //mb: 15
              }}
        >
          
    <Container sx={{ my: 7 }}>
      <Typography
       sx={{ fontFamily: 'Monospace',fontSize: 'h1.fontSize',textAlign:"center"}}
      >Special Rolls
      </Typography>

      <ImageList sx={{ p: 7 }} cols={3} gap={33}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=380&h=380&fit=crop&auto=format`}
              srcSet={`${item.img}?w=380&h=380&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />

            <ImageListItemBar 
              title={item.title} position="below" align="center" 
              sx={{ fontFamily: 'Monospace',fontSize: 'h3.fontSize'}} />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
    </Grid>
  );
}

const itemName = [
  "Shrimp Tempura Chef Special Roll",
  "Titanic Chef Special Roll",
  "Flaming Hot Chef Special Roll",
  "Crispy Rice SpicyTuna",
  "Red Dragon Roll",
  "Rollin Burrito",
];

const itemData = itemName.map((item, index) => ({
  img: `/menu_page/roll${index}.svg`,
  title: item,
}));
