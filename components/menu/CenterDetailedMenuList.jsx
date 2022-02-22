import { Container, Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { section2_1, section2_2 } from "data/menu";

export default function CenterDetailedMenuList() {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: "relative",
        width: "100vw",
        bgcolor: "#fff",
      }}
    >
      <Container sx={{ my: 7 }}>
        <ImageList sx={{ width: 1280, p: 7 }} cols={3} gap={33}>
          {section2_1.map((item) => (
            <ImageListItem key={item.img}>
              <Typography>
                <h2 sx={{ fontSize: "h2.fontSize", textAlign: "left" }}>
                  {item.category}
                </h2>
              </Typography>
              <img
                src={`${item.img}?w=380&h=380&fit=crop&auto=format`}
                srcSet={`${item.img}?w=380&h=380&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <MenuDescription data={item.menu} />;
            </ImageListItem>
          ))}
          {section2_2.map((item, idx) => (
            <ImageListItem key={idx}>
              <Typography>
                <h2 sx={{ fontSize: "h2.fontSize", textAlign: "left" }}>
                  {item.category}
                </h2>
              </Typography>
              <img
                src={`${item.img}?w=380&h=380&fit=crop&auto=format`}
                srcSet={`${item.img}?w=380&h=380&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <MenuDescription data={item.menu} />;
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Grid>
  );
}

const MenuDescription = ({ data }) => {
  return (
    <div>
      {data.map((food, idx) => (
        <Typography nowrap="true" key={idx}>
          <h3 sx={{ py: 2, fontSize: "h3.fontSize" }}>{food.name}</h3>
          <span>{food.description}</span>
        </Typography>
      ))}
    </div>
  );
};
