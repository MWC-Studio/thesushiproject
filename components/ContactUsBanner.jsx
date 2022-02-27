import { Button, Grid, Typography } from "@mui/material";

const ContactUsBanner = (props) => {
    return (  
        <Grid
            component="section"
            container
            justifyContent="center"
            alignItems="center"
            sx={{
                height: props.isMobile ? "60vw" : "29vw",
                width: "100vw",
                backgroundColor: "common.white",
                py: '4%',
              }}
        >
            <Grid item lg={7} md={7} sm={9} xs={12}>
                <Typography
                    color="text"
                    variant={props.isMobile ? "h3" : "h2"}
                    align="center"
                    fontWeight={'fontWeightBold'}
                    fontFamily={'Nunito'}
                >
                    Sounds Like A Good Opportunity?
                </Typography>
            </Grid>
            <Grid item lg={7} md={7} sm={9} xs={12}>
                {props.isMobile ?
                    <Typography
                        color="text"
                        variant={props.isMobile ? "body2" : "body1"}
                        align="center"
                        fontFamily={'Nunito'}
                        mb={2}
                    >
                        Contact us via Email or call us.<br />You can also visit one of our locations.<br />Open to anyone who is passionate and<br />is ready to get this rollin’.<br />Join us today!
                    </Typography>
                    :
                    <Typography
                        color="text"
                        variant={props.isMobile ? "body2" : "body1"}
                        align="center"
                        fontFamily={'Nunito'}
                    >
                        Contact us via Email or call us. You can also visit one of our locations.<br />Open to anyone who is passionate and is ready to get this rollin’.<br />Join us today!
                    </Typography> }
            </Grid>
      <Grid item lg={7} md={7} sm={9} xs={12} align="center">
          {/* TODO: Update an email address */}
        <Button 
            rel="noopener noreferrer"
            href={`mailto:test@example.com`}
        >
            Contact Us
        </Button>
      </Grid>
    </Grid>
    );
}
 
export default ContactUsBanner;