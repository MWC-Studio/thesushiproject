import { Button, Grid, Typography } from "@mui/material";
import MuiNextLink from "@components/MuiNextLink";
import Image from "next/image";

const TopBanner = (props) => {
  let btn;
  if (props.title === "Home") {
    btn = (
      <Button variant="outlined" href="/franchise" sx={{ marginTop: "3%" }}>
        Franchise
      </Button>
    );
  }

  return (
    <Grid
      component="section"
      container
      sx={{
        position: "relative",
        height: props.isMobile ? "25vh" : "55vh",
        width: "100vw",
      }}
    >
      <Image
        src={
          props.isMobile
            ? `/topbanner/${props.title}-mobile-banner.svg`
            : `/topbanner/${props.title}-banner.svg`
        }
        alt={`${props.title} banner`}
        layout="fill"
        objectFit="cover"
      />
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems={props.isMobile ? "right" : "center"}
        pr={props.isMobile ? 5 : 0}
        sx={{
          position: "absolute",
          inset: 0,
        }}
      >
        <Typography
          color={"primary.contrastText"}
          variant={
            props.isMobile ? (props.title == "Home" ? "h3" : "h2") : "h1"
          }
          align="right"
        >
          {props.description}
          {<br />}
          {props.second}
        </Typography>
        <Grid container justifyContent={props.isMobile ? "flex-end" : "center"}>
          {btn}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TopBanner;
