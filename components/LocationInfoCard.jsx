import { Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";

const LocationInfoCard = ({ imgSrc, imgAlt, title, address, phone, hours, lastcall, service }) => {
  return (
    <Card sx={{ maxWidth: 680 }}>
      <CardContent>
        <Grid container spacing={3}>
            <Grid item xs={2}>
                <Image src={imgSrc} alt={imgAlt} layout="responsive" width={31} height={31}  />
            </Grid>
            <Grid item xs={10} container flexDirection="column" justifyContent="center" alignItems="center">
                <Typography component="h3" variant="h5" gutterBottom>
                {title}
                </Typography>
            </Grid>
        </Grid>        
        Contact
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {phone}
        </Typography>
        Hours of Operation
        <Typography variant="body2" color="text.secondary">
          {hours}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {lastcall}
        </Typography>
        Service Offered
        <Typography variant="body2" color="text.secondary">
          {service}
        </Typography>
      </CardContent>
    </Card>
  );
};

LocationInfoCard.defaultProps = {
    imgSrc : '/logodot2.svg', 
    imgAlt : 'Logo Dot 2 circle', 
    title : "Sushi Rollin' Garland", 
    address : '6850 N Shiloh Rd, Garland, TX 75044', 
    phone : '(469) 798-7831', 
    hours : 'Opens Daily 11 a.m. - 9:30 p.m.', 
    lastcall : '(Last Call: 9:15 p.m.)', 
    service : 'Dine in, To-go, Delivery'
}

export default LocationInfoCard;
