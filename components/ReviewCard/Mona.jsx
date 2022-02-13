import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from "@mui/material";

import { blueGrey } from "@mui/material/colors";

const MonaReview = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: blueGrey[500] }}
            aria-label="Mona profile letter"
          ></Avatar>
        }
        title="Mona"
      />
      <CardContent>
        <Rating value={5} readOnly />
        <Typography variant="body2" color="text.secondary">
          Sushi with gravy mushroom sauce, fried chicken with teriyaki sauce,
          watermelon with green tea ice cream. Cool! New fresh taste to me.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MonaReview;
