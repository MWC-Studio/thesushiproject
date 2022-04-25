import { Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const ImageListWithTitle = (props) => {
  return (
    <ImageList
      sx={{ px: props.isMobile ? 0 : props.isHome? 0: 7, 
        py: props.isMobile ? 0 : props.isHome? 7: 7, 
        overflow: "hidden" }}
      cols={props.isMobile ? 2 : 3}
      gap={props.isMobile ? 16 : 33}
    >
      {props.imgData.map((item, idx) => (
        <div
          key={idx}
          sx={{
            width: props.isMobile ? 170 : "",
            height: props.isMobile ? 171.5 : "",
          }}
        >
          <ImageListItem>
            <img
              src={`${item.img}?w=${props.isMobile ? 164 : 380}&h=${
                props.isMobile ? 164 : 380
              }&fit=crop&auto=format`}
              srcSet={`${item.img}?w=${props.isMobile ? 164 : 380}&h=${
                props.isMobile ? 164 : 380
              }&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="eager"
            />
            {props.isMobile ? "" : <ImageListItemBar position="below" />}
            {/* <ImageListItemBar position="below" /> */}
            <Typography
              component={"div"}
              color="text"
              variant={props.isMobile ? "subtitle2" : "subtitle1"}
              align="center"
              fontWeight={"fontWeightBold"}
              style={
                props.isMobile
                  ? { whiteSpace: "pre-line" }
                  : { whiteSpace: "normal" }
              }
              mt={props.isMobile ? 1 : 0}
            >
              {props.isMobile ? <div>{item.name_mobile}</div> : item.name}
            </Typography>
          </ImageListItem>
        </div>
      ))}
    </ImageList>
  );
};

export default ImageListWithTitle;
