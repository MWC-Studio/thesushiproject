import { Grid, Typography } from "@mui/material";
import Image from "next/dist/client/image";

const TextImgGrid = () => {
    return ( 
        <Grid container 
            justifyContent='center'
            alignItems='center' 
            py={6}
        >
            <Grid item xs={12} md={12}>
                <Typography 
                    variant='h3'
                    color='text'
                    textAlign='center'
                >
                    Why Choose Sushi Rollin’?
                </Typography>
            </Grid>
            <Grid container item 
                xs={12}
                md={8}
                gap={3} 
                mt={4}
                px={2}
                justifyContent='center'
                alignItems='center'
            >
                <Grid item>
                    <Image src={"/franchise/whychoose-1.png"} width={592} height={263} />
                </Grid>
                <Grid item>
                    <Typography 
                        variant='h4'
                        color='text'
                        mb={3}
                    >
                        Low Start-up Cost for Business Owners
                    </Typography>
                    <Typography 
                        variant='body2'
                        color='text'
                    >
                        Starting a new business could be overwhelming, but sushi rollin’ will support your journey from end to end. We will help you choose the right location, provide the interior design guidelines, and give the training to set up the process properly. Our Chef CEO will happily share his knowledge and experience that he has learned through trial and error. And he started small! We will start small, but the opportunities are not small at all with Sushi Rollin’. It’s an opportunity that keeps rolling! 
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item 
                xs={12}
                md={8}
                gap={3} 
                mt={6}
                px={2}
                justifyContent='center'
                alignItems='center'
            >
                <Grid item>
                    <Image src={"/franchise/whychoose-2.png"} width={592} height={263} />
                </Grid>
                <Grid item>
                    <Typography 
                        variant='h4'
                        color='text'
                        mb={3}
                    >
                        Pandemic Proved -<br />Delivery, Dine-in, To-go & more!
                    </Typography>
                    <Typography 
                        variant='body2'
                        color='text'
                    >
                        While our business models serve all types of sushi experience well, we have excelled with our fast-paced delivery system during a pandemic. Now more than ever before, customers who work from home or an office want healthy options that are both delicious and quick. Our delivery options are speedy while providing the same excellent quality that customers receive in our restaurants. No need to worry about table turnover rate!
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item 
                xs={12}
                md={8}
                gap={3} 
                mt={6}
                px={2}
                justifyContent='center'
                alignItems='center'  
            >
                <Grid item>
                    <Image src={"/franchise/whychoose-3.png"} width={592} height={263} />
                </Grid>
                <Grid item>
                    <Typography 
                        variant='h4'
                        color='text'
                        mb={3}
                    >
                        Go beyond the sushi experience
                    </Typography>
                    <Typography 
                        variant='body2'
                        color='text'
                    >
                        Most people assume they can only grab junk food or coffee from drive-thrus. We are planning to break that stigma by providing our fresh and healthy rolls through a drive-thru option. This way, we can approach our customers even more conveniently! We are developing this with our franchisees, and we anticipate it to be available in the coming months!
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
     );
}
 
export default TextImgGrid;