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
        <ImageList sx={{ p: 7, overflow: "hidden" }} cols={3} gap={33}>
          {section2_1.map((item, idx) => (
            <ImageListItem key={idx}>
              <Typography
                component={"div"}
                color="text"
                variant="h4"
                align="left"
                fontWeight={"fontWeightBold"}
                fontFamily={"Nunito"}
              >
                <h4>{item.category}</h4>
              </Typography>
              <img
                src={`${item.img}?w=380&h=380&fit=crop&auto=format`}
                srcSet={`${item.img}?w=380&h=380&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="eager"
              />
            </ImageListItem>
          ))}
          {section2_1.map((item, idx) => (
            <MenuDescription data={item.menu} key={idx} />
          ))}
          {section2_2.map((item, idx) => (
            <ImageListItem key={idx}>
              <Typography
                component={"div"}
                color="text"
                variant="h4"
                align="left"
                fontWeight={"fontWeightBold"}
                fontFamily={"Nunito"}
              >
                <h4 sx={{ fontSize: "h2.fontSize", textAlign: "left" }}>
                  {item.category}
                </h4>
              </Typography>
              <img
                src={`${item.img}?w=380&h=380&fit=crop&auto=format`}
                srcSet={`${item.img}?w=380&h=380&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="eager"
              />
            </ImageListItem>
          ))}
          {section2_2.map((item, idx) => (
            <MenuDescription data={item.menu} key={idx} />
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
        <Typography nowrap="true" key={idx} component={"div"}>
          <h3 sx={{ py: 2, fontSize: "h3.fontSize" }}>{food.name}</h3>
          <div>{food.description}</div>
        </Typography>
      ))}
    </div>
  );
};
