import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 1038, height: 992 }}
      variant="quilted"
      cols={4}
      rowHeight={232}
      gap={32}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 232, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
    {
        img: '/location-topleft.png',
        title: 'location image 1',
        rows: 2,
        cols: 2
    },
    {
        img: '/location-topright-1.png',
        title: 'location image 2',
        cols: 2
    },
    {
        img: '/location-topright-2.png',
        title: 'location image 3',
    },
    {
        img: '/location-topright-3.png',
        title: 'location image 4',
    },
    {
        img: '/location-bottomleft-1.png',
        title: 'location image 5',
        cols: 2
    },
    {
        img: '/location-bottomright.png',
        title: 'location image 6',
        rows: 2,
        cols: 2
    },
    {
        img: '/location-bottomleft-2.png',
        title: 'location image 7',
    },
    {
        img: '/location-bottomleft-3.png',
        title: 'location image 8',
    },
];