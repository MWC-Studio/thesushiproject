import { Card, CardContent, CardMedia, Typography } from "@mui/material";

// props 받아서 data 바꾸기. image src, alt, typography
const Banner = () => {
    return ( 
        <Card
            maxWidth="lg"
            position="relative"
        >
            <CardMedia
                component="img"
                height="380"
                image="/location-banner.png"
                alt="location banner"
            />
            <CardContent>
                <Typography
                    position="absolute"
                    top="30%"
                    color="white"
                    variant="h2"
                    textAlign="center"
                    width="100%"
                    sx={{
                        fontFamily: "Nunito"
                    }}
                >
                    Location
                </Typography>
            </CardContent>
        </Card>
     );
}
 
export default Banner;