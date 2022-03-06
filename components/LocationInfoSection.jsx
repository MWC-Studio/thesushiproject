import { Container, Grid,Typography } from "@mui/material";
import Image from "next/image";
// import LocationInfo from "@components/LocationInfo"

// carousel 까지 최종 완성 후 sx에 있는 bgcolor 제거 할 것

const LocationInfoSection = (props) => {
  return (
    <Container sx={{ my: 15, bgcolor: "" }}>
        <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ bgcolor: "" }}
        >
            <Grid container padding={2} sx={{ minHeight: 420, bgcolor: "" }} xs={12} md={6} lg={6}>
                <Grid item sx={{bgcolor: "" , paddingY: 3 }}>
                    <Image src={'/icons/logodot2.svg'} width={31} height={31}  />
                    <Typography 
                    // color="text"
                        color="primary"
                        variant="h2"
                        align="left"
                        fontWeight={'fontWeightBold'}
                        fontFamily={'Nunito'}
                        ml={1}
                        sx={{ display: "inline" }}
                    >
                    Sushi Rollin' Garland
                    </Typography>
                </Grid> 
                <Grid container sx={{ paddingY: 1 }}>
                    <Grid item xs={12}>
                        <Typography 
                            color="primary"
                            variant="h3"
                            align="left"
                            fontFamily={'Nunito'}
                            fontWeight={'fontWeightBold'}
                        >
                        Contact
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 1}}>
                        6850 N Shiloh Rd, Garland, TX 75044
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                        (469) 798-7831
                        </Typography>
                    </Grid> 
                    <Grid item xs={12} sx={{ paddingY: 2}}>
                        <Typography 
                            color="primary"
                            variant="h3"
                            align="left"
                            fontWeight={'fontWeightBold'}
                            fontFamily={'Nunito'}
                        >
                        Hours of Operation
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 1}}>
                        Opens Daily 11 a.m. - 9:30 p.m.
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                        (Last Call: 9:15 p.m.)
                        </Typography>
                    </Grid> 
                    <Grid item xs={12} sx={{ paddingY: 2, mb: 10}}>
                        <Typography 
                            color="primary"
                            variant="h3"
                            align="left"
                            fontWeight={'fontWeightBold'}
                            fontFamily={'Nunito'}
                        >
                        Service Offered
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 1}}>
                        Dine in, To-go, Delivery
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* <Grid container padding={2} sx={{ minHeight: 400, bgcolor: props.isMobile ? "common.beige" : props.bgColor }} xs={12} md={6} lg={6}> */}
            <Grid container padding={2} sx={{ minHeight: 400 }} xs={12} md={6} lg={6}>
                <Grid item sx={{ height: 40, bgcolor: "" }} sx={{ paddingY: 3 }}>
            
                    <Image src={'/icons/logodot2.svg'} width={31} height={31}  />
                    <Typography 
                        color="primary"
                        variant="h2"
                        align="left"
                        fontWeight={'fontWeightBold'}
                        fontFamily={'Nunito'}
                        ml={1}
                        sx={{ display: "inline" }}
                    >
                    Sushi Rollin' Lewisville
                    </Typography>
                    
                </Grid> 
                <Grid container sx={{ paddingY: 1 }}>
                    <Grid item xs={12}>
                        <Typography 
                            color="primary"
                            variant="h3"
                            align="left"
                            fontWeight={'fontWeightBold'}
                            fontFamily={'Nunito'}
                        >
                        Contact
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 1}}>
                        1288 W Main St #142, Lewisville, TX 75067
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                        (817) 320-3722
                        </Typography>
                    </Grid> 
                    <Grid item xs={12} sx={{ paddingY: 2}}>
                        <Typography 
                            color="primary"
                            variant="h3"
                            align="left"
                            fontWeight={'fontWeightBold'}
                            fontFamily={'Nunito'}
                        >
                        Hours of Operation
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 1}}>
                        Opens Daily 11 a.m. - 9:00 p.m.
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                        (Last Call: 8:45 p.m.)
                        </Typography>
                    </Grid> 
                    <Grid item xs={12} sx={{ paddingY: 2, mb: 10}}>
                        <Typography 
                            color="primary"
                            variant="h3"
                            align="left"
                            fontWeight={'fontWeightBold'}
                            fontFamily={'Nunito'}
                        >
                        Service Offered
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 1}}>
                        Dine in, To-go, Delivery
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>


            {/* <Grid container item  spacing={0} justifyContent="center" xs={12} md={6}>
                <Grid container item  spacing={0} justifyContent="center" xs={12} md={6}>
                    <LocationInfo
                        imgSrc = '/icons/logodot2.svg'
                        imgAlt = 'Logo Dot 2 circle'
                        title = 'Sushi Rollin Lewisville'
                        address = '1288 W Main St #142, Lewisville, TX 75067'
                        phone = '(817) 320-3722'
                        hours = 'Opens Daily 11 a.m. - 9:00 p.m.'
                        lastcall = '(Last Call: 8:45 p.m.)'
                        service = 'Dine in, To-go, Delivery'
                    />
                </Grid>

            </Grid> */}

        </Grid>
    </Container>
  );
};


const itemData = [
    {
        title : "Sushi Rollin' Garland",
        address : '6850 N Shiloh Rd, Garland, TX 75044',
        phone : '(469) 798-7831' ,
        hours : 'Opens Daily 11 a.m. - 9:30 p.m.' ,
        lastcall : '(Last Call: 9:15 p.m.)',
        service : 'Dine in, To-go, Delivery',
    },
    {
        title : "Sushi Rollin' Lewisville",
        address : '1288 W Main St #142, Lewisville, TX 75067',
        phone : '(817) 320-3722',
        hours : 'Opens Daily 11 a.m. - 9:00 p.m.',
        lastcall : '(Last Call: 8:45 p.m.)',
        service : 'Dine in, To-go, Delivery',
    }
];

export default LocationInfoSection;
