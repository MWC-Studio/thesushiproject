import { Button, Grid, Typography } from "@mui/material";
import OrderAppIcon1 from "../public/icons/doordash.svg";
import OrderAppIcon2 from "../public/icons/grubhub.svg";
import OrderAppIcon3 from "../public/icons/yelp.svg";
import MuiNextLink from "@components/MuiNextLink";

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
                //palette 업데이트하고 바꾸기.
                backgroundColor: props.bgColor,
                pt: 5,
                pb: 5
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
                    {props.text}
                </Typography>
            </Grid>
            <Grid item xs={7}
                container
                justifyContent="center"
                alignItems="center"
            >
                 <Grid item align="center" xs={3}>
                  <MuiNextLink
                  sx={{ textDecoration: "none", color: "common.white" }}
                  href="https://www.doordash.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <OrderAppIcon1 />
                  </MuiNextLink>
                </Grid>
                <Grid item align="center" xs={3}>
                 <MuiNextLink
                 sx={{ textDecoration: "none", color: "common.white" }}
                 href="https://www.grubhub.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 >
                    <OrderAppIcon2 />
                 </MuiNextLink>
                </Grid>
                <Grid item align="center" xs={1}>
                  <MuiNextLink
                  sx={{ textDecoration: "none", color: "common.white" }}
                  href="https://www.yelp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                     <OrderAppIcon3 />
                  </MuiNextLink>
                 </Grid>
            </Grid>
            <Grid item xs={12} align="center">
                <Button>View Store Menu</Button>
            </Grid>
        </Grid>
     );
}
 
export default OrderBanner;