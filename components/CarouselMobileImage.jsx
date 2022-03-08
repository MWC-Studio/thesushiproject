import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Image from 'next/dist/client/image';
import { Paper } from '@mui/material';

const CarouselMobileImage = () => {
    var items = [
        {
            name: "Sushi Rollin Image 1",
            src: "/location-topleft.svg",
        },
        {
            name: "Sushi Rollin Image 2",
            src: "/location-bottomright.svg",
        },
        {
            name: "Sushi Rollin Image 3",
            src: "/carousel-location-topright-3.svg",
        },
        {
            name: "Sushi Rollin Image 4",
            src: "/carousel-location-topright-2.svg",
        },
    ]

    return (
           <Carousel
                duration={500}
                navButtonsAlwaysInVisible="true"
                sx={{ p: 2}}
            >
               {
                   items.map((item, index) => {
                       return <Item item={item} key={index} />
                   })
               }
           </Carousel>
    )
}

function Item(props) {
    return (
        <Paper elevation={0}>
            <Image src={props.item.src} width={300} height={300} layout="responsive" alt={props.item.name} />
        </Paper>
    )
}
 
export default CarouselMobileImage;