import React from "react";
import {useState} from "react"
import { Button } from "@mui/material";
import ContactDialog from "./ContactDialog";

const ContactUsButton = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <Button
        rel="noopener noreferrer"
        onClick={() => {
          setOpenPopup(true);
        }}
        //href={`mailto:sushirollin.us@gmail.com`} 버튼사이즈 늘어남
        sx={{
          minWidth: "109px",
          maxHeight: "43px",
          paddingLeft: "18.5px",
          paddingRight: "18.5px",
          paddingTop: "12px",
          paddingBottom: "12px",
          backgroundColor: "#F48A88",
          color: "#FFFFFF",
          typography: {
            fontSize: 14,
          },
        }}
      >
        Contact Us
      </Button>

      <ContactDialog openPopup={openPopup} setOpenPopup={setOpenPopup} />
    </>
  );
};

export default ContactUsButton;
