import { Grid, Typography, Divider } from "@mui/material";
import Logo from "../../public/icons/logo-circle-big.svg";
import LogoS from "../../public/icons/logo-circle-small.svg";

const LocationsContent = (props) => {
    return ( 
        <Grid container 
            justifyContent="center"
            alignItems="center"
            px={4} 
            gap={3} 
            my={ (props.isMobile) ? 4 : 8 }
        >
            <Grid container item lg={5} 
                gap={ (props.isMobile) ? 3 : 5 }
            >
                <Grid container item 
                    gap={ (props.isMobile) ? 1 : 3 }
                >
                    <Grid item>
                        { props.isMobile ? <LogoS /> : <Logo  /> }
                    </Grid>
                    <Grid item alignSelf="center">
                        <Typography 
                            variant={ (props.isMobile) ? "h3" : "h2" } 
                            fontFamily="Nunito" 
                            fontWeight="fontWeightBold"
                            sx={{
                                display:"inline-block",
                            }}
                        >
                            Sushi Rollin’ Garland
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs={12} mb={3}>
                        <Typography
                            variant={ (props.isMobile) ? "h4" : "h3" } 
                            fontFamily="Nunito" 
                            fontWeight="fontWeightBold"
                            mb={2}
                        >
                            Contact
                        </Typography>
                        <Typography
                            variant={ (props.isMobile) ? "body2" : "body1" } 
                            fontFamily="Nunito"
                        >
                            6850 N Shiloh Rd, Garland, TX 75044
                        </Typography>
                        <Typography
                            variant={ (props.isMobile) ? "body2" : "body1" } 
                            fontFamily="Nunito"
                        >
                            (469) 798-7831
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography
                            variant={ (props.isMobile) ? "h4" : "h3" } 
                            fontFamily="Nunito" 
                            fontWeight="fontWeightBold"
                            mb={2}
                        >
                            Hours of Operation
                        </Typography>
                        <Typography
                            variant={ (props.isMobile) ? "body2" : "body1" } 
                            fontFamily="Nunito"
                        >
                            Opens Daily 11 a.m. - 9:30 p.m.
                        </Typography>
                        <Typography
                            variant={ (props.isMobile) ? "body2" : "body1" } 
                            fontFamily="Nunito"
                        >
                            (Last Call: 9:15 p.m.)
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography
                            variant={ (props.isMobile) ? "h4" : "h3" } 
                            fontFamily="Nunito" 
                            fontWeight="fontWeightBold"
                            mb={2}
                        >
                            Service Offered
                        </Typography>
                        <Typography
                            variant={ (props.isMobile) ? "body2" : "body1" } 
                            fontFamily="Nunito"
                        >
                            Dine in, To-go, Delivery
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            { props.isMobile ? <Divider style={{ width:'100%'}} /> : null }
            
            <Grid container item lg={5} 
                gap={ (props.isMobile) ? 3 : 5 }
                pt={ (props.isMobile) ? 2 : 0 }
            >
                <Grid container item 
                    gap={ (props.isMobile) ? 1 : 3 }
                >
                    <Grid item>
                    { props.isMobile ? <LogoS /> : <Logo  /> }
                    </Grid>
                    <Grid item alignSelf="center">
                        <Typography 
                            variant={ (props.isMobile) ? "h3" : "h2" } 
                            fontFamily="Nunito" 
                            fontWeight="fontWeightBold"
                            sx={{
                                display:"inline-block",
                            }}
                        >
                            Sushi Rollin’ Lewisville
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs={12} mb={3}>
                        <Typography
                            variant={ (props.isMobile) ? "h4" : "h3" } 
                            fontFamily="Nunito" 
                            fontWeight="fontWeightBold"
                            mb={2}
                        >
                            Contact
                        </Typography>
                        <Typography
                            variant={ (props.isMobile) ? "body2" : "body1" } 
                            fontFamily="Nunito"
                        >
                            1288 W Main St #142, Lewisville, TX 75067
                        </Typography>
                        <Typography
                            variant={ (props.isMobile) ? "body2" : "body1" } 
                            fontFamily="Nunito"
                        >
                            (817) 320-3722
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography
                            variant={ (props.isMobile) ? "h4" : "h3" } 
                            fontFamily="Nunito" 
                            fontWeight="fontWeightBold"
                            mb={2}
                        >
                            Hours of Operation
                        </Typography>
                        <Typography
                            variant={ (props.isMobile) ? "body2" : "body1" } 
                            fontFamily="Nunito"
                        >
                            Opens Daily 11 a.m. - 9:00 p.m.
                        </Typography>
                        <Typography
                            variant={ (props.isMobile) ? "body2" : "body1" } 
                            fontFamily="Nunito"
                        >
                            (Last Call: 8:45 p.m.)
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography
                            variant={ (props.isMobile) ? "h4" : "h3" } 
                            fontFamily="Nunito" 
                            fontWeight="fontWeightBold"
                            mb={2}
                        >
                            Service Offered
                        </Typography>
                        <Typography
                            variant={ (props.isMobile) ? "body2" : "body1" } 
                            fontFamily="Nunito"
                        >
                            Dine in, To-go, Delivery
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
     );
}
 
export default LocationsContent;