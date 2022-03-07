import { Container, Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { section2 } from "data/menu";
import { Divider } from "@mui/material";

export default function MobileMenuDetails() {
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
        <ImageList sx={{ p: 2, overflow: "hidden" }} cols={1}>
          {section2.map((item, idx) => (
            <section id={item.category} key={idx}>
              <div>
                <Divider
                  variant="fullWidth"
                  color="red"
                  classID={`s2menu${item.id}`}
                />
                <ImageListItem sx={{ mt: 2 }}>
                  <Typography
                    component={"div"}
                    color="text"
                    variant="h3"
                    align="center"
                    fontWeight={"fontWeightBold"}
                    fontFamily={"Nunito"}
                    mb={2}
                  >
                    {item.category}
                  </Typography>
                  <img
                    src={`${item.mobileImg}?w=343&h=130&fit=crop&auto=format`}
                    srcSet={`${item.mobileImg}?w=343&h=130&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="eager"
                    //style={{width: '343px', height: '130px', objectFit: 'cover'}}
                  />
                </ImageListItem>
                <MenuDescription data={item.menu} key={idx} />
              </div>
            </section>
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
            variant="h4"
            align="left"
            fontWeight={"fontWeightBold"}
            fontFamily={"Nunito"}
            mt={2}
            mb={1}
          >
            {food.name}
          </Typography>
          <Typography
            component={"div"}
            color="text"
            variant="body2"
            align="left"
            fontWeight={"fontWeightLight"}
            fontFamily={"Nunito"}
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
