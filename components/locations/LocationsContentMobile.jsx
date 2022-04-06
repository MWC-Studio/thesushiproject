import { Grid, Typography, Divider } from "@mui/material";
import Image from "next/dist/client/image";

const LocationsContentMobile = () => {
    return (
        <Grid container
            justifyContent='center'
            alignItems='center'
            px={4}
            gap={3}
            my={4}
        >
            <Grid container item lg={5} gap={3}>
                <Grid container item gap={1}>
                    <Grid item>
                        <Image src={"/icons/logo-circle.svg"} width={24} height={24} />
                    </Grid>
                    <Grid item alignSelf='center'>
                        <Typography variant='h3' sx={{ display: 'inline-block' }}>
                            Sushi Rollin’ Garland
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs={12} mb={3}>
                        <Typography variant='h4' mb={2}>
                            Contact
                        </Typography>
                        <Typography variant='body2'>
                            6850 N Shiloh Rd, Garland, TX 75044
                        </Typography>
                        <Typography variant='body2'>
                            (469) 798-7831
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography variant='h4' mb={2}>
                            Hours of Operation
                        </Typography>
                        <Typography variant='body2'>
                            Opens Daily 11 a.m. - 9:30 p.m.
                        </Typography>
                        <Typography variant='body2'>
                            (Last Call: 9:15 p.m.)
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography variant='h4' mb={2}>
                            Service Offered
                        </Typography>
                        <Typography variant='body2'>
                            Dine in, To-go, Delivery
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ backgroundColor: 'secondary.main' }} style={{ width: '100%' }} />
            <Grid container item lg={5} gap={3} pt={2}>
                <Grid container item gap={1}>
                    <Grid item>
                        <Image src={"/icons/logo-circle.svg"} width={24} height={24} />
                    </Grid>
                    <Grid item alignSelf='center'>
                        <Typography variant='h3' sx={{ display: 'inline-block' }}>
                            Sushi Rollin’ Lewisville
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs={12} mb={3}>
                        <Typography variant='button' mb={2}>
                            Contact
                        </Typography>
                        <Typography variant='body2'>
                            1288 W Main St #142, Lewisville, TX 75067
                        </Typography>
                        <Typography variant='body2'>
                            (817) 320-3722
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography variant='h4' mb={2}>
                            Hours of Operation
                        </Typography>
                        <Typography variant='body2' >
                            Opens Daily 11 a.m. - 9:00 p.m.
                        </Typography>
                        <Typography variant='body2' >
                            (Last Call: 8:45 p.m.)
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <Typography variant='h4' mb={2} >
                            Service Offered
                        </Typography>
                        <Typography variant='body2' >
                            Dine in, To-go, Delivery
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default LocationsContentMobile;