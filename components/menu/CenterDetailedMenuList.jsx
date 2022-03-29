import { Container, Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { section2 } from "data/menu";

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
          {section2.map((item, idx) => (
            <div key={idx}>
              <ImageListItem>
                <Typography
                  component={"div"}
                  color="text"
                  variant="h2"
                  align="left"
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
              <MenuDescription data={item.menu} key={idx} />
            </div>
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
          <Typography
            component={"div"}
            color="text"
            variant="h3"
            align="left"
            mt={2}
            mb={1}
          >
            {food.name}
          </Typography>
          <Typography
            component={"div"}
            color="text"
            variant="body1"
            align="left"
            fontStyle="italic"
            mb={5}
          >
            {food.description}
          </Typography>
        </Typography>
      ))}
    </div>
  );
};
