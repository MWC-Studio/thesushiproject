import { Button, Container, Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { hsection1 } from "../../data/homemenu";
import { section1 } from "../../data/menu";
import MuiNextLink from "@components/MuiNextLink";

export default function SectionMenu(props) {
  const isHomepage = props.page === "home" ? true : false;

  return (
    <Grid
      component="section"
      container
      sx={{
        position: "relative",
        width: "100vw",
        bgcolor: "common.beige",
      }}
    >
      <Container sx={{ mt: 8 }}>
        <Typography variant="h3" textAlign="center" color="secondary.main">
          {props.subtitle}
        </Typography>
        <Typography
          color="text"
          variant="h2"
          align="center"
          fontWeight={"fontWeightBold"}
          fontFamily={"Nunito"}
          pb={4}
        >
          {props.title}
        </Typography>
        <ImageList sx={{ overflow: "hidden" }} cols={3} gap={33}>
          {(isHomepage ? hsection1 : section1).map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=380&h=380&fit=crop&auto=format`}
                srcSet={`${item.img}?w=380&h=380&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="eager"
              />
              <ImageListItemBar position="below" />
              <Typography
                component={"div"}
                color="text"
                variant="body1"
                align="center"
                fontWeight={"fontWeightBold"}
                fontFamily={"Nunito"}
              >
                {item.name}
              </Typography>
            </ImageListItem>
          ))}
        </ImageList>
        {/*<Grid item lg={7} md={7} sm={9} xs={12} align="center">
         */}
        {isHomepage ? (
          <Grid align="center" pt={7} pb={7}>
            <MuiNextLink href="/menu" underline="none" sx={{ py: 2 }}>
              <Button> View More Menu</Button>
            </MuiNextLink>
          </Grid>
        ) : (
          <Grid pb={9} />
        )}
      </Container>
    </Grid>
  );
}
