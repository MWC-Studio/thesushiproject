import { Container, Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function BottomMenuImageList() {
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
          
    <Container sx={{ mt: 7 }}>
      <Typography
       sx={{fontSize: 'h1.fontSize',textAlign:"center"}}
      >Sushi Rollin' Experience
      </Typography>

      <ImageList sx={{ p: 3 }} cols={4} gap={33}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=278&h=278&fit=crop&auto=format`}
              srcSet={`${item.img}?w=278&h=278&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
    </Grid>
  );
}

// const itemName = [
//   "item00","item01","item02","item03","item04",
//   "item05","item06","item07","item08","item09",
//   "item10","item11"
// ];
// const itemData = itemName.map((item, index) => ({
//   img: `/menu_page/section3-img${index}.svg`,
//   title: item,
// }));

const itemData = [
  {
    img: `/menu_page/section3-img00.svg`,
    title: 'img00',
  },
  {
    img: `/menu_page/section3-img01.svg`,
    title: 'img01',
  },
  {
    img: `/menu_page/section3-img02.svg`,
    title: 'img02',
  },
  {
    img: `/menu_page/section3-img03.svg`,
    title: 'img03',
  },
  {
    img: `/menu_page/section3-img04.svg`,
    title: 'img04',
  },
  {
    img: `/menu_page/section3-img05.svg`,
    title: 'img05',
  },
  {
    img: `/menu_page/section3-img06.svg`,
    title: 'img06',
  },
  {
    img: `/menu_page/section3-img07.svg`,
    title: 'img07',
  },
  {
    img: `/menu_page/section3-img08.svg`,
    title: 'img08',
  },
  {
    img: `/menu_page/section3-img09.svg`,
    title: 'img09',
  },
  {
    img: `/menu_page/section3-img10.svg`,
    title: 'img10',
  },
  {
    img: `/menu_page/section3-img11.svg`,
    title: 'img11',
  },
]