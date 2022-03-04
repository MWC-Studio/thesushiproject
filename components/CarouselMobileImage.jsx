import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Image from 'next/dist/client/image';
import { Paper } from '@mui/material';

const CarouselMobileImage = () => {
    var items = [
        {
            name: "Sushi Rollin Image 1",
            src: "/locations/locations-carousel-1.svg",
        },
        {
            name: "Sushi Rollin Image 2",
            src: "/locations/locations-carousel-2.svg",
        },
        {
            name: "Sushi Rollin Image 3",
            src: "/locations/locations-carousel-3.svg",
        },
        {
            name: "Sushi Rollin Image 4",
            src: "/locations/locations-carousel-4.svg",
        },
        {
            name: "Sushi Rollin Image 5",
            src: "/locations/locations-carousel-5.svg",
        },
        {
            name: "Sushi Rollin Image 6",
            src: "/locations/locations-carousel-6.svg",
        },
        {
            name: "Sushi Rollin Image 7",
            src: "/locations/locations-carousel-7.svg",
        },
    ]

    return (
           <Carousel
                duration={500}
                navButtonsAlwaysInVisible="true"
                sx={{ p: 2}}
                indicatorIconButtonProps={{
                    style: {
                        padding: '10px',
                        color: '#40464D'
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        color: '#F48A88'
                    }
                }}
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
        <Image src={props.item.src} width={343} height={266} layout="responsive" alt={props.item.name} />
    )
}
 
export default CarouselMobileImage;