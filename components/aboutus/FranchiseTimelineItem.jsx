import * as React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Image from "next/dist/client/image";
import { Typography } from "@mui/material";

const FranchiseTimelineItem = (props) => {
  const position = props.position;

  return (
    <TimelineItem position={position}>
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
      </TimelineSeparator>
      <TimelineContent>
        <div
          style={{
            display: "flex",
          }}
        >
          <Image src={"/icons/logo-circle.svg"} width={18} height={18} />
          <Typography variant="h5" component="span">
            {props.data.date}
          </Typography>
        </div>
        <ul>
          <li>
            <Typography
              variant="body1"
              align={position == "left" ? "right" : "left"}
            >
              {props.data.text}
            </Typography>
          </li>
        </ul>
      </TimelineContent>
    </TimelineItem>
  );
};

export default FranchiseTimelineItem;
