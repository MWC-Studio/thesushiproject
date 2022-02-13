import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import MuiNextLink from "./MuiNextLink";

const NavigationCard = ({ imgSrc, imgAlt, title, desc, pagePath, ctaText }) => {
  return (
    <Card sx={{ maxWidth: 480 }}>
      <CardMedia sx={{ height: 270 }} image={imgSrc} title={imgAlt} />
      <CardContent>
        <Typography component="h3" variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <MuiNextLink href={pagePath} underline="none">
          <Button variant="contained" size="large">
            {ctaText}
          </Button>
        </MuiNextLink>
      </CardActions>
    </Card>
  );
};

export default NavigationCard;
