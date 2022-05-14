import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import FranchiseTimelineItem from "./FranchiseTimelineItem";
import { timelineData } from "data/timeline";

const FranchiseTimeline = () => {
  return (
    <Timeline>
      {timelineData.map((item, idx) => (
        <FranchiseTimelineItem data={item} />
      ))}
    </Timeline>
  );
};

export default FranchiseTimeline;
