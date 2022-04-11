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
      >
        <Container sx={{ mt: props.isMobile ? 0 : 7 }}>
          <Typography
            color="text"
            variant={props.isMobile ? "h3" : "h2"}
            align="center"
            mt={props.isMobile ? 5 : 0}
          >
            Special Rolls
          </Typography>
          <ImageList
            sx={{ p: props.isMobile ? 0 : 7, overflow: "hidden" }}
            cols={props.isMobile ? 1 : 3}
            gap={props.isMobile ? 5 : 33}
          >
            {section4.map((food, idx) => (
              <div key={idx}>
                {props.isMobile && food.id > 6 ? (
                  ""
                ) : (
                  <Typography nowrap="true" key={idx} component={"div"}>
                    <Typography
                      component={"div"}
                      color="text"
                      variant={props.isMobile ? "h4" : "h3"}
                      align="left"
                      mt={2}
                      mb={1}
                    >
                      {food.name}
                    </Typography>
                    <Typography
                      component={"div"}
                      color="text"
                      variant={props.isMobile ? "body2" : "body1"}
                      align="left"
                      fontStyle={props.isMobile ? "" : "italic"}
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
