import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import MuiNextLink from '@components/MuiNextLink';
import { styled } from '@mui/system';
import Navbar from './Navbar';
import SideDrawer from './SideDrawer';
import Image from 'next/image';
// import ScrollToTop from './menu/ScrollToTop';

import HideOnScroll from './HideOnScroll';
import Fab from '@mui/material/Fab';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import BackToTop from './BackToTop';

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
        {/* <ScrollToTop showBelow={500} / */}
      </HideOnScroll>
      <Offset id="back-to-top-anchor" />

      <BackToTop>
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;

// import AppBar from '@mui/material/AppBar';
// import Container from '@mui/material/Container';
// import Toolbar from '@mui/material/Toolbar';
// import MuiNextLink from '@components/MuiNextLink';
// import { styled } from '@mui/system';
// import Navbar from './Navbar';
// import SideDrawer from './SideDrawer';
// import Image from 'next/image';
// import ScrollToTop from './menu/ScrollToTop';

// const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

// const navLinks = [
//   { title: `Home`, path: `/` },
//   { title: `About`, path: `/aboutus` },
//   { title: `Franchise`, path: `/franchise` },
//   { title: `Menu`, path: `/menu` },
//   { title: `Locations`, path: `/locations` },
// ];

// const Header = () => {
//   return (
//     <>
//       {/* <HideOnScroll> */}
//       <AppBar sx={{ bgcolor: 'common.beige' }} position="fixed">
//         <Toolbar>
//           <Container
//             maxWidth="lg"
//             sx={{
//               display: `flex`,
//               justifyContent: `space-between`,
//               alignItems: `center`,
//             }}
//           >
//             <MuiNextLink activeClassName="active" href="/">
//               <Image
//                 src="/rollinlogodark.svg"
//                 alt="logo"
//                 width="257"
//                 height="44"
//               />
//             </MuiNextLink>

//             <Navbar navLinks={navLinks} />
//             <SideDrawer navLinks={navLinks} />
//           </Container>
//         </Toolbar>
//       </AppBar>
//       <ScrollToTop showBelow={500} />
//       {/* </HideOnScroll> */}
//       <Offset id="back-to-top-anchor" />
//     </>
//   );
// };

// export default Header;
