import { Button, Grid, Typography } from "@mui/material";

const ContactUsBanner = (props) => {
    return (  
        <Grid
            component='section'
            container
            justifyContent='center'
            alignItems='center'
            sx={{
                height: '50vh',
                width: '100vw',
                backgroundColor: 'common.white',
                py: '2rem',
              }}
        >
            <Grid item xs={12}>
                <Typography
                    color='text'
                    variant={props.isMobile ? 'h3' : 'h2'}
                    align='center'
                >
                    Sounds Like A Good Opportunity?
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {props.isMobile ?
                    <Typography
                        color='text'
                        variant={props.isMobile ? 'body2' : 'body1'}
                        align='center'
                    >
                        Contact us via Email or call us.<br />You can also visit one of our locations.<br /><br />Open to anyone who is passionate and<br />is ready to get this rollin’.<br /><br />Join us today!
                    </Typography>
                    :
                    <Typography
                        color='text'
                        variant={props.isMobile ? 'body2' : 'body1'}
                        align='center'
                    >
                        Contact us via Email or call us. You can also visit one of our locations.<br />Open to anyone who is passionate and is ready to get this rollin’.<br />Join us today!
                    </Typography> }
            </Grid>
      <Grid item xs={12} align='center'>
        <Button 
            rel='noopener noreferrer'
            href={`mailto:sushirollin.us@gmail.com`}
        >
            Contact Us
        </Button>
      </Grid>
    </Grid>
    );
}
 
export default ContactUsBanner;