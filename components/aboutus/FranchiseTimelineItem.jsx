import * as React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Image from "next/dist/client/image";
import { Typography } from "@mui/material";

const FranchiseTimelineItem = (props) => {
  const { date, text, position } = props.data;

  return (
    <TimelineItem
      position={position}
      sx={{
        "&::before": {
          padding: "6px 0",
        },
      }}
    >
      <TimelineSeparator>
        <TimelineConnector
          sx={{
            bgcolor: "secondary.main",
          }}
        />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          padding: "6px 0",
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
                width: "118px",
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
                width: "118px",
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
        <div>
          <span className="dot"></span>
          <Typography
            variant="body1"
            align={position == "left" ? "right" : "left"}
            sx={{
              paddingRight: "5px",
              paddingLeft: "5px",
              "&::before": {
                content: '"\\2022"',
                paddingRight: "8px",
              },
            }}
          >
            {text}
          </Typography>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
};

export default FranchiseTimelineItem;
