import React from "react";
import { Typography, Grid } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import { ImageListItem } from "@mui/material";
import Image from "next/dist/client/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const processdata = [
  {
    id: 1,
    title: "Material",
    content: "Certified provider brings fresh \nfish 3 times a week",
  },
  {
    id: 2,
    title: "Meal Prep",
    content: "2 Chefs can handle avg xxx \ndishes during peak time",
  },
  {
    id: 3,
    title: "Order",
    content: "It takes about 5 mins to \nmake a sushi roll",
  },
  {
    id: 4,
    title: "Serve",
    content: "Delivery, Dine-in, To-go \nWe serve all kinds of orders!",
  },
];

const ProcessSection = (props) => {
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt={10}
      px={12}
    >
      <Grid item alignSelf="center">
        <Typography
          variant={"h3"}
          sx={{ display: "inline-block", color: "secondary.main" }}
        >
          From the Kitchen to the Table
        </Typography>
      </Grid>
      <Grid item alignSelf="center">
        <Typography
          variant={"h2"}
          sx={{ display: "inline-block", color: "text.main" }}
          mb={6}
        >
          Our Process
        </Typography>
      </Grid>

      <ImageList cols={11} align="center">
        <ImageListItem cols={2} rows={1} aglign="center">
          <Grid container gap={2} alignItems="center">
            <Grid container item>
              <Grid item xs={12} mb={3}>
                <Grid>
                  <Typography
                    variant={"h4"}
                    sx={{ display: "inline-block", color: "text.main" }}
                    mb={1}
                  >
                    {processdata[0].title}
                  </Typography>
                </Grid>
                <Image src={"/icons/logo-circle.svg"} width={50} height={50} />
                <Typography
                  variant={"body1"}
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
        >
          <ArrowForwardIcon sx={{ color: "#40464D" }} />
        </Grid>

        <ImageListItem cols={2} rows={1} aglign="center">
          <Grid container gap={2} alignItems="center">
            <Grid container item>
              <Grid item xs={12} mb={3}>
                <Grid>
                  <Typography
                    variant={"h4"}
                    sx={{ display: "inline-block", color: "text.main" }}
                    mb={1}
                  >
                    {processdata[1].title}
                  </Typography>
                </Grid>
                <Image src={"/icons/logo-circle.svg"} width={50} height={50} />
                <Typography
                  variant={"body1"}
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
        >
          <ArrowForwardIcon sx={{ color: "#40464D" }} />
        </Grid>

        <ImageListItem cols={2} rows={1} aglign="center">
          <Grid container gap={2} alignItems="center">
            <Grid container item>
              <Grid item xs={12} mb={3}>
                <Grid>
                  <Typography
                    variant={"h4"}
                    sx={{ display: "inline-block", color: "text.main" }}
                    mb={1}
                  >
                    {processdata[2].title}
                  </Typography>
                </Grid>
                <Image src={"/icons/logo-circle.svg"} width={50} height={50} />
                <Typography
                  variant={"body1"}
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
        >
          <ArrowForwardIcon sx={{ color: "#40464D" }} />
        </Grid>

        <ImageListItem cols={2} rows={1} aglign="center">
          <Grid container gap={2} alignItems="center">
            <Grid container item>
              <Grid item xs={12} mb={3}>
                <Grid>
                  <Typography
                    variant={"h4"}
                    sx={{ display: "inline-block", color: "text.main" }}
                    mb={1}
                  >
                    {processdata[3].title}
                  </Typography>
                </Grid>
                <Image src={"/icons/logo-circle.svg"} width={50} height={50} />
                <Typography
                  variant={"body1"}
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
