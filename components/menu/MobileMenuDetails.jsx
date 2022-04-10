import { Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { section2 } from "data/menu";

export default function MobileMenuDetails() {
  return (
    <div>
      {section2.map((item, idx) => (
        <section id={item.category} key={idx}>
          <Grid
            sx={{
              position: "relative",
              width: "100vw",
              bgcolor: idx % 2 === 0 ? "common.beige" : "common.white",
            }}
          >
            <ImageList sx={{ p: 2, overflow: "hidden" }} cols={1}>
              <ImageListItem>
                <Typography
                  component={"div"}
                  color="text"
                  variant="h3"
                  align="center"
                  my={3}
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
            </ImageList>
          </Grid>
        </section>
      ))}
    </div>
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
            mt={3}
            mb={1}
          >
            {food.name}
          </Typography>
          <Typography
            component={"div"}
            color="text"
            variant="body2"
            align="left"
            mb={3}
          >
            {food.description}
          </Typography>
        </Typography>
      ))}
    </div>
  );
};
