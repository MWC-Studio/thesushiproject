import { Grid, Typography, Rating } from "@mui/material";
import React from 'react';
import { reviewItems } from "data/review";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


import { useTheme, useMediaQuery } from "@mui/material";

const CustomerReview = (props) => {

    const themes = useTheme();
    const isSmall = useMediaQuery(themes.breakpoints.down('sm'));

    
    return ( 
        <Grid container
            justifyContent="center"
            alignItems="center"
            py={props.isMobile ? 6 : 9}
            px={2}
            sx={{ backgroundColor: 'common.beige' }}
        >
            <Grid item xs={12} sx={{ my: 0 }} textAlign="center" bgcolor="">
                <Typography variant={ props.isMobile ? 'h3' : 'h2' } >
                    { props.reviewTitle } 
                </Typography>
            </Grid>

            <Grid container item xs={ props.isMobile ? 12 : 10 }
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                mt={props.isMobile ? 4 : 7}
            >

        { props.isMobile ? 
        <Swiper
            style={{ 
                '--swiper-pagination-bullet-size': '8px', 
                '--swiper-theme-color':'#F48A88' }}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
        >
        
            {reviewItems.map((item, idx) => (
            <SwiperSlide key={idx}>
            <Grid container item xs={9} 
                gap={ 2 }
            >
                <Grid item xs={12} align='center'>
                    <Typography variant='h5' mb={2} color='secondary.main'>
                        { item.name }
                    </Typography>
                    <Rating name='review_rating' value={ item.rating } size='small' sx={{ color: 'black' }} readOnly />
                </Grid>
                <Grid item minHeight={ isSmall ? 180 : 150 }>
                    <Typography variant='body2' fontStyle='italic'>
                        "{ item.review }"
                    </Typography>
                </Grid>
            </Grid>
            </SwiperSlide>
            ))}          
        </Swiper>
        :
        <Swiper
        style={{ 
            '--swiper-pagination-bullet-horizontal-gap': '15px', 
            '--swiper-pagination-bullet-size': '12px', 
            '--swiper-theme-color':'#F48A88' }}
        slidesPerView={2}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        >
    
            {reviewItems.map((item, idx) => (
            <SwiperSlide key={idx}>
            <Grid container item xs={10} 
                gap={ 3 }
            >
                <Grid item xs={12} align='center'>
                    <Typography variant='h3' mb={2} color='secondary.main'>
                        { item.name }
                    </Typography>
                    <Rating name='review_rating' value={ item.rating } size='medium' sx={{ color: 'black' }} readOnly />
                </Grid>
                <Grid item minHeight={150}>
                    <Typography variant='body1' fontStyle='italic'>
                        "{ item.review }"
                    </Typography>
                </Grid>
            </Grid>
            </SwiperSlide>
            ))}          
        </Swiper>
        }
      
            </Grid>
        </Grid>
     );
}
 
export default CustomerReview;
