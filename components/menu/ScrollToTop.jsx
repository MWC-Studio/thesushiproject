import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '2vh',
        color: 'white',
        backgroundColor: '#F48A88',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: 'black',
            backgroundColor: '#F48A88'
        },
        [theme.breakpoints.up('xs')]: {
            right: '5%',
        },
        [theme.breakpoints.up('lg')]: {
            right: '6.5%',
        },
    }
})
)


const ScrollToTop = ({
    showBelow,
}) => {

    const classes = useStyles();

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
           {show &&
                <IconButton 
                onClick={handleClick} className={classes.toTop} aria-label="to top" component="span">
                    <ArrowUpwardIcon />
                </IconButton>
            }
        </div>
    )
}
export default ScrollToTop