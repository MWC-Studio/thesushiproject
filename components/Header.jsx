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

const Header = () => {
  return (
    <>
      <HideOnScroll>     
      <AppBar sx={{ bgcolor: 'common.beige' }} position="fixed">
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{
              display: `flex`,
              justifyContent: `space-between`,
              alignItems: `center`,
            }}
          >
            <MuiNextLink activeClassName="active" href="/">
              <Image
                src="/rollinlogodark.svg"
                alt="logo"
                width="257"
                height="44"
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