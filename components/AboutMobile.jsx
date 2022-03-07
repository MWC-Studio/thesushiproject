import { Grid,Box,Container, Typography } from "@mui/material";
//import Image from "next/dist/client/image";
import * as React from 'react';
import MuiNextLink from '@components/MuiNextLink';
import Button from '@mui/material/Button';
import Image from 'next/image';

const AboutMobile = () => {
    return ( 
        <Grid container 
            justifyContent="center"
            alignItems="center"
            sx ={{
                width: "100vw",
                py: '10%'
            }}
        >
            <Grid item xs={12} md={12}>
            <Typography  
                    
                    variant="h6"
                    color={'secondary.main'}
                    fontFamily={'Nunito'}
                    fontWeight={'fontWeightBold'}
                    textAlign={"center"}
                    >
                     Quick & Approachable 
                </Typography>
                <Typography  
                    gutterbottom='true'
                    variant="h6"
                    color={'secondary.main'}
                    fontFamily={'Nunito'}
                    fontWeight={'fontWeightBold'}
                    textAlign={"center"}
                    >
                    while Keeping the Quality
                    </Typography>
               
            </Grid>

            <Grid item xs={12} md={12}>
                <Typography 
                    variant="h2"
                    fontFamily={'Nunito'}
                    fontWeight={'fontWeightBold'}
                    textAlign="center"
                >
                    That’s How We’re Rollin’
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
                    <Image src={"/aboutpage/about_img_mobile.svg"} width={343} height={266} />
                </Grid>
                <Grid item>
                    <Typography 
                        variant="body1" 
                        color={'text'}
                        fontFamily={'Nunito'}
                    >
                        Your friendly neighborhood sushi place is here! 
                        </Typography>
                        <Typography 
                        variant="body1" 
                        color={'text'}
                        fontFamily={'Nunito'}
                        width={343}
                    >

                        In Sushi Rollin’ we offer freshness, variety, 
                        and authentic experience. A true hole in the wall 
                        where you expect something ordinary but walk out with a content belly and heart. 
                        We’ve been rolling since 2019.
                    </Typography>
                    <Typography 
                        pt={8}
                        variant="body1" 
                        color={'text'}
                        fontFamily={'Nunito'}
                        textAlign = {'center'}
                        width={343}
                    >
                        “When people think about Sushi, 
                        It’s pricey and not an everyday kind of experience. 
                        But with Sushi Rollin, the experience gets more approachable but still unique."
                    </Typography>
                    <Typography 
                        variant="body1" 
                        color={'text'}
                        fontFamily={'Nunito'}
                        textAlign = {'center'}
                        py={3}
                    >
                        -The Chef CEO, June Kim-
                    </Typography>
                    {/*desktop*/}
                </Grid>
                <MuiNextLink href="/franchise" underline="none" sx={{ my:1 }} >
                    <Button> Franchise Opportunity</Button>
                </MuiNextLink>
                <MuiNextLink href="/menu" underline="none" sx={{ mb: 1 }}>
                    <Button 
                        style={{maxWidth: '240px', minWidth: '240px'}}
                        variant="outlined" 
                        sx={{ 
                            borderColor: "primary.main", 
                            color: "primary.main"
                            }}
                    >
                     View Our Menu
                    </Button>
                </MuiNextLink>
            </Grid>
        </Grid>
     );
}
 
export default AboutMobile;