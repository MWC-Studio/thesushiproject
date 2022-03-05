import { Container, Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { section1 } from "data/menu";
import { borderRadius } from "@mui/system";

export default function MobileSpecialRolls() {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: "relative",
        width: "100vw",
        bgcolor: "#fff",
      }}
      id='Special Rolls'
    >
      <Container>
        <ImageList sx={{ overflow: "hidden" }} cols={2} gap={16}>
          {section1.map((item, idx) => (
            <div key={idx} sx={{ width: 170, height: 171.5 }}>
              <ImageListItem>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.name}
                  loading="eager"
                />
                <Typography
                  component={"div"}
                  color="text"
                  variant="subtitle2"
                  align="center"
                  fontWeight={"fontWeightBold"}
                  fontFamily={"Nunito"}
                  my={2}
                >
                  {item.name}
                </Typography>
              </ImageListItem>
            </div>
          ))}
        </ImageList>
      </Container>
    </Grid>
  );
}
