import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Banner = (props) => {
    return ( 
        <Card
            maxWidth="lg"
            position="relative"
        >
            <CardMedia
                component="img"
                height="380"
                image={`/${props.title}-banner.png`}
                alt={`${props.title} banner`}
            />
            <CardContent>
                <Typography
                    position="absolute"
                    top="30%"
                    color="white"
                    variant="h2"
                    textAlign="center"
                    width="100%"
                    fontWeight={'fontWeightBold'}
                    fontFamily={'Nunito'}
                >
                    {props.title}
                </Typography>
            </CardContent>
        </Card>
     );
}
 
export default Banner;