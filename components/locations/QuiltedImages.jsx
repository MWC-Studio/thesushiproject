import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid } from "@mui/material";
import { items } from 'data/locationsQuiltedImgs';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImages() {
  return (
    <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={8}
    >
        <ImageList
            variant="quilted"
            cols={4}
            rowHeight={230}
            gap={30}
        >
        {items.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
                {...srcset(item.img, 230, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
            />
            </ImageListItem>
        ))}
        </ImageList>
    </Grid>
  );
}