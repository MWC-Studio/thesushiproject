import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import MuiNextLink from './MuiNextLink';

const Navbar = ({ navLinks }) => {
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
        mr: -2.8,
      }}
    >
      <Stack direction="row" spacing={4}>
        {navLinks.map(({ title, path }, i) => (
          <MuiNextLink
            key={`${title}${i}`}
            href={path}
            // variant="button"
            variant="h3"
            underline="hover"
            sx={{
              color: 'text',
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
        ))}
      </Stack>
    </Toolbar>
  );
};

export default Navbar;
