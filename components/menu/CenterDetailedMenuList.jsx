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
      <Container sx={{ my: 2 }}>
        <ImageList sx={{ p: 7, overflow: "hidden" }} cols={3} gap={33}>
          {section2_1.map((item, idx) => (
            <ImageListItem key={idx}>
              <Typography
                component={"div"}
                color="text"
                variant="h1"
                align="left"
                fontWeight={"fontWeightBold"}
                fontFamily={"Nunito"}
                mb={2}
              >
              {item.category}
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
                variant="h1"
                align="left"
                fontWeight={"fontWeightBold"}
                fontFamily={"Nunito"}
                mb={2}
              >
              {item.category}
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
    <div >
      {data.map((food, idx) => (
        <Typography nowrap="true" key={idx} component={"div"}>
          <Typography
                component={"div"}
                color="text"
                variant="header2"
                align="left"
                fontWeight={"fontWeightBold"}
                fontFamily={"Nunito"}
                mb={1}
              >{food.name}</Typography>
          <Typography
                component={"div"}
                color="text"
                variant="body1"
                align="left"
                fontWeight={"fontWeightLight"}
                fontFamily={"Nunito"}
                fontStyle="italic"
                mb={5}
              >{food.description}</Typography>
        </Typography>
      ))}
    </div>
  );
};
