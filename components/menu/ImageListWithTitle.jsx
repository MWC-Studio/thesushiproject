import { Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const ImageListWithTitle = (props) => {
  return (
      <ImageList sx={{ p: 7, overflow: "hidden" }} cols={3} gap={33}>
        {props.imgData.map((item) => (
          <div key={item.id}>
            <ImageListItem>
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
              >
                {item.name}
              </Typography>
            </ImageListItem>
          </div>
        ))}
      </ImageList>
  );
};

export default ImageListWithTitle;
