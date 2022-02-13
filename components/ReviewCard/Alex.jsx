import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

const AlexReview = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Alex profile letter">
            AL
          </Avatar>
        }
        title="Alex"
      />
      <CardContent>
        <Rating value={5} readOnly />

        <Typography variant="body2" color="text.secondary">
          I never taste something like this before. Japanese mix Western
          cuisine. Some good, some weird taste to me. Overall the cooking tastes
          good.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AlexReview;
