import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";

const ShanenReview = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: orange[500] }}
            aria-label="shanen profile letter"
          >
            SH
          </Avatar>
        }
        title="Shanen"
      />
      <CardContent>
        <Rating value={4.5} precision={0.5} readOnly />
        <Typography variant="body2" color="text.secondary">
          Wasabi with steak, huh? What a fusion! Taste a bit weird but
          acceptable. I reserve my last star until my next visit.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ShanenReview;
