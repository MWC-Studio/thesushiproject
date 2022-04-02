import Box from '@mui/material/Box';
//import { makeStyles } from '@material-ui/core/styles';
import { Container, Divider, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import MuiNextLink from './MuiNextLink';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Stack from '@mui/material/Stack';
// import Drawer from '@mui/material/Drawer';
// import { flexbox } from '@mui/system';

const SideDrawer = ({ navLinks}) => {
  const [state, setState] = useState({
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Container
        sx={{
        // width: 375,
        width: '100%',
        height: 812,
        mt: '19px',
        overflowX: 'hidden',
        padding: '0px !important',
      }}
    >
      
      {/*close Icon added: left*/}
      {/* <Box>
        <IconButton
          onClick={toggleDrawer(anchor, false)}
          sx={{ ml: -1, mt: 1, mb: -3, color: 'primary.contrastText' }}
        >
          <CloseIcon />
        </IconButton>
      </Box> */}

      {/*close Icon added: right */}
      <Box sx={{ position: 'absolute', right: 9, top: 8 }}>
        <IconButton
          aria-label="close"
          onClick={toggleDrawer(anchor, false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 5,
            color: 'primary.contrastText',
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          width: 375,
          pt: 1,
          // pb: 1,
          textAlign: 'left',
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        {navLinks.map(({ title, path }, i) => (
          <Typography
            variant="h1"
            key={`${title}${i}`}
            sx={{
              ml: 6,
              // my: 6,
              mt: '39px',
              mb: '30px',
              textTransform: `uppercase`,
    
            }}
          >
            <MuiNextLink
              href={path}
              variant="button"
              underline="hover"
              sx={{
                fontWeight :'fontWeightBold',
                fontSize: '24px',
                color: 'primary.contrastText',
                opacity: 1,
                textTransform: 'none',
                '&:hover': {
                  color: 'secondary.main',
                  backgroundColor: 'transparent',
                  textUnderlineOffset: '50%',
                },
              }}
            >
              {title}
            </MuiNextLink>
          </Typography>
        ))}
      </Box>

      {/* <Divider
        sx={{
          width: '100%',
          maxWidth: 375,
          color: 'common.white',
        }}
      /> */}
      <Divider sx={{ backgroundColor: '#808080'}}  /> 
      {/*<hr/>*/}
      <Box sx={{ textAlign: 'left' }}>
        <Typography
          color="primary.contrastText"
          // variant="h4"
          textalign="left"
          fontWeight={'fontWeightBold'}
          sx={{
            ml: 6,
            my: '30px',
            color: 'secondary.main',
            fontSize: '18px', //h4 적용시 fontsize=18 안됨
            
          }}
        >
          Find Sushi Rollin’ On
        </Typography>
      </Box>

      {/* <div></div> */}
      {/* <Divider variant="middle" /> */}

      <Box>
        <Grid
          container
          item
          align="column"
          alignItems="left"
          justifycontent="left"
          // lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{ ml: 6, my: '30px' }}
        >
          <MuiNextLink
            sx={{ textDecoration: 'none', color: 'primary.contrastText' }}
            href="https://www.doordash.com/store/sushi-rollin-garland-1775965/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="highlight">
              <svg
                width="154"
                height="19"
                viewBox="0 0 154 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1411_2328)">
                  <path
                    d="M44.6741 5.57405V13.439H46.6351C47.1355 13.4316 47.6294 13.3239 48.0875 13.1222C48.5456 12.9206 48.9586 12.6291 49.3021 12.265C50.007 11.5187 50.3927 10.5266 50.3771 9.50005C50.392 8.99016 50.3061 8.48235 50.1241 8.00578C49.9422 7.52921 49.668 7.09329 49.3171 6.72305C48.9722 6.35848 48.5563 6.06837 48.095 5.87059C47.6338 5.67282 47.1369 5.57156 46.6351 5.57305H44.6751L44.6741 5.57405ZM46.6351 3.10805C50.2901 3.10805 53.0551 5.94005 53.0551 9.50005C53.0551 13.06 50.2901 15.908 46.6351 15.908H42.3101C42.2688 15.9075 42.2281 15.8989 42.1902 15.8826C42.1523 15.8664 42.118 15.8428 42.0892 15.8133C42.0604 15.7837 42.0377 15.7488 42.0224 15.7105C42.0071 15.6722 41.9995 15.6313 42.0001 15.59V3.43905C42.0001 3.26305 42.1391 3.12005 42.3101 3.12005L46.6351 3.10805ZM62.4761 13.713C64.1361 13.718 65.6351 12.697 66.2741 11.126C66.5871 10.3585 66.6707 9.51658 66.5149 8.70242C66.3591 7.88825 65.9704 7.13677 65.3961 6.53905C64.8318 5.95114 64.1024 5.54826 63.3043 5.38364C62.5062 5.21902 61.6769 5.30041 60.9261 5.61705C59.3921 6.26505 58.3901 7.79805 58.3871 9.50005C58.3871 11.82 60.2151 13.702 62.4771 13.713H62.4761ZM62.4771 2.81805C66.3241 2.81805 69.2651 5.85005 69.2651 9.50005C69.2651 13.15 66.3241 16.182 62.4761 16.182C58.6291 16.182 55.7131 13.165 55.7131 9.50005C55.7131 5.83505 58.6541 2.81805 62.4761 2.81805H62.4771ZM78.6101 13.713C80.8731 13.707 82.7041 11.823 82.7021 9.50305C82.6991 7.18105 80.8641 5.30105 78.6021 5.30005C76.3381 5.30005 74.5021 7.17905 74.4991 9.50005C74.4991 10.618 74.9321 11.69 75.7031 12.48C76.0804 12.8694 76.532 13.1791 77.0312 13.3909C77.5303 13.6026 78.0669 13.7122 78.6091 13.713H78.6101ZM78.6091 2.81805C82.4441 2.81805 85.3851 5.83505 85.3851 9.50005C85.3851 13.165 82.4321 16.182 78.6091 16.182C74.7871 16.182 71.8211 13.165 71.8211 9.50005C71.8211 5.83505 74.7621 2.81805 78.6091 2.81805ZM94.3551 5.57405H91.5901V8.95905H94.3551C94.5735 8.96873 94.7917 8.93353 94.996 8.85562C95.2003 8.7777 95.3865 8.65873 95.5431 8.50605C95.8631 8.19605 96.0451 7.76605 96.0491 7.31405C96.0571 7.08473 96.0188 6.85616 95.9363 6.64204C95.8538 6.42792 95.7289 6.23269 95.5691 6.06805C95.4122 5.90602 95.2231 5.77863 95.014 5.69407C94.8049 5.6095 94.5805 5.56964 94.3551 5.57705V5.57405ZM88.9151 3.43905C88.9151 3.26305 89.0551 3.12005 89.2261 3.12005H94.4321C96.9141 3.12005 98.7101 4.98505 98.7101 7.32705C98.7291 8.91105 97.8641 10.366 96.4831 11.075L98.8841 15.428C98.9173 15.4781 98.936 15.5363 98.9381 15.5963C98.9402 15.6564 98.9257 15.7158 98.8961 15.768C98.8671 15.8195 98.8241 15.8615 98.7719 15.8892C98.7198 15.9168 98.6609 15.9289 98.6021 15.924H96.4951C96.4366 15.9249 96.3791 15.9092 96.3292 15.8787C96.2794 15.8483 96.2391 15.8044 96.2131 15.752L93.8991 11.444H91.5801V15.58C91.5807 15.6214 91.5732 15.6624 91.558 15.7008C91.5427 15.7392 91.5201 15.7743 91.4913 15.8039C91.4625 15.8335 91.4281 15.8572 91.3902 15.8735C91.3522 15.8899 91.3114 15.8985 91.2701 15.899H89.2401C89.1987 15.8985 89.1579 15.8899 89.12 15.8735C89.082 15.8572 89.0476 15.8335 89.0188 15.8039C88.99 15.7743 88.9674 15.7392 88.9521 15.7008C88.9369 15.6624 88.9294 15.6214 88.9301 15.58L88.9161 3.44005L88.9151 3.43905ZM105.682 5.63405V13.5H107.642C108.142 13.4933 108.636 13.3862 109.095 13.1853C109.553 12.9843 109.966 12.6935 110.31 12.33C111.015 11.5846 111.402 10.5932 111.387 9.56705C111.403 9.05653 111.318 8.5479 111.137 8.07044C110.955 7.59298 110.681 7.15613 110.33 6.78505C109.985 6.41986 109.568 6.1294 109.106 5.9316C108.644 5.7338 108.146 5.63287 107.643 5.63505L105.682 5.63405ZM107.642 3.16505C111.297 3.16505 114.062 6.00005 114.062 9.56705C114.062 13.134 111.297 15.969 107.642 15.969H103.33C103.289 15.9685 103.248 15.9599 103.21 15.9435C103.172 15.9272 103.138 15.9035 103.109 15.8739C103.08 15.8443 103.057 15.8092 103.042 15.7708C103.027 15.7324 103.019 15.6914 103.02 15.65V3.50005C103.02 3.32305 103.159 3.18005 103.33 3.18005L107.643 3.16505H107.642ZM122.218 6.29305L120.701 10.499H123.732L122.218 6.29305ZM119.811 12.876L118.818 15.676C118.798 15.7419 118.757 15.7993 118.701 15.8391C118.645 15.879 118.577 15.899 118.508 15.896H116.354C116.299 15.9012 116.244 15.8914 116.194 15.8678C116.144 15.8443 116.102 15.8077 116.071 15.762C116.04 15.7158 116.021 15.6623 116.016 15.6066C116.011 15.5509 116.021 15.4949 116.044 15.444L120.698 3.30505C120.72 3.24103 120.762 3.18587 120.818 3.14796C120.874 3.11004 120.941 3.09146 121.008 3.09505H123.418C123.486 3.09124 123.553 3.10972 123.609 3.14764C123.665 3.18557 123.707 3.24086 123.729 3.30505L128.383 15.444C128.406 15.495 128.416 15.551 128.411 15.6067C128.406 15.6624 128.387 15.7159 128.355 15.762C128.324 15.8075 128.282 15.8439 128.232 15.8673C128.182 15.8907 128.127 15.9003 128.072 15.895H125.919C125.85 15.898 125.783 15.878 125.726 15.8381C125.67 15.7983 125.629 15.7409 125.609 15.675L124.616 12.875H119.811V12.876ZM130.88 6.56605C130.88 4.55605 132.574 2.81805 135.249 2.81805C136.69 2.78588 138.084 3.32473 139.129 4.31705C139.161 4.34714 139.186 4.38342 139.204 4.42365C139.221 4.46389 139.23 4.50724 139.23 4.55105C139.23 4.59486 139.221 4.6382 139.204 4.67844C139.186 4.71868 139.161 4.75495 139.129 4.78505L137.936 6.00005C137.908 6.02956 137.873 6.05304 137.836 6.06907C137.798 6.0851 137.757 6.09336 137.716 6.09336C137.675 6.09336 137.634 6.0851 137.597 6.06907C137.559 6.05304 137.525 6.02956 137.496 6.00005C136.934 5.47337 136.196 5.17496 135.426 5.16305C134.356 5.16305 133.565 5.80005 133.565 6.53505C133.565 8.91105 139.888 7.54005 139.888 12.112C139.885 14.429 138.178 16.182 135.16 16.182C134.322 16.1906 133.491 16.0306 132.716 15.7114C131.941 15.3922 131.238 14.9204 130.649 14.324C130.617 14.294 130.592 14.2577 130.575 14.2174C130.557 14.1772 130.548 14.1339 130.548 14.09C130.548 14.0462 130.557 14.0029 130.575 13.9627C130.592 13.9224 130.617 13.8861 130.649 13.856L131.803 12.672C131.832 12.6411 131.867 12.6164 131.905 12.5995C131.944 12.5826 131.986 12.5739 132.028 12.5739C132.07 12.5739 132.112 12.5826 132.151 12.5995C132.19 12.6164 132.224 12.6411 132.253 12.672C132.979 13.392 133.957 13.8008 134.98 13.812C136.317 13.812 137.198 13.08 137.198 12.163C137.198 9.78605 130.878 11.158 130.878 6.58505L130.88 6.56605ZM151.354 3.42305V8.22705H146.002V3.42305C146.003 3.38181 145.995 3.34087 145.98 3.30257C145.964 3.26428 145.942 3.22937 145.913 3.19984C145.884 3.17031 145.85 3.14674 145.812 3.13047C145.774 3.11421 145.733 3.10557 145.692 3.10505H143.662C143.621 3.10557 143.58 3.11421 143.542 3.13047C143.504 3.14674 143.47 3.17031 143.441 3.19984C143.412 3.22937 143.39 3.26428 143.374 3.30257C143.359 3.34087 143.352 3.38181 143.352 3.42305V15.56C143.352 15.736 143.492 15.879 143.662 15.879H145.692C145.862 15.879 146.002 15.736 146.002 15.56V10.68H151.35V15.56C151.35 15.736 151.49 15.879 151.66 15.879H153.69C153.861 15.879 154 15.736 154 15.56V3.42305C154.001 3.38181 153.993 3.34087 153.978 3.30257C153.962 3.26428 153.94 3.22937 153.911 3.19984C153.882 3.17031 153.848 3.14674 153.81 3.13047C153.772 3.11421 153.731 3.10557 153.69 3.10505H151.66C151.577 3.10714 151.499 3.1417 151.442 3.20122C151.384 3.26075 151.353 3.34045 151.354 3.42305ZM30.6051 4.72505C29.1971 2.11505 26.4421 0.490046 23.4461 0.500046H0.778058C0.624975 0.500667 0.475459 0.546321 0.348139 0.631319C0.22082 0.716317 0.121327 0.836901 0.0620576 0.978046C0.00365406 1.11829 -0.0115568 1.27277 0.0183732 1.4217C0.0483033 1.57064 0.122012 1.70726 0.230058 1.81405L5.16806 6.71405C5.60406 7.14805 6.19806 7.39105 6.81606 7.39105H22.7961C23.9351 7.37905 24.8661 8.28105 24.8781 9.40405C24.8901 10.527 23.9771 11.447 22.8381 11.458H11.8211C11.6679 11.4581 11.5181 11.5033 11.3904 11.5879C11.2627 11.6726 11.1628 11.793 11.1031 11.934C11.0441 12.0744 11.0285 12.2293 11.0582 12.3786C11.088 12.528 11.1618 12.665 11.2701 12.772L16.2111 17.676C16.6498 18.1098 17.2421 18.3528 17.8591 18.352H22.8421C29.3251 18.352 34.2271 11.512 30.6051 4.72205"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1411_2328">
                    <rect
                      width="154"
                      height="18"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </MuiNextLink>
        </Grid>

        <Grid
          container
          item
          align="column"
          alignItems="left"
          justifycontent="left"
          // lg={12} //2->12
          md={12} //2->12
          sm={12}
          xs={12}
          sx={{ ml: 6, my: '30px' }}
        >
          <MuiNextLink
            sx={{ textDecoration: 'none', color: 'primary.contrastText' }}
            href="https://www.grubhub.com/restaurant/sushi-rollin-6850-n-shiloh-rd-garland/2769858"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="highlight">
              <svg
                width="96"
                height="21"
                viewBox="0 0 96 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1411_2330)">
                  <path
                    d="M80.3475 0.799948H77.0126C76.8246 0.799948 76.7307 0.893943 76.7307 1.08186V14.2812C76.7307 14.9388 76.5194 15.432 76.2374 15.8079C75.9557 16.1838 75.5799 16.2776 75.11 16.2776C74.6404 16.2776 74.2411 16.0896 73.9593 15.8079C73.6775 15.432 73.4897 14.9388 73.4897 14.2812V1.08186C73.4897 0.893943 73.3015 0.799948 73.2077 0.799948H69.849C69.6611 0.799948 69.5673 0.893943 69.5673 1.08186V14.3752C69.5673 16.0897 69.9431 17.7103 70.9999 18.7671C72.0333 19.8241 73.4661 20.3878 75.11 20.3878C76.8245 20.3878 78.2572 19.8242 79.2201 18.7671C80.2536 17.7339 80.6529 16.2073 80.6529 14.3752V1.08186C80.7468 0.988012 80.559 0.799948 80.3475 0.799948ZM93.1479 10.1713C93.7115 9.60743 94.7685 8.26874 94.7685 6.53078C94.7685 4.51105 93.9935 3.28972 93.4063 2.60847C92.3494 1.48113 90.94 0.893942 89.2961 0.893942H84.0351C83.8238 0.893942 83.7297 1.08186 83.7297 1.1757V19.8241C83.7297 20.0119 83.9176 20.106 84.0351 20.106H89.6013C91.3159 20.106 92.9364 19.4483 93.9935 18.0861C94.5571 17.3345 95.2381 16.0661 95.2381 14.1639C95.0502 11.8857 93.641 10.5469 93.1479 10.1713ZM87.605 4.72218H89.3197C89.7893 4.72218 90.165 4.81603 90.447 5.19193C90.7522 5.49721 90.8463 5.96703 90.8463 6.55414C90.8463 7.14126 90.7522 7.58741 90.447 7.98691C90.165 8.26867 89.7893 8.45658 89.4135 8.45658H87.6991V4.72218H87.605ZM90.6583 15.7139C90.3764 16.0897 90.0006 16.1837 89.4134 16.1837H87.5111V12.1439H89.4134C89.8833 12.1439 90.259 12.3552 90.5408 12.6373C90.8462 13.013 91.0341 13.4826 91.0341 14.0698C91.128 14.8448 90.9636 15.3147 90.6583 15.7139ZM22.6411 11.7916C23.0169 11.5099 23.3223 11.322 23.6041 10.9227C24.2617 10.1712 25.1306 8.83226 25.1306 6.71854C25.1306 4.69867 24.3556 3.38349 23.6041 2.60847C22.6411 1.48113 21.2084 0.893942 19.5878 0.799948H14.045C13.8571 0.799948 13.7632 0.988012 13.7632 1.08186V19.7068C13.7632 19.8946 13.9511 19.9886 14.045 19.9886H17.3801C17.568 19.9886 17.662 19.8006 17.662 19.7068V12.8251H18.8128L20.9031 19.8946C20.9031 19.9886 21.1145 20.0825 21.2085 20.0825H24.7314C24.8253 20.0825 24.9193 19.9886 25.0133 19.9886C25.1072 19.9886 25.1072 19.8006 25.1072 19.7068L22.6411 11.7916ZM20.5273 8.33899C20.2454 8.71505 19.7757 8.92618 19.1885 8.92618H17.5679V4.72218H19.1885C19.7522 4.72218 20.2218 4.9101 20.5273 5.28585C20.903 5.68527 21.0205 6.15495 21.0205 6.81261C21.0205 7.49364 20.9265 7.96324 20.5273 8.33899ZM50.8955 10.1713C51.4827 9.60743 52.5162 8.26874 52.5162 6.53078C52.5162 4.51105 51.7646 3.28972 51.1774 2.60847C50.1205 1.48113 48.6877 0.893942 47.0672 0.893942H41.8296C41.6417 0.893942 41.5477 1.08186 41.5477 1.1757V19.8241C41.5477 20.0119 41.7357 20.106 41.8296 20.106H47.3725C49.087 20.106 50.7076 19.4483 51.7879 18.0861C52.3517 17.3345 53.0328 16.0661 53.0328 14.1639C52.9154 11.8857 51.4827 10.5469 50.8955 10.1713ZM45.3761 4.72218H47.0907C47.5604 4.72218 47.9362 4.81603 48.2181 5.19193C48.4998 5.49721 48.5939 5.96703 48.5939 6.55414C48.5939 7.14126 48.4998 7.58741 48.2181 7.98691C47.9362 8.26867 47.5604 8.45658 47.1846 8.45658H45.47V4.72218H45.3761ZM48.5233 15.7139C48.2416 16.0897 47.8656 16.1837 47.2785 16.1837H45.3761V12.1439H47.2785C47.7482 12.1439 48.124 12.3552 48.4058 12.6373C48.6876 13.013 48.899 13.4826 48.899 14.0698C48.9226 14.8448 48.8287 15.3147 48.5233 15.7139ZM5.51941 0.518188C3.80481 0.518188 2.37219 1.08186 1.40925 2.13864C0.375755 3.19558 0 4.69867 0 6.5307V14.469C0 16.1838 0.375755 17.8041 1.40925 18.8612C2.46611 19.9182 3.8988 20.4818 5.51941 20.4818C7.23386 20.4818 8.68999 19.9182 9.65293 18.8612C10.6864 17.8277 11.0622 16.3011 11.0622 14.469V10.1005C11.0622 9.88927 10.8743 9.70143 10.6864 9.70143H5.82468C5.6134 9.70143 5.42549 9.88927 5.42549 10.1005V13.3418C5.42549 13.5296 5.6134 13.7176 5.82468 13.7176H7.06954V14.4926C7.06954 15.1503 6.88162 15.7375 6.59986 16.1133C6.31788 16.4891 5.91875 16.583 5.44893 16.583C4.97926 16.583 4.60343 16.3951 4.29815 16.1133C4.01631 15.7375 3.82847 15.1503 3.82847 14.4926V6.64829C3.82847 5.96703 4.01631 5.37985 4.29815 5.02739C4.6035 4.65163 4.97926 4.55779 5.44893 4.55779C5.91875 4.55779 6.31795 4.7457 6.59986 5.02739C6.8817 5.40321 7.06954 5.96703 7.06954 6.64829V7.3998C7.06954 7.58749 7.25737 7.705 7.35137 7.705H10.6865C10.8743 7.705 10.9683 7.58749 10.9683 7.3998V6.64829C10.9683 4.93354 10.5926 3.31301 9.53572 2.25615C8.69007 1.08186 7.13994 0.518188 5.51941 0.518188ZM38.2128 0.799948H34.8776C34.6897 0.799948 34.5957 0.893943 34.5957 1.08186V14.2812C34.5957 14.9388 34.3844 15.432 34.1026 15.8079C33.8207 16.1838 33.4449 16.2776 32.9752 16.2776C32.5055 16.2776 32.1062 16.0896 31.8244 15.8079C31.5426 15.432 31.3547 14.9388 31.3547 14.2812V1.08186C31.3547 0.893943 31.1433 0.799948 31.0494 0.799948H27.7143C27.5264 0.799948 27.4325 0.893943 27.4325 1.08186V14.3752C27.4325 16.0897 27.8318 17.7103 28.8651 18.7671C29.922 19.8241 31.3547 20.3878 32.9753 20.3878C34.6899 20.3878 36.146 19.8242 37.0854 18.7671C38.1423 17.7339 38.518 16.2073 38.518 14.3752V1.08186C38.4946 0.988012 38.4006 0.799948 38.2128 0.799948ZM66.3026 0.799948H62.9676C62.7797 0.799948 62.6858 0.988012 62.6858 1.08186V8.33899H59.3507V1.08186C59.3507 0.893943 59.1628 0.799948 59.0688 0.799948H55.7337C55.5458 0.799948 55.4519 0.988012 55.4519 1.08186V19.7068C55.4519 19.8946 55.6398 19.9886 55.7337 19.9886H59.0688C59.2567 19.9886 59.3507 19.8006 59.3507 19.7068V12.2615H62.6858V19.7068C62.6858 19.8946 62.8737 19.9886 62.9676 19.9886H66.3026C66.4906 19.9886 66.5846 19.8006 66.5846 19.7068V1.08186C66.5846 0.988012 66.4906 0.799948 66.3026 0.799948Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1411_2330">
                    <rect
                      width="95.2381"
                      height="20"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              {/* <Image
                  src="/home_page/grubhub.svg"
                  alt="Grub hub"
                  // layout="responsive"
                  width="96"
                  height="21"
                /> */}
            </div>
          </MuiNextLink>
        </Grid>
        <Grid
          container
          item
          align="column"
          alignItems="left"
          justifycontent="left"
          // lg={12} //2에서 12로 변경 for ceter align @Desktop version
          md={12} //2에서 12로 변경 for ceter align @Desktop version
          sm={12}
          xs={12}
          sx={{ ml: 6, my: '30px' }}
        >
          <MuiNextLink
            sx={{ textDecoration: 'none', color: 'primary.contrastText' }}
            href="https://www.yelp.com/biz/sushi-rollin-garland"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="highlight">
              <svg
                width="67.18"
                height="22.56"
                viewBox="0 0 59 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.5993 12.3005L48.563 12.0952C48.5996 12.0838 48.624 12.0838 48.6606 12.0724C49.2095 11.9356 49.5511 11.4111 49.4169 10.8981L49.4047 10.8867C49.3681 10.7726 49.3193 10.6472 49.2461 10.556C49.1363 10.4306 49.0022 10.328 48.8558 10.2368C48.6728 10.1455 48.4898 10.0657 48.2946 9.99732L47.2455 9.63246C46.66 9.42723 46.0623 9.2334 45.4645 9.03957C45.0742 8.91416 44.7448 8.80014 44.4642 8.70892C44.4154 8.69752 44.3544 8.67472 44.3057 8.66332C43.9641 8.5607 43.7201 8.5265 43.5127 8.5265C43.3785 8.5265 43.2444 8.5493 43.1102 8.59491C42.976 8.65192 42.854 8.73173 42.7564 8.82294C42.7076 8.86855 42.6588 8.92556 42.6222 8.98257C42.5368 9.09658 42.4758 9.2334 42.427 9.35882C42.2319 9.8947 42.1343 10.4648 42.1343 11.0349C42.1343 11.548 42.1587 12.2093 42.4636 12.6653C42.5368 12.7793 42.6344 12.882 42.7442 12.9504C42.9638 13.0872 43.1834 13.11 43.4029 13.1214C43.7323 13.1442 44.0617 13.0644 44.391 12.996L47.5993 12.3005ZM58.3098 7.53455C58.0414 7.02147 57.6999 6.554 57.2729 6.14354C57.2119 6.09793 57.1631 6.04092 57.0899 6.00672C57.0289 5.96111 56.9679 5.9269 56.9069 5.8927C56.8459 5.85849 56.7728 5.83569 56.7118 5.80148C56.5776 5.75588 56.4312 5.73307 56.2848 5.73307C56.1506 5.74448 56.0164 5.77868 55.8944 5.83569C55.7115 5.9269 55.5163 6.06372 55.2479 6.29176C55.2113 6.32596 55.1625 6.36017 55.1259 6.39437C54.9063 6.5882 54.6624 6.82764 54.3818 7.10128C53.9426 7.52315 53.5035 7.94501 53.0643 8.36687L52.2836 9.11939C52.1372 9.25621 52.0152 9.40443 51.8933 9.56405C51.7957 9.70087 51.7225 9.8491 51.6859 10.0087C51.6615 10.1341 51.6615 10.2596 51.6981 10.3736L51.7103 10.385C51.8323 10.9095 52.3812 11.2401 52.9424 11.1375C52.9789 11.1261 53.0155 11.1261 53.0399 11.1147L57.1875 10.214C57.5169 10.1455 57.8462 10.0771 58.139 9.91751C58.3342 9.81489 58.5294 9.70087 58.6514 9.48424C58.7245 9.37022 58.7611 9.2334 58.7733 9.10798C58.8343 8.59491 58.5416 8.00202 58.3098 7.53455ZM50.8808 9.16499C51.1857 8.81154 51.1857 8.28706 51.2101 7.85379C51.2955 6.41718 51.3931 4.98056 51.4663 3.53254C51.5029 2.99666 51.5639 2.44938 51.5273 1.90209C51.4907 1.44603 51.4907 0.932947 51.1857 0.55669C50.649 -0.093208 49.4901 -0.0361987 48.7094 0.0550151C48.4654 0.0892202 48.2214 0.123425 47.9897 0.180434C47.7457 0.237443 47.5139 0.294451 47.2821 0.362861C46.5258 0.590896 45.4645 1.01276 45.2816 1.82228C45.184 2.28975 45.4157 2.75722 45.6109 3.16769C45.8305 3.68076 46.1477 4.13683 46.4282 4.61571C47.1602 5.8927 47.9165 7.14689 48.6728 8.40108C48.9046 8.77733 49.1485 9.24481 49.5755 9.43863C49.6121 9.45004 49.6365 9.46144 49.6609 9.47284C49.8561 9.54125 50.0757 9.55265 50.2708 9.50704L50.3074 9.49564C50.4904 9.45004 50.6612 9.34742 50.7954 9.222C50.832 9.2106 50.8564 9.1878 50.8808 9.16499ZM50.5148 13.0188C50.2708 12.6995 49.8439 12.5627 49.4413 12.6881C49.3925 12.6995 49.3559 12.7223 49.3071 12.7337C49.2339 12.7679 49.1729 12.8021 49.1242 12.8478C48.9534 12.9618 48.807 13.1214 48.6728 13.281C48.6362 13.3152 48.6118 13.3722 48.563 13.4064L47.8921 14.2616C47.5139 14.7404 47.1358 15.2193 46.7698 15.7096C46.5258 16.0288 46.3184 16.2911 46.1477 16.5305C46.1111 16.5761 46.0867 16.6331 46.0501 16.6673C45.8549 16.9524 45.7451 17.1576 45.6841 17.34C45.6475 17.4654 45.6231 17.6023 45.6475 17.7277C45.6597 17.8645 45.7085 17.9899 45.7817 18.1039C45.8183 18.161 45.8671 18.218 45.9159 18.275C46.0135 18.3776 46.1233 18.4802 46.2574 18.56C46.721 18.8565 47.2211 19.0731 47.7579 19.2441C48.197 19.3809 48.6606 19.4608 49.1242 19.4836C49.2095 19.4836 49.2827 19.4836 49.3681 19.4836C49.4413 19.4722 49.5145 19.4722 49.5877 19.4493C49.6609 19.4379 49.7341 19.4151 49.7951 19.3923C50.0635 19.3011 50.283 19.1073 50.3806 18.8565C50.4538 18.674 50.5026 18.446 50.5392 18.1039C50.5392 18.0583 50.5514 18.0013 50.5514 17.9443C50.5758 17.6593 50.588 17.3286 50.6124 16.941C50.649 16.3481 50.6734 15.7552 50.6856 15.1509L50.7222 14.0905C50.7344 13.8397 50.7222 13.5775 50.649 13.3266C50.6368 13.224 50.588 13.1214 50.5148 13.0188ZM58.0536 14.672C57.9194 14.5238 57.712 14.387 57.4071 14.216C57.3583 14.1932 57.3095 14.1589 57.2607 14.1361C57.0045 13.9879 56.6874 13.8397 56.3214 13.6573C55.7603 13.3722 55.1991 13.0872 54.638 12.8135L53.6377 12.3233C53.5889 12.3119 53.5279 12.2777 53.4791 12.2549C53.2839 12.1636 53.0765 12.0952 52.8692 12.0496C52.796 12.0382 52.7228 12.0268 52.6496 12.0268C52.6008 12.0268 52.552 12.0268 52.5032 12.0382C52.0884 12.0952 51.7713 12.3917 51.6981 12.7793C51.6859 12.8934 51.6859 13.0188 51.7103 13.1328C51.7591 13.3836 51.8811 13.6231 52.003 13.8397L52.5398 14.7746C52.8326 15.3105 53.1375 15.8236 53.4425 16.3481C53.6377 16.6901 53.8085 16.9752 53.967 17.226C53.9914 17.2716 54.028 17.3172 54.0524 17.3628C54.2354 17.6593 54.394 17.8417 54.5526 17.9671C54.6502 18.0583 54.7722 18.1268 54.8941 18.1724C55.0283 18.218 55.1747 18.2294 55.3211 18.218C55.3943 18.2066 55.4675 18.1952 55.5407 18.1838C55.6139 18.161 55.6871 18.1496 55.7481 18.1267C55.8212 18.0925 55.8944 18.0697 55.9554 18.0355C56.3702 17.8189 56.7362 17.5567 57.0655 17.2602C57.4681 16.8954 57.8218 16.4963 58.0902 16.0288C58.1268 15.9604 58.1634 15.892 58.1878 15.8236C58.2122 15.7552 58.2366 15.6982 58.261 15.6298C58.2732 15.5614 58.2854 15.493 58.2976 15.4245C58.3098 15.2877 58.2976 15.1509 58.2488 15.0255C58.2244 14.8773 58.1512 14.7632 58.0536 14.672Z"
                  fill="#FBF8ED"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.6043 5.57343C23.6043 4.79812 24.2752 4.17102 25.0926 4.17102C25.8977 4.17102 26.5442 4.79812 26.5808 5.58484V16.5191C26.5808 17.2944 25.9099 17.9215 25.0926 17.9215C24.2752 17.9215 23.6043 17.2944 23.6043 16.5191V5.57343ZM22.2259 12.3233C22.2137 12.5399 22.1527 12.939 21.8599 13.2354C21.5305 13.5546 21.0914 13.6231 20.8352 13.6231C19.7739 13.6345 18.7126 13.6345 17.6513 13.6345C16.5901 13.6345 15.5288 13.6345 14.4675 13.6459C14.5651 13.9195 14.7481 14.33 15.1628 14.7062C15.419 14.9343 15.663 15.0597 15.7605 15.1167C15.8825 15.1965 16.3339 15.4131 16.8706 15.4131C17.444 15.4131 17.9563 15.2421 18.4565 15.0027L18.4931 14.9799C18.8468 14.8088 19.2006 14.6378 19.5787 14.5808C19.9447 14.5238 20.3473 14.5922 20.64 14.8316C20.9938 15.1167 21.128 15.5271 20.9938 15.949C20.8474 16.4279 20.4205 16.8384 19.9569 17.0892C19.7007 17.226 19.4202 17.3514 19.1396 17.4426C18.4199 17.6821 17.6635 17.7961 16.9072 17.7733C16.7242 17.7733 16.5291 17.7733 16.3339 17.7505C16.1265 17.7277 15.9191 17.6935 15.7118 17.6365C15.3946 17.5681 15.0774 17.4768 14.7847 17.34C14.4919 17.2146 14.2113 17.0664 13.9429 16.8954C13.6746 16.7129 13.4306 16.5191 13.1988 16.2911C12.967 16.0744 12.7719 15.8236 12.5889 15.5728C11.9668 14.6834 11.674 13.5889 11.7228 12.5171C11.7716 11.4795 12.1375 10.4306 12.8207 9.58684C12.8939 9.48423 12.967 9.39302 13.0524 9.3018C13.089 9.2676 13.1256 9.23339 13.15 9.18778C13.9795 8.24144 15.0896 7.94499 15.5532 7.81958L15.5776 7.80818C16.5047 7.55734 17.4928 7.55734 18.4199 7.80818C18.6394 7.86518 19.8837 8.21864 20.8474 9.18778C20.8962 9.23339 21.0182 9.37021 21.189 9.57544C21.6037 10.0999 21.9087 10.6928 22.0795 11.3199C22.1649 11.605 22.2259 11.9242 22.2259 12.3233ZM15.419 10.5332C14.9676 10.8866 14.6383 11.3655 14.5163 11.9014H19.5665C19.4324 11.3655 19.1152 10.8752 18.6516 10.5332C18.1881 10.1911 17.627 9.99731 17.0292 9.99731C16.8218 9.99731 16.1021 10.0315 15.419 10.5332ZM34.6441 7.65995C33.3145 7.65995 32.119 8.20724 31.2529 9.10797V9.08517C31.2041 7.24949 28.2398 7.3179 28.3008 9.16498V19.609C28.3008 20.3729 28.9596 21 29.7891 21C30.6064 21 31.2651 20.3843 31.2651 19.609V16.3481C32.119 17.2374 33.3145 17.8075 34.6441 17.8075C37.2913 17.8075 39.4504 15.5614 39.4504 12.7565C39.4504 9.9403 37.2913 7.65995 34.6441 7.65995ZM33.9854 15.5157C32.485 15.5157 31.2529 14.2844 31.2529 12.7565C31.2529 11.2173 32.4728 9.98591 33.9854 9.98591C35.4981 9.98591 36.7179 11.2173 36.7179 12.7565C36.7179 14.2958 35.4981 15.5157 33.9854 15.5157ZM9.52701 13.4634L9.03906 14.4668C8.81949 14.9001 8.59991 15.3447 8.39253 15.7894C8.31934 15.9262 8.25834 16.063 8.19735 16.1999C7.27025 18.1267 6.17237 20.4185 3.76922 20.8974C2.61034 21.1368 0.85373 20.8062 0.207199 19.7914C-0.439333 18.7538 0.524365 17.5681 1.75643 17.8417C1.95161 17.8759 2.14679 17.9671 2.34197 18.0583C2.67134 18.2066 2.9885 18.3662 3.35446 18.2978C3.68383 18.2408 3.90341 18.0127 4.15958 17.7277C4.44015 17.4084 4.64753 17.0436 4.75732 16.6445C4.74512 16.6331 4.74512 16.6217 4.74512 16.6103C4.73292 16.5989 4.73292 16.5875 4.72072 16.5761C4.41575 16.0516 4.15958 15.5728 3.94 15.1851C3.79362 14.9343 3.67163 14.7062 3.56184 14.5238L3.0617 13.6345C2.69573 12.9732 2.63474 12.8705 2.46396 12.5855C2.1102 11.947 1.73204 11.3199 1.32948 10.7042C0.902525 10.0315 0.463371 9.279 0.817134 8.48088C1.0977 7.84238 1.85402 7.51173 2.54935 7.72836C3.29347 7.93359 3.62284 8.6063 3.94 9.22199C3.9888 9.33601 4.04979 9.45003 4.11078 9.55264C4.61093 10.4762 5.09888 11.3997 5.58683 12.3233C5.62342 12.4145 5.69662 12.5399 5.78201 12.6881C5.8552 12.8249 5.94059 12.9846 6.02598 13.1556C6.07478 13.2468 6.11137 13.3266 6.16017 13.4064C6.20896 13.4976 6.25776 13.5889 6.28215 13.6573C6.51393 13.1328 6.73351 12.6083 6.96528 12.0838C7.19706 11.5593 7.42883 11.0349 7.64841 10.5104C7.64841 10.4762 7.7094 10.3736 7.7826 10.2025C7.90458 9.9517 8.02657 9.70086 8.13636 9.45002C8.44132 8.76592 8.79509 7.945 9.6002 7.71696C10.1857 7.55734 10.8079 7.76257 11.1616 8.23004C11.3446 8.45807 11.4056 8.72031 11.4178 8.98255C11.43 9.56404 11.125 10.1797 10.8689 10.7042C10.8079 10.8296 10.7469 10.9551 10.6981 11.0805L10.6615 11.1489C10.5883 11.2971 10.3931 11.6962 10.0638 12.3689C9.94177 12.6083 9.83198 12.8477 9.70999 13.0872C9.6612 13.2012 9.588 13.338 9.52701 13.4634Z"
                  fill="#FBF8ED"
                />
              </svg>
            </div>
          </MuiNextLink>
        </Grid>

        <Grid
          container
          item
          align="column"
          alignItems="left"
          justifycontent="left"
          // lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{ ml: 6, my: '30px' }}
        >
          <MuiNextLink
            sx={{ textDecoration: 'none', color: 'primary.contrastText' }}
            href="https://www.ubereats.com/store/sushi-rollin/6P3FSDejTAuapBvlNZGQaQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlN1c2hpJTIwUm9sbGluJUUyJTgwJTk5JTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyQ2hJSnRlSFdmeDBjVElZUkpvOWM3djhrczJJJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMmdvb2dsZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTMyLjk3NjUzJTJDJTIybG9uZ2l0dWRlJTIyJTNBLTk2LjY2NDIyMzMlN0Q%3D&ps=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="highlight">
              <svg
                width="100"
                height="16"
                viewBox="0 0 100 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52.3306 0H63.3477V2.69564H55.3066V6.52346H63.1239V9.12745H55.3066V13.02H63.3477V15.7156H52.3306V0ZM93.7734 15.9987C97.1511 15.9987 99.0542 14.3813 99.0542 12.1601C99.0542 10.5777 97.9274 9.39702 95.5687 8.88484L93.0752 8.37537C91.6277 8.1058 91.1721 7.83624 91.1721 7.29711C91.1721 6.59894 91.8703 6.17033 93.1561 6.17033C94.5498 6.17033 95.5822 6.54503 95.8517 7.83354H98.7738C98.6148 5.40746 96.8707 3.80625 93.334 3.80625C90.2772 3.80625 88.1314 5.06781 88.1314 7.51276C88.1314 9.20293 89.3121 10.3028 91.8595 10.8392L94.6468 11.4834C95.7466 11.6991 96.0404 11.9956 96.0404 12.4512C96.0404 13.1763 95.2102 13.6319 93.8678 13.6319C92.1803 13.6319 91.2152 13.2572 90.8405 11.9687H87.9023C88.3309 14.3894 90.1262 15.9987 93.7734 15.9987ZM87.0532 15.7048H83.8912C81.9072 15.7048 80.8074 14.4702 80.8074 12.9121V6.73911H78.5834V4.10816H80.8181V0.805998H83.7564V4.10816H87.0532V6.73911H83.7564V12.1601C83.7564 12.7774 84.185 13.0739 84.8562 13.0739H87.0532V15.7048ZM74.3836 4.11355V5.15946C73.3491 4.28496 72.0371 3.80718 70.6825 3.81164C69.8715 3.79458 69.0653 3.93959 68.311 4.23815C67.5568 4.53671 66.8698 4.98283 66.2902 5.55036C65.7106 6.11788 65.2501 6.79539 64.9358 7.54317C64.6214 8.29096 64.4595 9.09397 64.4595 9.90515C64.4595 10.7163 64.6214 11.5193 64.9358 12.2671C65.2501 13.0149 65.7106 13.6924 66.2902 14.2599C66.8698 14.8275 67.5568 15.2736 68.311 15.5721C69.0653 15.8707 69.8715 16.0157 70.6825 15.9987C72.0374 16.0045 73.3498 15.5266 74.3836 14.6508V15.6994H77.3138V4.10816L74.3836 4.11355ZM70.9251 13.454C70.2222 13.462 69.5329 13.2609 68.9446 12.8761C68.3563 12.4914 67.8957 11.9405 67.6212 11.2933C67.3468 10.6462 67.271 9.9321 67.4034 9.24177C67.5358 8.55143 67.8704 7.91604 68.3648 7.41635C68.8591 6.91666 69.4909 6.57522 70.1798 6.43544C70.8687 6.29566 71.5835 6.36385 72.2336 6.63133C72.8836 6.89881 73.4395 7.35351 73.8304 7.93764C74.2214 8.52178 74.4299 9.20897 74.4295 9.91189C74.4337 10.3753 74.3461 10.8349 74.1715 11.2641C73.997 11.6934 73.7391 12.0838 73.4127 12.4127C73.0863 12.7416 72.6979 13.0025 72.27 13.1803C71.842 13.3581 71.3831 13.4493 70.9197 13.4486L70.9251 13.454Z"
                  fill="white"
                />
                <path
                  d="M45.7909 6.28355C44.3164 6.28355 43.2705 7.43728 43.2705 9.20832V15.7048H41.0196V4.2699H43.2435V5.66625C43.5178 5.20345 43.9109 4.82243 44.3821 4.56269C44.8532 4.30295 45.3852 4.17394 45.923 4.18903H46.7317V6.28355H45.7909ZM39.4642 9.98736C39.4642 6.57737 37.0382 4.02729 33.7549 4.02729C32.9791 4.03256 32.212 4.19116 31.4978 4.49398C30.7836 4.7968 30.1363 5.23786 29.5931 5.79177C29.05 6.34569 28.6217 7.00154 28.333 7.72158C28.0443 8.44162 27.9007 9.21165 27.9107 9.98736C27.9107 13.3947 30.539 15.9717 33.9678 15.9717C34.9256 15.9898 35.8737 15.7774 36.7323 15.3523C37.5908 14.9273 38.3345 14.3021 38.9009 13.5294L37.2673 12.3326C36.8925 12.8556 36.3966 13.2802 35.822 13.5698C35.2474 13.8594 34.6112 14.0056 33.9678 13.9958C33.0515 13.9915 32.167 13.659 31.4746 13.0587C30.7823 12.4583 30.3279 11.6298 30.1939 10.7233H39.4696L39.4642 9.98736ZM30.2424 8.93876C30.6441 7.19468 32.0377 6.01398 33.7279 6.01398C35.4181 6.01398 36.809 7.19468 37.1864 8.93876H30.2424ZM20.7807 4.02729C20.0285 4.02793 19.2839 4.17762 18.5898 4.46772C17.8958 4.75782 17.2662 5.18259 16.7373 5.71746V0H14.4864V15.7048H16.7103V14.2546C17.7877 15.3445 19.2536 15.9621 20.7861 15.9717C21.5811 15.9886 22.3714 15.8466 23.1108 15.5541C23.8501 15.2615 24.5237 14.8243 25.0918 14.2681C25.66 13.7118 26.1114 13.0477 26.4196 12.3148C26.7278 11.5818 26.8866 10.7946 26.8866 9.9995C26.8866 9.20436 26.7278 8.41722 26.4196 7.68424C26.1114 6.95126 25.66 6.28717 25.0918 5.73093C24.5237 5.17469 23.8501 4.73748 23.1108 4.44494C22.3714 4.15239 21.5811 4.0104 20.7861 4.02729H20.7807ZM20.619 13.9607C19.8344 13.9645 19.0664 13.7351 18.4125 13.3016C17.7585 12.8682 17.248 12.2503 16.9458 11.5262C16.6436 10.8022 16.5633 10.0047 16.715 9.23496C16.8668 8.46521 17.2438 7.75788 17.7982 7.20273C18.3525 6.64758 19.0594 6.26962 19.8289 6.11681C20.5984 5.96401 21.396 6.04325 22.1205 6.34447C22.8449 6.64569 23.4636 7.15533 23.8979 7.8087C24.3322 8.46208 24.5627 9.22976 24.56 10.0143C24.5607 10.5318 24.4592 11.0443 24.2614 11.5225C24.0635 12.0007 23.7731 12.4351 23.407 12.8007C23.0408 13.1664 22.606 13.4562 22.1276 13.6534C21.6492 13.8506 21.1365 13.9514 20.619 13.95V13.9607ZM6.19729 13.8529C8.36998 13.8529 10.0575 12.187 10.0575 9.69084V0H12.3892V15.7048H10.0844V14.2195C9.54593 14.776 8.90017 15.2175 8.18617 15.5173C7.47217 15.8171 6.70478 15.9689 5.93042 15.9636C2.57973 15.9636 0 13.5214 0 9.81754V0H2.37486V9.70432C2.37486 12.214 3.99225 13.8529 6.19729 13.8529Z"
                  fill="white"
                />
              </svg>
            </div>
          </MuiNextLink>
        </Grid>
      </Box>
      {/* </Stack> */}
    </Container>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer('right', true)}
        sx={{
          color: 'primary.main',
          display: { xs: `inline`, md: `none` },
        }}
      >
        <Menu fontSize="large" />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('anchor', true)}
        sx={{
          '.MuiDrawer-paper': {
            bgcolor: 'primary.main',
            width:  '100%' ,
            maxWidth: 375,
            //display: { md: `none` }
            //height: 812,
          },
          '.MuiBackdrop-root': {
            backgroundColor: 'rgba(255,255,255,.6)',
          },
        }}
      >
        {list('right')}
      </SwipeableDrawer>
    </>
  );
};

export default SideDrawer;
