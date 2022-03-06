import { Grid, Typography } from "@mui/material";
import Image from "next/dist/client/image";

const AboutMobile = () => {
    return ( 
        <Grid container 
            justifyContent="center"
            alignItems="center" 
            py={8}
        >
            <Grid item xs={12} md={12}>
                <Typography 
                    variant="h2"
                    color={'text'}
                    fontFamily={'Nunito'}
                    fontWeight={'fontWeightBold'}
                    textAlign="center"
                >
                    Why Choose Sushi Rollin’?
                </Typography>
            </Grid>
            <Grid container item 
                xs={12}
                md={8}
                gap={3} 
                mt={6}
                px={2}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <Image src={"/WhyChoose_mission_img.svg"} width={592} height={263} />
                </Grid>
                <Grid item>
                    <Typography 
                        variant="h3"
                        color={'text'}
                        fontFamily={'Nunito'}
                        fontWeight={'fontWeightBold'}
                        mb={3}
                    >
                        Mission
                    </Typography>
                    <Typography 
                        variant="body1" 
                        color={'text'}
                        fontFamily={'Nunito'}
                    >
                        Lörem ipsum fassade susam. Pros vuvuzela. Mivis speligen i nipresa finanssmälta lanat. Rösk tikoligt att ilig. Pseudotologi satt oaktat bessa. Lörem ipsum fassade susam. Pros vuvuzela. Mivis speligen i nipresa finanssmälta lanat. Rösk tikoligt att ilig. Pseudotologi satt oaktat bessa. Lörem ipsum fassade susam. Pros vuvuzela. Mivis speligen i nipresa finanssmälta lanat. Rösk tikoligt att ilig. Pseudotologi satt oaktat bessa. Lörem ipsum fassade susam. Pros vuvuzela. Mivis speligen i nipresa finanssmälta lanat. Rösk tikoligt att ilig.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item 
                xs={12}
                md={8}
                gap={3} 
                mt={6}
                px={2}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <Image src={"/WhyChoose_mission_img.svg"} width={592} height={263} />
                </Grid>
                <Grid item>
                    <Typography 
                        variant="h3"
                        color={'text'}
                        fontFamily={'Nunito'}
                        fontWeight={'fontWeightBold'}
                        mb={3}
                    >
                        Delivery
                    </Typography>
                    <Typography 
                        variant="body1"
                        color={'text'}
                        fontFamily={'Nunito'}
                    >
                        Lörem ipsum fassade susam. Pros vuvuzela. Mivis speligen i nipresa finanssmälta lanat. Rösk tikoligt att ilig. Pseudotologi satt oaktat bessa. Lörem ipsum fassade susam. Pros vuvuzela. Mivis speligen i nipresa finanssmälta lanat. Rösk tikoligt att ilig. Pseudotologi satt oaktat bessa. Lörem ipsum fassade susam. Pros vuvuzela. Mivis speligen i nipresa finanssmälta lanat. Rösk tikoligt att ilig. Pseudotologi satt oaktat bessa. Lörem ipsum fassade susam. Pros vuvuzela. Mivis speligen i nipresa finanssmälta lanat. Rösk tikoligt att ilig.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item 
                xs={12}
                md={8}
                gap={3} 
                mt={6}
                px={2}
                justifyContent="center"
                alignItems="center"  
            >
                <Grid item>
                    <Image src={"/WhyChoose_mission_img.svg"} width={592} height={263} />
                </Grid>
                <Grid item>
                    <Typography 
                        variant="h3"
                        color={'text'}
                        fontFamily={'Nunito'}
                        fontWeight={'fontWeightBold'}
                        mb={3}
                    >
                        Drive -Through Sushi Experience
                    </Typography>
                    <Typography 
                        variant="body1"
                        color={'text'}
                        fontFamily={'Nunito'}
                    >
                        Lörem ipsum fassade susam. Pros vuvuzela. Mivis speligen i nipresa finanssmälta lanat. Rösk tikoligt att ilig. Pseudotologi satt oaktat bessa. Lörem ipsum fassade susam. Pros vuvuzela. Mivis speligen i nipresa finanssmälta lanat. Rösk tikoligt att ilig. Pseudotologi satt oaktat bessa. Lörem ipsum fassade susam. Pros vuvuzela. Mivis speligen i nipresa finanssmälta lanat. Rösk tikoligt att ilig. Pseudotologi satt oaktat bessa. Lörem ipsum fassade susam. Pros vuvuzela. Mivis speligen i nipresa finanssmälta lanat. Rösk tikoligt att ilig.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
     );
}
 
export default AboutMobile;