import * as React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Image from "next/dist/client/image";
import { Typography } from "@mui/material";

const FranchiseTimelineItem = (props) => {
  const { idx,  date, text, position } = props.data;
  const noPaddingTop = idx === 0 || idx === 1 || idx === 2;

  const dotDiv = (
    <div>
      <span className="dot"></span>
      <Typography
        variant="body1"
        align={position == "left" ? "right" : "left"}
        sx={{
          paddingRight: position === "left" ? "60px" : "0",
          paddingLeft: position === "right" ? "60px" : "0"
        }}
      >
        {text}
      </Typography>
    </div>
  )

  return (
    <TimelineItem
      position={position}
      sx={{
        minHeight: {
          xs: position === "right" ? "initial" : "70px", md: position === "right" ? "initial" : "50px"
        },
        "&::before": {
          padding: noPaddingTop ? "0" : "6px 0",
          minHeight: noPaddingTop ? "0" : {xs: position === "right" ? "initial" : "70px", md: position === "right" ? "initial" : "50px"}
        }
      }}
    >
      <TimelineSeparator>
        <TimelineConnector
          sx={{
            bgcolor: "secondary.main",
            width: "3px"
          }}
        />
      </TimelineSeparator>

      <TimelineContent
        data-idx={idx}
        sx={{
          padding: "0",
          maxWidth: {
            xs: position === "left" ? "167px" : "186px", md: "initial"
          },
          paddingTop: noPaddingTop ? "0" : idx === 3 ? "0" : "48px"
        }}
        >
      {position === "left" && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Typography
              variant="h5"
              component="span"
              sx={{
                paddingRight: "8px",
              }}
            >
              {date}
            </Typography>
            <Image src={"/icons/logo-circle.svg"} width={18} height={18} />
            <div
              style={{
                width: "60px",
                height: "1px",
                backgroundColor: "#333333",
              }}
            ></div>
          </div>
      )}
      {position === "right" && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "1px",
                backgroundColor: "#333333",
              }}
            ></div>
            <Image src={"/icons/logo-circle.svg"} width={18} height={18} />
            <Typography
              variant="h5"
              component="span"
              sx={{
                paddingLeft: "8px",
              }}
            >
              {date}
            </Typography>
          </div>
      )}
      {dotDiv}
      </TimelineContent>
    </TimelineItem>
  );
};

export default FranchiseTimelineItem;
