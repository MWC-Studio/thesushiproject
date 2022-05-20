import { Button }  from "@mui/material";

const ContactUsButton = () => {
  return (
    <Button 
      rel="noopener noreferrer" 
      href={`mailto:sushirollin.us@gmail.com`}
      sx={{
          height: '43px',
          paddingLeft: '18.5px',
          paddingRight: '18.5px',
          paddingTop: '12px',
          paddingBottom: '12px',
          backgroundColor: "#F48A88",
          color: "#FFFFFF",
          typography: {
            fontSize: 14,
          },
      }}>
      Contact Us
    </Button>
  );
};

export default ContactUsButton

