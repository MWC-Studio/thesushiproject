import { Button, Grid, Typography } from "@mui/material";
import OrderAppIcon1 from "../public/icons/doordash.svg";
import OrderAppIcon2 from "../public/icons/grubhub.svg";
import OrderAppIcon3 from "../public/icons/yelp.svg";

const BottomBanner = () => {
    return ( 
        <Grid
            component="section"
            container
            justifyContent="center"
            alignItems="center"
            sx={{
                height: "29vw",
                width: "100vw",
                //palette 업데이트하고 바꾸기.
                backgroundColor: "#FBF8ED",
                pt: 5,
                pb: 5
                // mb: 15,
              }}
        >
            <Grid item xs={12}>
                <Typography
                    color="primary"
                    variant="h4"
                    align="center"
                    fontWeight={'fontWeightBold'}
                    fontFamily={'Nunito'}
                >
                    Call for Pickup or Get it Delivered now!
                </Typography>
            </Grid>
            <Grid item xs={12}
                container
                justifyContent="center"
                alignItems="center"
            >
                <Grid item align="center" xs={2}><OrderAppIcon1 /></Grid>
                <Grid item align="center" xs={2}><OrderAppIcon2 /></Grid>
                <Grid item align="center" xs={2}><OrderAppIcon3 /></Grid>
            </Grid>
            <Grid item xs={12} align="center">
                <Button 
                    // variant="outlined"
                    // color="white"
                    //color="primary" 이런 식으로 추가해야할듯?
                >View Menu in PDF</Button>
            </Grid>
        </Grid>
     );
}
 
export default BottomBanner;