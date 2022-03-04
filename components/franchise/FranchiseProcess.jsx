import { Grid, Typography, Avatar } from "@mui/material";

const FranchiseProcess = (props) => {
    return (
        <Grid container bgcolor=""
            spacing={2}
            justifyContent="center"
            alignItems="center" 
            py={8}
        >
            <Grid item lg={12} my={7} bgcolor="">
                <Typography 
                    variant={props.isMobile ? "h3" : "h2"}
                    color={'text'}
                    fontFamily={'Nunito'}
                    fontWeight={'fontWeightBold'}
                    textAlign="center"
                >
                    Franchise Process
                </Typography>
            </Grid>
            
            {itemProcess.map((item, idx) => (
            <Grid container wrap="nowrap" spacing={2} padding={2} lg={9} mx={7}>
                <Grid item>
                    {props.isMobile ?
                    <Avatar sx={{ bgcolor: 'primary.main', width: 36, height: 36 }}>
                        <Typography 
                            variant={'subtitle1'}
                            fontFamily={'Nunito'}
                            fontWeight={'fontWeightBold'}
                        >
                        {item.num}
                        </Typography>
                    </Avatar>                        
                    :
                    <Avatar sx={{ bgcolor: 'primary.main', width: 72, height: 72 }}>
                        <Typography 
                            variant={'h2'}
                            fontFamily={'Nunito'}
                            fontWeight={'fontWeightBold'}
                        >
                        {item.num}
                        </Typography>
                    </Avatar>
                    }

                </Grid>
                <Grid item xs zeroMinWidth  bgcolor="">
                    <Typography 
                        variant={props.isMobile ? "subtitle1" : "h4"}
                        color={'secondary.main'}
                        fontFamily={'Nunito'}
                        fontWeight={'fontWeightBold'}
                        mb={1}
                    >
                        {item.title}
                    </Typography>
                    <Typography
                        variant={props.isMobile ? "body2" : "body1"}
                        color={'text'}
                        fontFamily={'Nunito'}
                        mb={3}
                    >
                        {item.content}
                    </Typography>
                </Grid>
                
            </Grid>
            ))}
            
            
        </Grid>

    )
}

 

const itemProcess = [
    {
        num : "01",
        title : "Let’s get to know more about each other.",
        content : "Contact us vis email or call. Or you can simply visit one of our locations. We’d like to understand about your goal and plans to roll with us. By this time you’ll have better understanding about how we rollin’. ",
    },
    {
        num : "02",
        title : "Make sure we’re on the same roll.",
        content : "If you are a good fit and interested in moving forward, now it’s time to talk about rolls and responsobilities of this partnership. We will go through the documentation together. ",
    },
    {
        num : "03",
        title : "We will teach you how we rollin’.",
        content : "Once we go through the documents and everything looks fine, we’ll spend some time to learn the way we are rollin’. We can also help you with setting up your business for the first time business owners.",
    },
    {
        num : "04",
        title : "Let’s get this rollin’!",
        content : "Nowe we’re all set! Welcome to the Sushi Rollin’ family. Let’s rock and roll together!",
    }
];


export default FranchiseProcess;