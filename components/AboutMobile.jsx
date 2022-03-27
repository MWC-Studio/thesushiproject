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
            pt={6}
            pb={5}
        >
            <Grid item xs={12} md={12}>
            <Typography  
                    
                    variant="h6"
                    color={'secondary.main'}
                    fontFamily={'Nunito'}
                    fontWeight={'fontWeightBold'}
                    textAlign={"center"}
                    >
                     Fresh, Various, and Authentic
                    </Typography>
                <Typography 
                    variant="h2"
                    color={'text'}
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
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="left"
                  width={596}
                > 
          <Typography variant="body1" textAlign="left" color="#333333" pt={2}>
          Your friendly neighborhood sushi place is here! Founded by June Kim - the Chef CEO, Sushi Rollin has served delicious rolls and premium sushi to fellow Texans since 2019. Our day starts by preparing items with freshly sourced ingredients. We strive to provide a warm atmosphere that encourages people to connect with their community while enjoying delicious rolls. Our team puts a lot of effort into providing excellent service that makes customers feel welcome and comfortable.
          <br/><br/>
          If you’re friendly, hardworking, and ambitious, please join our team at Sushi Rollin’! We are also now focusing on expanding our franchise opportunities for those looking for a low start-up cost business. Chef CEO June will be offering one-on-one training sessions and sharing special skills that he learned from his own experience as a head sushi chef at one of the best fine-dining sushi restaurants in town. Please reach out for more details if you are interested!
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="left"
          width={610} //596으로 하면 줄이 3줄이 됨 604부터 2줄
        > 
          <Typography width={343} variant="body1" fontStyle='italic' textAlign="center" color="#333333" pt={4}>
          “When people think about Sushi, It’s pricey and not an everyday kind of experience. But with Sushi Rollin, the experience gets more approachable but still unique."
          </Typography>
          <Typography variant="body1"  textAlign="center" color="#333333" py={2}>
          -The Chef CEO, June Kim-
          </Typography>
        </Grid>
        {/*버튼 센터로 맞추기 76줄*/}
        <Grid item lg={7} md={7} sm={9} xs={12} align="center">
          <MuiNextLink href="/franchise" underline="none" sx={{ mt:4}} >
            <Button> Franchise Opportunity</Button>
          </MuiNextLink>
        </Grid>
          <MuiNextLink href="/menu" alignItems="center" underline="none" sx={{ mt:1}}>
            <Button 
              style={{maxWidth: '230px', minWidth: '230px'}}
              variant="outlined" 
              sx={{ 
                backgroundColor: "white",
                borderColor: "primary.main",
                color: "#40464D",
                  '&:hover': {
                borderColor: "#F48A88",
                  }}}
            >
            View Our Menu
            </Button>
          </MuiNextLink>    
        </Grid>
      </Grid>
     );
}
 
export default AboutMobile;