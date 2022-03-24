import { Container, Grid, Typography, Rating } from "@mui/material";
import React from 'react';
import { reviewItems } from "data/review";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { useTheme, useMediaQuery } from "@mui/material";

const CustomerReview = (props) => {

    const themes = useTheme();
    const isSmall = useMediaQuery(themes.breakpoints.down('sm'));

    
    return ( 
        <Grid container bgcolor="common.beige">
        <Container sx={{ mb: 10, mt: 10 }} >        
        <Grid container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12} sx={{ my: 0 }} bgcolor="">
                <Typography variant={'h2'} >
                    { props.reviewTitle } 
                </Typography>
            </Grid>

            <Grid container item xs={12}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 7 }}
            >

        { props.isMobile ? 
        <Swiper
            style={{ '--swiper-navigation-size': '20px', '--swiper-pagination-bullet-size': '8px', '--swiper-theme-color':'#F48A88' }}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{ clickable: true }}
            // navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
        
                {reviewItems.map((item, idx) => (
                <SwiperSlide key={idx}>
                <Grid container item xs={9} 
                    gap={ 2 }
                >
                    <Grid item xs={12} align='center'>
                        <Typography variant='h3' mb={2} color='secondary.main'>
                            { item.name }
                        </Typography>
                        <Rating name='review_rating' value={ item.rating } size='small' sx={{ color: 'black' }} readOnly />
                    </Grid>
                    <Grid item minHeight={ isSmall ? 230 : 150 }>
                        <Typography variant='body1' fontStyle='italic'>
                            "{ item.review }"
                        </Typography>
                    </Grid>
                </Grid>
                </SwiperSlide>
                ))}          
        </Swiper>
        :
        <Swiper
        style={{ '--swiper-navigation-size': '40px', '--swiper-pagination-bullet-size': '12px', '--swiper-theme-color':'#F48A88' }}
        slidesPerView={2}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{ clickable: true }}
        // navigation={true}
        modules={[Pagination, Navigation]}
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
        </Container>
        </Grid>
     );
}
 
export default CustomerReview;
