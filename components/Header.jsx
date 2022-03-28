//

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import MuiNextLink from '@components/MuiNextLink';
import { styled } from '@mui/system';
import Navbar from './Navbar';
import SideDrawer from './SideDrawer';
import Image from 'next/image';
import ScrollToTop from './menu/ScrollToTop';
import HideOnScroll from './HideOnScroll';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const navLinks = [
  { title: `Home`, path: `/` },
  { title: `About`, path: `/aboutus` },
  { title: `Franchise`, path: `/franchise` },
  { title: `Menu`, path: `/menu` },
  { title: `Locations`, path: `/locations` },
];

const Header = ({ isMobile }) => {
  return (
    <>
      <HideOnScroll>
        <AppBar
          sx={{
            bgcolor: 'common.beige',
            display: 'flex',
            justifyContent: 'center',
            height: isMobile ? 68 : 98,
            '& button': {
              width: 50,
              height: 50,
            },
            '& button > svg': {
              width: 20,
              height: 20,
            },
          }}
          position="fixed"
        >
          <Toolbar sx={{ ml: isMobile ? 0 : -3, mr: isMobile ? 0 : -3 }}>
            {/* <Toolbar> */}
            <Container
              maxWidth="lg"
              sx={{
                display: `flex`,
                justifyContent: `space-between`,
                alignItems: `center`,
                // mb: 1,
                // mt: 1,

                // py: isMobile ? 1 : 1.5,
              }}
            >
              <MuiNextLink
                activeClassName="active"
                href="/"
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Image
                  src="/rollinlogodark.svg"
                  alt="logo"
                  // width={isMobile ? '147.63' : '256.36'}
                  // height={isMobile ? '24.58' : '43.26'}
                  width={isMobile ? '147.63' : '208'}
                  height={isMobile ? '24.58' : '36'}
                />
              </MuiNextLink>

              <Navbar navLinks={navLinks} />
              <SideDrawer navLinks={navLinks} />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <ScrollToTop showBelow={500} />
      <Offset id="back-to-top-anchor" />
    </>
  );
};

export default Header;
