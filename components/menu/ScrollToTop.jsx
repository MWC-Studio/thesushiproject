import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import IconButton from "@mui/material/IconButton";

const ScrollToTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          sx={{
            color: "primary.contrastText",
            zIndex: 2,
            position: "fixed",
            bottom: "2vh",
            right: "2vh",
            color: "white",
            backgroundColor: "#F48A88",
            "&:hover, &.Mui-focusVisible": {
              transition: "0.3s",
              color: "black",
              backgroundColor: "#F48A88",
            },
          }}
          aria-label="to top"
          component="span"
        >
          <ArrowUpwardIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    </div>
  );
};
export default ScrollToTop;
