import { Grid, Typography, Divider } from "@mui/material";
import Image from "next/dist/client/image";

const LocationsContent = (props) => {
    return (
        <Grid container
            justifyContent="center"
            alignItems="center"
            px={4}
            gap={3}
            my={(props.isMobile) ? 4 : 8}
        >
            <Grid container item lg={5}
                gap={(props.isMobile) ? 3 : 5}
            >
                <Grid container item
                    gap={(props.isMobile) ? 1 : 3}
                >
                    <Grid item>
                        {props.isMobile ?
                            <Image src={"/icons/logo-circle.svg"} width={24} height={24} /> :
                            <Image src={"/icons/logo-circle.svg"} width={48} height={48} />
                        }
                    </Grid>
                    <Grid item alignSelf="center">
                        <Typography
                            variant={(props.isMobile) ? "h3" : "h2"}
                            sx={{
                                display: "inline-block",
                            }}
                        >
                            Sushi Rollin’ Garland
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs={12} mb={3}>
                        <Typography
                            variant={(props.isMobile) ? "h4" : "h3"}
                            mb={2}
                        >
                            Contact
                        </Typography>
                        <Typography
                            variant={(props.isMobile) ? "body2" : "body1"}
                        >
                            6850 N Shiloh Rd, Garland, TX 75044
                        </Typography>
                        <Typography
                            variant={(props.isMobile) ? "body2" : "body1"}
                        >
                            (469) 798-7831
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography
                            variant={(props.isMobile) ? "h4" : "h3"}
                            mb={2}
                        >
                            Hours of Operation
                        </Typography>
                        <Typography
                            variant={(props.isMobile) ? "body2" : "body1"}
                        >
                            Opens Daily 11 a.m. - 9:30 p.m.
                        </Typography>
                        <Typography
                            variant={(props.isMobile) ? "body2" : "body1"}
                        >
                            (Last Call: 9:15 p.m.)
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography
                            variant={(props.isMobile) ? "h4" : "h3"}
                            mb={2}
                        >
                            Service Offered
                        </Typography>
                        <Typography
                            variant={(props.isMobile) ? "body2" : "body1"}
                        >
                            Dine in, To-go, Delivery
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {props.isMobile ? <Divider sx={{ backgroundColor: 'secondary.main' }} style={{ width: '100%' }} /> : null}

            <Grid container item lg={5}
                gap={(props.isMobile) ? 3 : 5}
                pt={(props.isMobile) ? 2 : 0}
            >
                <Grid container item
                    gap={(props.isMobile) ? 1 : 3}
                >
                    <Grid item>
                        {props.isMobile ? 
                            <Image src={"/icons/logo-circle.svg"} width={24} height={24} /> : 
                            <Image src={"/icons/logo-circle.svg"} width={48} height={48} />
                        }
                    </Grid>
                    <Grid item alignSelf="center">
                        <Typography
                            variant={(props.isMobile) ? "h3" : "h2"}
                            sx={{
                                display: "inline-block",
                            }}
                        >
                            Sushi Rollin’ Lewisville
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs={12} mb={3}>
                        <Typography
                            variant={(props.isMobile) ? "h4" : "h3"}
                            mb={2}
                        >
                            Contact
                        </Typography>
                        <Typography
                            variant={(props.isMobile) ? "body2" : "body1"}
                        >
                            1288 W Main St #142, Lewisville, TX 75067
                        </Typography>
                        <Typography
                            variant={(props.isMobile) ? "body2" : "body1"}
                        >
                            (817) 320-3722
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography
                            variant={(props.isMobile) ? "h4" : "h3"}
                            mb={2}
                        >
                            Hours of Operation
                        </Typography>
                        <Typography
                            variant={(props.isMobile) ? "body2" : "body1"}
                        >
                            Opens Daily 11 a.m. - 9:00 p.m.
                        </Typography>
                        <Typography
                            variant={(props.isMobile) ? "body2" : "body1"}
                        >
                            (Last Call: 8:45 p.m.)
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography
                            variant={(props.isMobile) ? "h4" : "h3"}
                            mb={2}
                        >
                            Service Offered
                        </Typography>
                        <Typography
                            variant={(props.isMobile) ? "body2" : "body1"}
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