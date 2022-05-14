import { Container, Grid, Typography, Rating } from "@mui/material";


const ReviewSection = (isMobile) => {
    return (
        <Container>
        <Grid container bgcolor=""
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            px={ isMobile ? 0 : 2}
            sx={{ mt: 8, mb: isMobile ? 2 : 6 }}
        >
            <Grid container item columns={41} gap={3} justifyContent="center" alignItems='center' bgcolor="">
                <Grid item  xs={19} justifyContent="center" alignItems='center' bgcolor="common.beige" height={335}>
                    <Typography 
                        variant={ isMobile ? 'h2' : 'h3' }
                        color='text'
                        textAlign='center' 
                        mt={5}
                    >
                        Average Google <br />Customer Review
                    </Typography>
                    <Rating name='review_rating' value={4.5}  precision={0.5} size='small' sx={{ color: 'black' }} readOnly />
                    <Typography fontSize={100} fontWeight='bold' color='text' lineHeight={1.2} textAlign='center' mb={0}>
                        4.5
                    </Typography>
                    <Typography variant='body1' color='text' textAlign='center' mb={3}>
                        As of May 2022
                    </Typography>
                </Grid>
                <Grid container item  xs={19} justifyContent="center" alignItems='center' bgcolor="common.beige" height={335}>
                    <Grid item px={10}>
                    <Typography 
                        variant={ isMobile ? 'h2' : 'h3' }
                        color='text'
                        align='center'
                        mt={5} mb={3}
                    >
                        Here’s what another <br />franchise owner says
                    </Typography>
                    <Typography variant='body1' color={'text'} align='center' mb={3}>
                    “Sushi Rollin’ was such a great opportunity for me as a first time franchisee. The team was there to support and train me from start to finish. The results are already very promising.”
                    </Typography>
                    <Typography variant='body1' color="333333" textAlign="center" pt={isMobile ? 0 : 2 }  py = {isMobile ? 2 : 0 } pb = {isMobile ? 6 : 0 }>
                    -The Chef CEO, June Kim-
                    </Typography>
                    </Grid>
                </Grid>
                
            </Grid> 
            

        </Grid>
        </Container>
    )
}

 

export default ReviewSection;