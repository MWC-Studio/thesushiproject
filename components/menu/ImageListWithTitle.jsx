import { Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const ImageListWithTitle = (props) => {
  let imgSize = 380;
  let cols = 3;
  let gap = 33;
  let style = { whiteSpace: "normal" };
  let mt = 0;
  let p = 7;
  let sx = "";
  let variant = "body1";

  if (props.isMobile) {
    imgSize = 164;
    cols = 2;
    gap = 16;
    style = { whiteSpace: "pre-line" };
    mt = 1;
    p = 0;
    sx = { width: 170, height: 171.5 };
    variant = "subtitle2";
  }

  const rollName = [
    "Shrimp Tempura \nChef Special Roll",
    "Titanic \nChef Special Roll",
    "Flaming Hot \nChef Special Roll",
    "Crispy Rice Spicy Tuna",
    "Red Dragon Roll",
    "Rollin Burrito",
  ];

  return (
    <ImageList sx={{ p: { p }, overflow: "hidden" }} cols={cols} gap={gap}>
      {props.imgData.map((item, idx) => (
        <div key={idx} sx={sx}>
          <ImageListItem>
            <img
              src={`${item.img}?w=${imgSize}&h=${imgSize}&fit=crop&auto=format`}
              srcSet={`${item.img}?w=${imgSize}&h=${imgSize}&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="eager"
            />
            {props.isMobile ? "" : <ImageListItemBar position="below" />}
            {/* <ImageListItemBar position="below" /> */}
            <Typography
              component={"div"}
              color="text"
              variant={variant}
              align="center"
              fontWeight={"fontWeightBold"}
              style={style}
              mt={mt}
            >
              {props.isMobile ? <div>{rollName[idx]}</div> : item.name}
              {/* {item.name} */}
            </Typography>
          </ImageListItem>
        </div>
      ))}
    </ImageList>
  );
};

export default ImageListWithTitle;
