import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/dist/client/image";
import { ImageListItem } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const ProcessDetail = (props)=>{
    return (
      <>
      <ImageListItem cols={2} rows={1} aglign="center">
      <Grid container gap={2} alignItems="center">
        <Grid container item>
          <Grid item xs={12} mb={props.isMobile? 1: 3}>
            <Grid>
              <Typography
                variant={"h4"}
                sx={{ display: "inline-block", color: "text.main" }}
                mb={1}
              >
                {props.title}
              </Typography>
            </Grid>
            <Image src={"/icons/logo-circle.svg"} width={50} height={50} />
            <Typography
              variant={"body1"}
              sx={{ color: "text.main", whiteSpace: "pre-line" }}
              mt={1}
            >
              {props.content}
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
      {props.isMobile ? (
        <ArrowDownwardIcon sx={{ color: "#40464D" }} />
      ) : (
        <ArrowForwardIcon sx={{ color: "#40464D" }} />
      )}
    </Grid>
    </>
    )
}

export default ProcessDetail;