import * as React from "react";
import Box from "@mui/material/Box";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Grid, Typography } from "@mui/material";

const categoryCSS = (categoryList) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        my: 3,
        "& > :not(style) + :not(style)": {
          ml: 3,
        },
      }}
    >
      {categoryList.map((item, i) => (
        <AnchorLink
          href={"#" + item}
          style={{ textDecoration: "none" }}
          key={i}
          //offset="50"
        >
          <Typography
            component={"div"}
            color="#333333"
            variant="h5"
            align="center"
            my={1}
            className="menucategory"
          >
            {item}
          </Typography>
        </AnchorLink>
      ))}
    </Box>
  );
};

function MobileMenuCatogory() {
  return (
    <Grid my={5}>
      {categoryCSS(categoryList1)}
      {categoryCSS(categoryList2)}
      {categoryCSS(categoryList3)}
    </Grid>
  );
}
const categoryList1 = ["Chef Special Rolls", "Special Rolls"];
const categoryList2 = ["Appetizers", "Fusion Bowls", "Sashimi & Nigiri"];
const categoryList3 = ["Fried Rice", "Regular Rolls", "Hand Rolls"];

export default MobileMenuCatogory;
