import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import MuiNextLink from './MuiNextLink';
import Link from '@mui/material/Link';
import Image from 'next/image';
import { useState } from 'react';

const SideDrawer = ({ navLinks }) => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Container>
      <Box
        // sx={{ width: 250, marginTop: `auto`, marginBottom: `auto` }}
        sx={{ width: 250, mt: 5, mb: 15 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        {navLinks.map(({ title, path }, i) => (
          <Typography
            variannt="button"
            vaariant="h3"
            key={`${title}${i}`}
            sx={{
              ml: 5,
              my: 2,
              textTransform: `uppercase`,
              fontSize: 'h3',
            }}
          >
            <MuiNextLink
              href={path}
              variant="button"
              underline="hover"
              sx={{
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

      {/* TODO ICONS */}

      <Stack direction="column" spacing={2}>
        <Box>
          <Typography
            color="primary.contrastText"
            // variant="h5"
            variant="button"
            align="center"
            sx={{
              ml: 5,
              my: 2,
              // textTransform: `uppercase`,
              color: 'secondary.main',
            }}
          >
            Find Sushi Rollin’ On
          </Typography>
        </Box>
        <hr></hr>
        {/* <Divider variant="middle" /> */}
        {/* <Divider /> */}

        <Grid item direction="column">
          <MuiNextLink
            href="https://www.doordash.com/store/sushi-rollin-garland-1775965/"
            variant="button"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{
              ml: 5,
              my: 2,

              opacity: 1,

              '&:hover': {
                color: 'secondary.main',
                backgroundColor: 'transparent',
                textUnderlineOffset: '50%',
              },
            }}
          >
            <Image
              src="/home_page/DoorDash_Logo.svg"
              alt="Door Dash"
              // layout="responsive"
              width="154"
              height="19"
            />
          </MuiNextLink>
        </Grid>
        <Grid item direction="column">
          <MuiNextLink
            href="https://www.ubereats.com/store/sushi-rollin/6P3FSDejTAuapBvlNZGQaQ?diningMode=DELIVERY&ps=1"
            variant="button"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{
              color: 'text',
              ml: 5,
              my: 2,
              textTransform: `uppercase`,
              opacity: 1,
              textTransform: 'none',
              '&:hover': {
                color: 'secondary.main',
                backgroundColor: 'transparent',
                textUnderlineOffset: '50%',
              },
            }}
          >
            <Image
              src="/home_page/ubereats.svg"
              alt="Grub hub"
              // layout="responsive"
              width="100"
              height="16"
            />
          </MuiNextLink>
        </Grid>
        <Grid item direction="column">
          <MuiNextLink
            href="https://www.grubhub.com/restaurant/sushi-rollin-6850-n-shiloh-rd-garland/2769858"
            variant="button"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{
              color: 'text',
              ml: 5,
              my: 2,
              textTransform: `uppercase`,
              opacity: 1,
              textTransform: 'none',
              '&:hover': {
                color: 'secondary.main',
                backgroundColor: 'transparent',
                textUnderlineOffset: '50%',
              },
            }}
          >
            <Image
              src="/home_page/grubhub.svg"
              alt="Grub hub"
              // layout="responsive"
              width="96"
              height="21"
            />
          </MuiNextLink>
        </Grid>
        <Grid item direction="column">
          <MuiNextLink
            href="https://www.yelp.com/biz/sushi-rollin-garland"
            variant="button"
            underline="hover"
            sx={{
              color: 'text',
              ml: 5,
              my: 2,
              textTransform: `uppercase`,
              opacity: 1,
              textTransform: 'none',
              '&:hover': {
                color: 'secondary.main',
                backgroundColor: 'transparent',
                textUnderlineOffset: '50%',
              },
            }}
          >
            <Image
              src="/home_page/yelp.svg"
              alt="Yelp"
              // layout="responsive"
              width="59"
              height="21"
            />
          </MuiNextLink>
        </Grid>
      </Stack>
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
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        sx={{
          '.MuiDrawer-paper': {
            bgcolor: 'primary.main',
          },
        }}
      >
        {list('right')}
      </Drawer>
    </>
  );
};

export default SideDrawer;
