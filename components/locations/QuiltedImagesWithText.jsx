import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid, Typography } from "@mui/material";
import Image from "next/dist/client/image";
import { items } from 'data/locationsQuiltedImgs';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImagesWithText() {
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt={6}
      px={10}
    >
      <ImageList
        variant="quilted"
        cols={4}
        rowHeight={230}
        gap={30}
      >
        {items.map((item) => (
          <ImageListItem key={item.src} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.src, 230, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
        <ImageListItem cols={2} rows={2}>
          <Grid container gap={5}>
            <Grid container item gap={3}>
              <Grid item>
                <Image src={"/icons/logo-circle.svg"} width={48} height={48} />
              </Grid>
              <Grid item alignSelf="center">
                <Typography variant={"h2"} sx={{ display: "inline-block" }}>
                  Sushi Rollin’ Garland
                </Typography>
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs={12} mb={3}>
                <Typography variant={"h3"} mb={2}>
                  Contact
                </Typography>
                <Typography variant={"body1"}>
                  6850 N Shiloh Rd, Garland, TX 75044
                </Typography>
                <Typography variant={"body1"}>
                  (469) 798-7831
                </Typography>
              </Grid>
              <Grid item xs={12} mb={3}>
                <Typography variant={"h3"} mb={2}>
                  Hours of Operation
                </Typography>
                <Typography variant={"body1"}>
                  Opens Daily 11 a.m. - 9:30 p.m.
                </Typography>
                <Typography variant={"body1"}>
                  (Last Call: 9:15 p.m.)
                </Typography>
              </Grid>
              <Grid item xs={12} mb={3}>
                <Typography variant={"h3"} mb={2}>
                  Service Offered
                </Typography>
                <Typography variant={"body1"}>
                  Dine in, To-go, Delivery
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </ImageListItem>
        <ImageListItem cols={2} rows={2}>
          <Grid container gap={5}>
            <Grid container item gap={3}>
              <Grid item>
                <Image src={"/icons/logo-circle.svg"} width={48} height={48} />
              </Grid>
              <Grid item alignSelf="center">
                <Typography variant={"h2"} sx={{ display: "inline-block" }}>
                  Sushi Rollin’ Lewisville
                </Typography>
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs={12} mb={3}>
                <Typography variant={"h3"} mb={2}>
                  Contact
                </Typography>
                <Typography variant={"body1"}>
                  1288 W Main St #142, Lewisville, TX 75067
                </Typography>
                <Typography variant={"body1"}>
                  (817) 320-3722
                </Typography>
              </Grid>
              <Grid item xs={12} mb={3}>
                <Typography variant={"h3"} mb={2}>
                  Hours of Operation
                </Typography>
                <Typography variant={"body1"}>
                  Opens Daily 11 a.m. - 9:00 p.m.
                </Typography>
                <Typography variant={"body1"}>
                  (Last Call: 8:45 p.m.)
                </Typography>
              </Grid>
              <Grid item xs={12} mb={3}>
                <Typography variant={"h3"} mb={2}>
                  Service Offered
                </Typography>
                <Typography variant={"body1"}>
                  Dine in, To-go, Delivery
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </ImageListItem>
      </ImageList>
    </Grid>
  );
}