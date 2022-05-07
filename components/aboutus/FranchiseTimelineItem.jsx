import * as React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";

const FranchiseTimelineItem = (props) => {
  return (
      <TimelineItem position={props.position}>
        <TimelineSeparator>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{props.data.date}{props.data.text}</TimelineContent>
      </TimelineItem>
  );
};

export default FranchiseTimelineItem;