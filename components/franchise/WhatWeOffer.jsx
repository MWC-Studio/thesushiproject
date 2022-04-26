import { Grid, Typography } from "@mui/material";
import Image from "next/dist/client/image";

const WhatWeOffer = (props) => {
    return (
        <Grid container
            justifyContent='center'
            alignItems='center'
            py={6}
            px={2}
            sx={{ backgroundColor: 'common.beige' }}
        >
            <Grid item lg={12}>
                <Typography
                    variant={props.isMobile ? 'h3' : 'h2'}
                    color='text'
                    textAlign='center'
                    mb={4}
                >
                    What We Offer
                </Typography>
                <Typography
                    variant={props.isMobile ? 'body2' : 'body1'}
                    color='text'
                    textAlign='center'
                >
                    From One-on-One sushi training to business advice,
                </Typography>
                <Typography
                    variant={props.isMobile ? 'body2' : 'body1'}
                    color='text'
                    textAlign='center'
                >
                    Our hand-held approach will take you to success!
                </Typography>
            </Grid>
            <Grid item container lg={12}
                justifyContent='center'
                alignItems='center'
                mt={4}
                gap={6}
            >
                <Grid item>
                    <Image src={"/franchise/whatweoffer-1.svg"} width={325} height={325} />
                    <Typography
                        variant='subtitle1'
                        color='text'
                        textAlign='center'
                    >
                        Sushi Chef Training
                    </Typography>
                </Grid>
                <Grid item>
                    <Image src={"/franchise/whatweoffer-2.svg"} width={325} height={325} />
                    <Typography
                        variant='subtitle1'
                        color='text'
                        textAlign='center'
                    >
                        Business Operation 101
                    </Typography>
                </Grid>
                <Grid item>
                    <Image src={"/franchise/whatweoffer-3.svg"} width={325} height={325} />
                    <Typography
                        variant='subtitle1'
                        color='text'
                        textAlign='center'
                    >
                        Before & After Support
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default WhatWeOffer;