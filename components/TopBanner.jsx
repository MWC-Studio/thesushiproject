import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

const TopBanner = (props) => {
    let btn;
    if (props.title == "Home") {
        btn = <Button variant="outlined">Franchise</Button>
    }

    return ( 
        <Grid
            component="section"
            container
            sx={{
                position: "relative",
                height: "30vw",
                width: "100vw",
              }}
        >
           <Image
                src={ props.isMobile ? '/mobile-topbanner.svg' : `/${props.title}-banner.png` }
                alt={`${props.title} banner`} 
                layout="fill" 
                objectFit="cover"
             /> 
            <Grid
                container
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    position: "absolute",
                    inset: 0,
                }}
            >
                <Typography
                    color={'primary.contrastText'}
                    // TODO: Update typography after PR
                    variant={ props.isMobile ? "h3" : "h2" }
                    align="center"
                    fontWeight={'fontWeightBold'}
                    fontFamily={'Nunito'}
                >
                    {props.description}{<br />}
                    {props.second}
                </Typography>
                {btn}
            </Grid>
        </Grid>
     );
}
 
export default TopBanner;