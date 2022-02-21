import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MuiNextLink from "@components/MuiNextLink";
import Button from "@mui/material/Button";

export default function Findus() {
    return (

<Box sx={{ py: 5}}>
    <Typography
         sx={{fontSize: 'h1.fontSize',textAlign:"center"}}
        >People Can Find Us Here
    </Typography>
    <Stack direction="row" justifyContent="center" spacing={4} sx={{ mt:5, mb: 5 }}>
        <MuiNextLink
    sx={{ textDecoration: "none", color: "common.white" }}
    href="https://www.doordash.com/"
    target="_blank"
    rel="noopener noreferrer"
         >
         <img src="/menu_page/doordash.png" />
        </MuiNextLink>
        <MuiNextLink
    sx={{ textDecoration: "none", color: "common.white" }}
    href="https://www.grubhub.com/"
    target="_blank"
    rel="noopener noreferrer"
        >
        <img src="/menu_page/grubhub.png" />
        </MuiNextLink>
         <MuiNextLink
    sx={{ textDecoration: "none", color: "common.white" }}
    href="https://www.yelp.com/"
    target="_blank"
    rel="noopener noreferrer"
         >
        <img src="/menu_page/yelp.png" />
        </MuiNextLink>
    </Stack>
    <Grid align="center">
        <Button variant="contained">
           View Store Menu
        </Button>
    </Grid>
</Box>
);
};
