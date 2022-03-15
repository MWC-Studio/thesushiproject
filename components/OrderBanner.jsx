import { Button, Grid, Typography } from "@mui/material";
import Image from 'next/image';
import MuiNextLink from "@components/MuiNextLink";
import { useTheme, useMediaQuery } from "@mui/material";

const OrderBanner = (props) => {
  const themes = useTheme();
  const isTablet = useMediaQuery(themes.breakpoints.between('sm', 'md'));

    return (
        <Grid
            component="section"
            container
            justifyContent="center"
            alignItems="center"
            sx={{
                height: props.isMobile ? isTablet ? "60vw" : "100vw" : "29vw",
                width: "100vw",
                backgroundColor: props.bgColor,
                py: '4%',
              }}
        >
            <Grid item lg={7} md={7} sm={9} xs={12}>
                <Typography
                    color="text"
                    // TODO: should be h3 in mobile, but seems too small
                    variant={ props.isMobile ? "h3" : "h2" }
                    align="center"
                    fontWeight={'fontWeightBold'}
                    fontFamily={'Nunito'}
                >
                    { props.text }
                </Typography>
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}
                container
                gap={ props.isMobile ? 5 : 0 }
                justifyContent="center"
                alignItems="center"
            >
                 <Grid item align="center" lg={3} md={3} sm={12} xs={12}>
                  <MuiNextLink
                  sx={{ textDecoration: "none", color: "primary.contrastText" }}
                  href="https://www.doordash.com/store/sushi-rollin-garland-1775965/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <Image src={'/icons/doordash.svg'} width={154} height={18} />
                  </MuiNextLink>
                </Grid>
                <Grid item align="center" lg={3} md={3} sm={12} xs={12}>
                  <MuiNextLink
                  sx={{ textDecoration: "none", color: "primary.contrastText" }}
                  href="https://www.ubereats.com/store/sushi-rollin/6P3FSDejTAuapBvlNZGQaQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlN1c2hpJTIwUm9sbGluJUUyJTgwJTk5JTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyQ2hJSnRlSFdmeDBjVElZUkpvOWM3djhrczJJJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMmdvb2dsZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTMyLjk3NjUzJTJDJTIybG9uZ2l0dWRlJTIyJTNBLTk2LjY2NDIyMzMlN0Q%3D&ps=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <Image src={'/icons/ubereats.svg'} width={99} height={16} />
                  </MuiNextLink>
                </Grid>
                <Grid item align="center" lg={2} md={3} sm={12} xs={12}>
                 <MuiNextLink
                 sx={{ textDecoration: "none", color: "primary.contrastText" }}
                 href="https://www.grubhub.com/restaurant/sushi-rollin-6850-n-shiloh-rd-garland/2769858"
                 target="_blank"
                 rel="noopener noreferrer"
                 >
                    <Image src={'/icons/grubhub.svg'} width={95} height={20} />
                 </MuiNextLink>
                </Grid>
                <Grid item align="center" lg={2} md={2} sm={12} xs={12}>
                  <MuiNextLink
                  sx={{ textDecoration: "none", color: "primary.contrastText" }}
                  href="https://www.yelp.com/biz/sushi-rollin-garland"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                     <Image src={'/icons/yelp.svg'} width={67} height={24} />
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
