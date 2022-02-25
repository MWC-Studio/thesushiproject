import { Button, Grid, Typography } from "@mui/material";
import OrderAppIcon1 from "../public/icons/doordash.svg";
import OrderAppIcon2 from "../public/icons/grubhub.svg";
import OrderAppIcon3 from "../public/icons/yelp.svg";
import MuiNextLink from "@components/MuiNextLink";
import { grey } from "@mui/material/colors";

const OrderBanner = (props) => {
    return (
        <Grid
            component="section"
            container
            justifyContent="center"
            alignItems="center"
            sx={{
                height: props.isMobile ? "50vw" : "29vw",
                width: "100vw",
                backgroundColor: props.isMobile ? "common.white" : props.bgColor,
                py: '4%',
              }}
        >
            <Grid item lg={7} md={7} sm={9} xs={12}>
                <Typography
                    color="text"
                    // TODO: should be h3 in mobile, but seems too small
                    variant={props.isMobile ? "h2" : "h2"}
                    align="center"
                    fontWeight={'fontWeightBold'}
                    fontFamily={'Nunito'}
                >
                    { props.isMobile ? props.mText : props.text }
                </Typography>
            </Grid>
            <Grid item lg={7} md={7} sm={9} xs={11}
                container
                justifyContent="center"
                alignItems="center"
            >
                 <Grid item align="center" lg={3} md={4} sm={4} xs={5}>
                  <MuiNextLink
                  sx={{ textDecoration: "none", color: "primary.contrastText" }}
                  href="https://www.doordash.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <OrderAppIcon1 />
                  </MuiNextLink>
                </Grid>
                <Grid item align="center" lg={3} md={4} sm={4} xs={4}>
                 <MuiNextLink
                 sx={{ textDecoration: "none", color: "primary.contrastText" }}
                 href="https://www.grubhub.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 >
                    <OrderAppIcon2 />
                 </MuiNextLink>
                </Grid>
                <Grid item align="center" lg={1} md={2} sm={2} xs={2}>
                  <MuiNextLink
                  sx={{ textDecoration: "none", color: "primary.contrastText" }}
                  href="https://www.yelp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                     <OrderAppIcon3 />
                  </MuiNextLink>
                 </Grid>
            </Grid>
      <Grid item lg={7} md={7} sm={9} xs={12} align="center">
        <Button>
          <MuiNextLink
            sx={{ textDecoration: "none", color: "common.white" }}
            href="/menu_page/menu.pdf"
          >
            View Store Menu
          </MuiNextLink>
        </Button>
      </Grid>
    </Grid>
  );
};

export default OrderBanner;