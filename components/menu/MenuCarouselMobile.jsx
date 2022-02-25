import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Image from 'next/dist/client/image';
import { Paper } from '@mui/material'
import { section1 } from "data/menu";

function CarouselSpecialRoll(props)
{
    return (
        <Carousel
            duration={500}
            navButtonsAlwaysInVisible="true"
            sx={{ p: 2}}
        >
            {
                section1.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <Image src={props.item.img} width={343} height={150} layout="responsive" alt={props.item.name} />
        </Paper>
    )
}

export default CarouselSpecialRoll