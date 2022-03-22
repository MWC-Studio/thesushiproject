import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Image from 'next/dist/client/image';
import { items } from 'data/locationsCarouselMobile';

const CarouselMobileImage = () => {
    return (
           <Carousel
                autoPlay={false}
                navButtonsAlwaysVisible={true}
                sx={{ p:2, mt:2 }}
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
        <Image src={props.item.src} width={343} height={266} layout="responsive" alt={props.item.title} />
    )
}
 
export default CarouselMobileImage;