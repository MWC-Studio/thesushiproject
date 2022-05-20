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
                <Grid container item xs={isMobile ? 9 : 5 } sm={5}  justifyContent="center" alignItems='center' 
                    sx={{ bgcolor: "common.beige" }}
                >
                    <Grid container item justifyContent="center" alignItems='center' 
                        style={{ 
                            backgroundImage: `url('/franchise/bg_dollar_bigbox.svg')`,
                            width: 280,
                            height: 280
                        }}                        
                    > 
                    <Grid item bgcolor="">
                    <Typography 
                        variant='h3'
                        color='secondary.main'
                        align='center'
                        mb={3}
                    >
                        Initial Investment
                    </Typography>
                    <Typography variant='h1' color='text' align='center' mb={3}>
                        200K+
                    </Typography>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={isMobile ? 9 : 5 } sm={5} justifyContent="center" alignItems='center' 
                    sx={{ bgcolor: "common.beige" }}
                >
                    <Grid container item bgcolor=""  justifyContent="center" alignItems='center' 
                        style={{ 
                            backgroundImage: `url('/franchise/bg_line_bigbox.svg')`,
                            width: 280,
                            height: 280
                        }}
                    >  
                    <Grid item>
                    <Typography 
                        variant='h3'
                        color='secondary.main'
                        align='center'
                        mb={3}
                    >
                        Avg. Slaes Growth
                    </Typography>
                    <Typography variant='h1' color='text' align='center'>
                        x2.05
                    </Typography>
                    <Typography fontSize={24} color='text' align='center'>
                        (2021 vs 2022)
                    </Typography>
                    </Grid>
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
                        Avg. Margin
                    </Typography>
                    <Typography variant='h1' color='text' align='center'>
                        20%
                    </Typography>
                    <Typography fontSize={24} color='text' align='center'>
                        (per month)
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