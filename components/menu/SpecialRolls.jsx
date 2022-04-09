import { Container, Grid, Typography } from "@mui/material";
import { section4 } from "../../data/menu";
import ImageList from "@mui/material/ImageList";

const SpecialRolls = (props) => {
  return (
    <section id="Special Rolls">
      <Grid
        component="section"
        container
        sx={{
          position: "relative",
          width: "100vw",
          bgcolor: props.isMobile ? "#fff" : "common.beige",
        }}
        my={props.isMobile ? 2 : 0}
        py={props.isMobile ? 4 : 0}
      >
        <Container sx={{ mt: props.isMobile ? 0 : 7 }}>
          <Typography
            color="text"
            variant={props.isMobile ? "h3" : "h2"}
            align="center"
          >
            Special Rolls
          </Typography>
          <ImageList
            sx={{ p: 7, overflow: "hidden" }}
            cols={props.isMobile ? 1 : 3}
            gap={33}
          >
            {section4.map((food, idx) => (
              <div>
                {props.isMobile && food.id > 6 ? (
                  ""
                ) : (
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
                )}
              </div>
            ))}
          </ImageList>
        </Container>
      </Grid>
    </section>
  );
};

export default SpecialRolls;
