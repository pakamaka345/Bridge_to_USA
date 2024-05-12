import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Popover from '@mui/material/Popover';
import { Avatar, List, ListItem, Slide, useMediaQuery } from '@mui/material';
import { Link } from 'react-scroll';
import { useTheme } from '@mui/material/styles';
import './AmericanBar.css'



export default function ButtonAppBar() {
  const navRef = React.useRef(null);
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const isVertical = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerOpen = () => {
    setAnchorEl(navRef.current);
  }

  const handleDrawerClose = () => {
    setAnchorEl(null);
  }
  const open = Boolean(anchorEl);


  return (
    <div className='mainDiv'>
      <div className='navDiv' ref={navRef}>
        <Toolbar className='toolBar'>
          <Avatar alt="Ticket to America" src="/images/avatar.jpg" style={{height: '50px', width: '50px'}}/>
          <div>
            {isMatch ? (
              <>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                  <MenuIcon />
                </IconButton>
                <Popover 
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleDrawerClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  fullWidth
                  TransitionComponent={Slide}
                  >
                  <List style={{ display: 'flex', flexDirection: isVertical ? 'column' : 'row'}}>
                    <ListItem>
                      <Button className='button' color="inherit"><Link activeClass='active' to='start-page' spy={true} offset={-15} duration={500}>Головна</Link></Button>
                    </ListItem>
                    <ListItem>
                      <Button className='button' color="inherit"><Link activeClass='active' to='about-us' spy={true} offset={-15} duration={500}>Про нас</Link></Button>
                    </ListItem>
                    <ListItem>
                      <Button className='button' color="inherit"><Link activeClass='active' to='visa' spy={true} offset={-15} duration={500}>Візи</Link></Button>
                    </ListItem>
                    <ListItem>
                      <Button className='button' color="inherit"><Link activeClass='active' to='services' spy={true} offset={-15} duration={500}>Послуги</Link></Button>
                    </ListItem>
                    <ListItem>
                      <Button className='button' color="inherit"><Link activeClass='active' to='reviews' spy={true} offset={-15} duration={500}>Відгуки</Link></Button>
                    </ListItem>
                    <ListItem>
                      <Button className='button' color="inherit"><Link activeClass='active' to='contacts' spy={true} offset={-15} duration={500}>Контакти</Link></Button>
                    </ListItem>
                  </List>
                </Popover>
              </>
            ) : (
              <>
                <Button className='button' color="inherit" style={{ marginLeft: 'auto', fontWeight: 'bold' }}>
                  <Link
                    activeClass="active"
                    to="start-page"
                    spy={true}
                    smooth={true}
                    offset={-15}
                    duration={500}>
                      Головна
                  </Link>
                </Button>
                <Button className='button' color="inherit">
                  <Link
                    activeClass="active"
                    to="about-us"
                    spy={true}
                    smooth={true}
                    offset={-15}
                    duration={500}>
                      Про нас
                  </Link>
                </Button>
                <Button className='button' color="inherit">
                  <Link
                    activeClass="active"
                    to="visa"
                    spy={true}
                    smooth={true}
                    offset={-15}
                    duration={500}>
                      Візи
                  </Link>
                </Button>
                <Button className='button' color="inherit">
                  <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-15}
                    duration={500}>
                      Послуги
                  </Link>
                </Button>
                <Button className='button' color="inherit">
                  <Link
                    activeClass="active"
                    to="reviews"
                    spy={true}
                    smooth={true}
                    offset={-15}
                    duration={500}>
                      Відгуки
                  </Link>
                </Button>
                <Button className='button' color="inherit">
                  <Link
                    activeClass="active"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-15}
                    duration={500}>
                      Контакти
                    </Link>
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </div>
    </div>
  );
}

