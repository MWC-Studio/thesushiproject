import { Grid, Typography } from "@mui/material";
import Image from "next/dist/client/image";

const TextImgGrid = () => {
    return ( 
        <Grid container 
            justifyContent="center"
            alignItems="center" 
            py={8}
        >
            <Grid item xs={12}>
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
                lg={11} 
                gap={3} 
                mt={6} 
                justifyContent="center"
                alignItems="center"  
            >
                <Grid item lg={5}>
                    <Image src={"/WhyChoose_mission_img.svg"} width={592} height={263} />
                </Grid>
                <Grid item lg={5}>
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
                lg={11} 
                gap={3} 
                mt={6} 
                justifyContent="center"
                alignItems="center"  
            >
                <Grid item lg={5}>
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
                <Grid item lg={5}>
                    <Image src={"/WhyChoose_mission_img.svg"} width={592} height={263} />
                </Grid>
            </Grid>
            <Grid container item 
                lg={11} 
                gap={3} 
                mt={6} 
                justifyContent="center"
                alignItems="center"  
            >
                <Grid item lg={5}>
                    <Image src={"/WhyChoose_mission_img.svg"} width={592} height={263} />
                </Grid>
                <Grid item lg={5}>
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
        </Grid>
     );
}
 
export default TextImgGrid;