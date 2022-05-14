import { Grid, Typography } from "@mui/material";
import OrderTypeChart from "./OrderTypeChart";

const INaNugget = (isMobile) => {
    return (
        <Grid container bgcolor=""
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            px={ isMobile ? 0 : 4}
            sx={{ mt: 8, mb: 8 }}
        >
            <Grid item xs={12} sx={{ mb: isMobile ? 5 : 6 }} bgcolor="">
                <Typography 
                    variant={ isMobile ? 'h3' : 'h2' }
                    color='text'
                >
                    Sushi Rollin' in a Nugget
                </Typography>
            </Grid>
            
            <Grid container item sm={12} md={8} lg={8} gap={ isMobile ? 2 : 3 } justifyContent="center" alignItems='center' bgcolor="">
                <Grid container item xs={isMobile ? 9 : 5 } sm={5} width={280} height={280} justifyContent="center" alignItems='center' 
                    sx={{ bgcolor: "common.beige" }}
                >
                    <Grid item bgcolor="" > 
                    <Typography 
                        variant='h3'
                        color='secondary.main'
                        align='center'
                        mb={3}
                    >
                        Initial Investment
                    </Typography>
                    <Typography variant='h1' color='text' align='center' mb={3}>
                        346K
                    </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={isMobile ? 9 : 5 } sm={5} width={280} height={280} justifyContent="center" alignItems='center' 
                    sx={{ bgcolor: "common.beige" }}
                >
                    <Grid item bgcolor="" > 
                    <Typography 
                        variant='h3'
                        color='secondary.main'
                        align='center'
                        mb={3}
                    >
                        Avg. Growth Rate
                    </Typography>
                    <Typography variant='h1' color='text' align='center'>
                        xx%
                    </Typography>
                    <Typography fontSize={24} color='text' align='center'>
                        (2020 vs 2021)
                    </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={isMobile ? 9 : 5 } sm={5} width={280} height={280} sx={{ bgcolor: "common.beige" }} justifyContent="center" alignItems='center' >
                    <Grid item bgcolor="">  
                    <Typography 
                        variant='h3'
                        color='secondary.main'
                        align='center'
                        mb={3}
                    >
                        Avg. Traffic
                    </Typography>
                    <Typography variant='h1' color='text' align='center'>
                        x.xK
                    </Typography>
                    <Typography fontSize={24} color='text' align='center'>
                        (Orders per month)
                    </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={isMobile ? 9 : 5 } sm={5} width={280} height={280} justifyContent="center" alignItems='center' 
                    sx={{ bgcolor: "common.beige" }}
                >
                    <Grid item bgcolor="" >  
                    <Typography 
                        variant='h3'
                        color='secondary.main'
                        align='center'
                        mb={2}
                    >
                        Order Type
                    </Typography>
                    <OrderTypeChart />
                    </Grid>
                </Grid>
            </Grid> 
            

        </Grid>
    )
}

 

export default INaNugget;