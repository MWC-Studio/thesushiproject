import { Container, Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function TitlebarBelowImageList() {
  return (
    <Container sx={{ my: 15, bgcolor: "#FAF6E8" }} maxWidth="xl">
      {/* <Container> */}
      <Typography variant="h1" textAlign="center" sx={{ mb: 5, pt: 10 }}>
        Special Rolls
      </Typography>

      <ImageList sx={{ p: 10, overflow: "hidden" }} cols={3}>
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
              align="center"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
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
