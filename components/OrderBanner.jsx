import { Button, Grid, Typography } from "@mui/material";
import Image from 'next/image';
import MuiNextLink from "@components/MuiNextLink";

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
                backgroundColor: props.bgColor,
                py: '4%',
              }}
        >
            <Grid item lg={7} md={7} sm={9} xs={12}>
                <Typography
                    color="text"
                    // TODO: should be h3 in mobile, but seems too small
                    variant={props.isMobile ? "h3" : "h2"}
                    align="center"
                    fontWeight={'fontWeightBold'}
                    fontFamily={'Nunito'}
                >
                    { props.isMobile ? props.mText : props.text }
                </Typography>
            </Grid>
            <Grid item lg={7} md={8} sm={10} xs={11}
                container
                justifyContent="center"
                alignItems="center"
            >
                 <Grid item align="center" lg={3} md={3} sm={4} xs={5}>
                  <MuiNextLink
                  sx={{ textDecoration: "none", color: "primary.contrastText" }}
                  href="https://www.doordash.com/store/sushi-rollin-garland-1775965/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <Image src={'/icons/doordash.svg'} width={154} height={18} />
                  </MuiNextLink>
                </Grid>
                <Grid item align="center" lg={2} md={3} sm={3} xs={3}>
                 <MuiNextLink
                 sx={{ textDecoration: "none", color: "primary.contrastText" }}
                 href="https://www.grubhub.com/restaurant/sushi-rollin-6850-n-shiloh-rd-garland/2769858"
                 target="_blank"
                 rel="noopener noreferrer"
                 >
                    <Image src={'/icons/grubhub.svg'} width={130} height={18} />
                 </MuiNextLink>
                </Grid>
                <Grid item align="center" lg={2} md={2} sm={3} xs={3}>
                  <MuiNextLink
                  sx={{ textDecoration: "none", color: "primary.contrastText" }}
                  href="https://www.yelp.com/biz/sushi-rollin-garland"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                     <Image src={'/icons/yelp.svg'} width={85} height={30} />
                  </MuiNextLink>
                 </Grid>
            </Grid>
      <Grid item lg={7} md={7} sm={9} xs={12} align="center">
          <MuiNextLink
            underline="none"
            href="/menu_page/menu.jpg"
          >
            <Button>
            View Store Menu
            </Button>
          </MuiNextLink>
  
      </Grid>
    </Grid>
  );
};

export default OrderBanner;
