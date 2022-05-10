import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import FranchiseTimelineItem from "./FranchiseTimelineItem";
import { timelineData } from "data/timeline";

const position = ["left", "right", "left", "right", "right", "right"];

const FranchiseTimeline = () => {
  return (
    <Timeline>
      {timelineData.map((item, idx) => (
        <FranchiseTimelineItem position={position[idx]} data={item} />
      ))}
    </Timeline>
  );
};

export default FranchiseTimeline;
