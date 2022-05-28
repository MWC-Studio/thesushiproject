import React from "react";
import { Typography, Grid } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ProcessDetail from "./ProcessDetail"
import processdata from "../../data/menu"

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
          mb={props.isMobile ? 3 : 6}
        >
          Our Process
        </Typography>
      </Grid>

      <ImageList cols={props.isMobile ? 1 : 11} align="center">
        {processdata.map((item, idx) => (
            <div key={idx}>
                <ProcessDetail title={item.title} content={item.content} isMobile={props.isMobile} />
            </div>
        ))}
      </ImageList>
    </Grid>
  );
};

export default ProcessSection;
