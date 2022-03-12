import { Container, Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { section1 } from "../../data/homemenu";

export default function SectionMenuMobile() {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: "relative",
        width: "100vw",
        bgcolor: "common.beige",
      }}
      id='Special Rolls'
      my={2}
      py={4}
    >
      <Container>
      <Typography  
                    
                    variant="h6"
                    color={'secondary.main'}
                    fontFamily={'Nunito'}
                    fontWeight={'fontWeightBold'}
                    textAlign={"center"}
                    >
                     FAST & TASTY
                    </Typography>
       <Typography
                    component={"div"}
                    color="text"
                    variant="h3"
                    align="center"
                    fontWeight={"fontWeightBold"}
                    fontFamily={"Nunito"}
                    mb={3}
                  >
                    Rollin’ Experience
        </Typography>
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
                  mt={1}
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
