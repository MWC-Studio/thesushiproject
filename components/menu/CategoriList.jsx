import { Container, Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { section2 } from "data/menu";
import { borderRadius } from '@mui/system';

export default function CategoriList() {
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
        <ImageList sx={{ overflow: "hidden"}} cols={2} gap={16}>
          {section2.map((item, idx) => (
            <div key={idx} sx={{width: 170, height: 171.5}}>
              <ImageListItem key={idx}>
                <img
                src={`${item.img}?w=110&h=110&fit=crop&auto=format`}
                srcSet={`${item.img}?w=110&h=1100&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="eager"
                />
                <Typography
                  component={"div"}
                  color="text"
                  variant="h4"
                  align="center"
                  fontWeight={"fontWeightBold"}
                  fontFamily={"Nunito"}
                  mb={2}
                  mt={2}>
                {item.category}
                </Typography>
              </ImageListItem>
            </div>
          ))}         
        </ImageList>
      </Container>
    </Grid>
  );
}
