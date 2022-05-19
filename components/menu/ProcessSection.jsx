import React from "react";
import { Typography, Grid } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import { ImageListItem } from "@mui/material";
import Image from "next/dist/client/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const processdata = [
  {
    id: 1,
    title: "Material",
    content: "Certified provider brings fresh \nfish 1-2 times a week",
  },
  {
    id: 2,
    title: "Meal Prep",
    content:
      "The fresh ingredients are prepped in the morning for the chefs to get Rollin’",
  },
  {
    id: 3,
    title: "Order",
    content: "2 chefs can cover every 50K \namount of order ",
  },
  {
    id: 4,
    title: "Serve",
    content: "It takes less than10 mins to \nmake the sushi roll",
  },
];

const ProcessSection = (props) => {
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt={props.isMobile ? 5 : 10}
      px={props.isMobile ? 3 : 12}
    >
      <Grid item alignSelf="center">
        <Typography
          variant={props.isMobile ? "h6" : "h3"}
          sx={{ display: "inline-block", color: "secondary.main" }}
        >
          From the Kitchen to the Table
        </Typography>
      </Grid>
      <Grid item alignSelf="center">
        <Typography
          variant={props.isMobile ? "h3" : "h2"}
          sx={{ display: "inline-block", color: "text.main" }}
          mb={props.isMobile ? 3 : 6}
        >
          Our Process
        </Typography>
      </Grid>

      <ImageList cols={props.isMobile ? 1 : 23} align="center">
        <ImageListItem cols={props.isMobile ? 1 : 5} rows={1} aglign="center">
          <Grid container gap={2} alignItems="center">
            <Grid container item>
              <Grid item xs={12} mb={props.isMobile ? 1 : 0}>
                <Grid>
                  <Typography
                    variant={props.isMobile ? "h5" : "h4"}
                    sx={{ display: "inline-block", color: "text.main" }}
                    mb={1}
                  >
                    {processdata[0].title}
                  </Typography>
                </Grid>
                <Image src={"/icons/logo-circle.svg"} width={50} height={50} />
                <Typography
                  variant={props.isMobile ? "body2" : "body1"}
                  sx={{ color: "text.main", whiteSpace: "pre-line" }}
                  mt={1}
                >
                  {processdata[0].content}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </ImageListItem>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          pt={props.isMobile ? 1 : 0}
          pb={props.isMobile ? 1 : 5}
        >
          {props.isMobile ? (
            <ArrowDownwardIcon sx={{ color: "#40464D" }} />
          ) : (
            <ArrowForwardIcon sx={{ color: "#40464D" }} />
          )}
        </Grid>

        <ImageListItem cols={props.isMobile ? 1 : 5} rows={1} aglign="center">
          <Grid container gap={2} alignItems="center">
            <Grid container item>
              <Grid item xs={12} mb={props.isMobile ? 1 : 0}>
                <Grid>
                  <Typography
                    variant={props.isMobile ? "h5" : "h4"}
                    sx={{ display: "inline-block", color: "text.main" }}
                    mb={1}
                  >
                    {processdata[1].title}
                  </Typography>
                </Grid>
                <Image src={"/icons/logo-circle.svg"} width={50} height={50} />
                <Typography
                  variant={props.isMobile ? "body2" : "body1"}
                  sx={{ color: "text.main", whiteSpace: "pre-line" }}
                  mt={1}
                >
                  {processdata[1].content}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </ImageListItem>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          pt={props.isMobile ? 1 : 0}
          pb={props.isMobile ? 1 : 5}
        >
          {props.isMobile ? (
            <ArrowDownwardIcon sx={{ color: "#40464D" }} />
          ) : (
            <ArrowForwardIcon sx={{ color: "#40464D" }} />
          )}
        </Grid>

        <ImageListItem cols={props.isMobile ? 1 : 5} rows={1} aglign="center">
          <Grid container gap={2} alignItems="center">
            <Grid container item>
              <Grid item xs={12} mb={props.isMobile ? 1 : 0}>
                <Grid>
                  <Typography
                    variant={props.isMobile ? "h5" : "h4"}
                    sx={{ display: "inline-block", color: "text.main" }}
                    mb={1}
                  >
                    {processdata[2].title}
                  </Typography>
                </Grid>
                <Image src={"/icons/logo-circle.svg"} width={50} height={50} />
                <Typography
                  variant={props.isMobile ? "body2" : "body1"}
                  sx={{ color: "text.main", whiteSpace: "pre-line" }}
                  mt={1}
                >
                  {processdata[2].content}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </ImageListItem>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          pt={props.isMobile ? 1 : 0}
          pb={props.isMobile ? 1 : 5}
        >
          {props.isMobile ? (
            <ArrowDownwardIcon sx={{ color: "#40464D" }} />
          ) : (
            <ArrowForwardIcon sx={{ color: "#40464D" }} />
          )}
        </Grid>

        <ImageListItem cols={props.isMobile ? 1 : 5} rows={1} aglign="center">
          <Grid container gap={2} alignItems="center">
            <Grid container item>
              <Grid item xs={12} mb={props.isMobile ? 1 : 0}>
                <Grid>
                  <Typography
                    variant={props.isMobile ? "h5" : "h4"}
                    sx={{ display: "inline-block", color: "text.main" }}
                    mb={1}
                  >
                    {processdata[3].title}
                  </Typography>
                </Grid>
                <Image src={"/icons/logo-circle.svg"} width={50} height={50} />
                <Typography
                  variant={props.isMobile ? "body2" : "body1"}
                  sx={{ color: "text.main", whiteSpace: "pre-line" }}
                  mt={1}
                >
                  {processdata[3].content}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </ImageListItem>
      </ImageList>
    </Grid>
  );
};

export default ProcessSection;
