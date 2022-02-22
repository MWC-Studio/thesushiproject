import { Button, Grid, Typography } from "@mui/material";
import OrderAppIcon1 from "../public/icons/doordash.svg";
import OrderAppIcon2 from "../public/icons/grubhub.svg";
import OrderAppIcon3 from "../public/icons/yelp.svg";

const OrderBanner = (props) => {
    return ( 
        <Grid
            component="section"
            container
            justifyContent="center"
            alignItems="center"
            sx={{
                height: "29vw",
                width: "100vw",
                backgroundColor: props.bgColor,
                pt: 5,
                pb: 5
                // mb: 15,
              }}
        >
            <Grid item xs={12}>
                <Typography
                    color="text"
                    variant="h1"
                    align="center"
                    fontWeight={'fontWeightBold'}
                    fontFamily={'Nunito'}
                >
                    Call for Pickup or Get it Delivered now!
                </Typography>
            </Grid>
            <Grid item xs={7}
                container
                justifyContent="center"
                alignItems="center"
            >
                <Grid item align="center" xs={3}><OrderAppIcon1 /></Grid>
                <Grid item align="center" xs={3}><OrderAppIcon2 /></Grid>
                <Grid item align="center" xs={1}><OrderAppIcon3 /></Grid>
            </Grid>
            <Grid item xs={12} align="center">
                <Button>View Menu in PDF</Button>
            </Grid>
        </Grid>
     );
}
 
export default OrderBanner;