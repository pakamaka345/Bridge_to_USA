import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, List, useMediaQuery, SwipeableDrawer } from '@mui/material';
import { Link } from 'react-scroll';
import { useTheme } from '@mui/material/styles';
import './AmericanBar.css'

export default function ButtonAppBar() {
  const navRef = React.useRef(null);

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const isVertical = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  }

  const navButtons = (
    <>
      <Button className='button' color="inherit">
        <Link activeClass="active" to="start-page" spy={true} smooth={true} offset={-15} duration={500}>Головна</Link>
      </Button>
      <Button className='button' color="inherit">
        <Link activeClass="active" to="about-us" spy={true} smooth={true} offset={-55} duration={500}>Про нас</Link>
      </Button>
      <Button className='button' color="inherit">
        <Link activeClass="active" to="services" spy={true} smooth={true} offset={-180} duration={500}>Послуги</Link>
      </Button>
      <Button className='button' color="inherit">
        <Link activeClass="active" to="visa" spy={true} smooth={true} offset={-100} duration={500}>Візи</Link>
      </Button>
      <Button className='button' color="inherit">
        <Link activeClass="active" to="reviews" spy={true} smooth={true} offset={-35} duration={500}>Відгуки</Link>
      </Button>
      <Button className='button' color="inherit">
        <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={0} duration={500}>Контакти</Link>
      </Button>
    </>
  );

  return (
    <div className='mainDiv'>
      <div className='navDiv' ref={navRef}>
        <Toolbar className='toolBar'>
          <Avatar alt="Ticket to America" src="/images/franklin.jpg" style={{ height: '50px', width: '50px' }} />
          {isMatch ? (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          ) : (
            <div style={{ marginLeft: 'auto' }}>
              {navButtons}
            </div>
          )}
        </Toolbar>
        <SwipeableDrawer
          open={drawerOpen}
          onClose={handleDrawerClose}
          onOpen={handleDrawerOpen}
          anchor='right'
          sx={{
            '.MuiDrawer-paper': {
              position: 'fixed',
              zIndex: theme.zIndex.modal + 1, // змініть це значення
            },
          }}
        >
          <List style={{ display: 'flex', flexDirection: isVertical ? 'column' : 'row' }}>
            {navButtons}
          </List>
        </SwipeableDrawer>
      </div>
    </div>
  );
}