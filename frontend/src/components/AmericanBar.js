import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Popover from '@mui/material/Popover';
import { Avatar, List, ListItem, Slide, useMediaQuery } from '@mui/material';
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
          <Avatar alt="Ticket to America" src="/static/images/avatar/ticketToAmerica.png" />
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
                      <Button className='button' color="inherit">Головна</Button>
                    </ListItem>
                    <ListItem>
                      <Button className='button' color="inherit">Про нас</Button>
                    </ListItem>
                    <ListItem>
                      <Button className='button' color="inherit">Візи</Button>
                    </ListItem>
                    <ListItem>
                      <Button className='button' color="inherit">Послуги</Button>
                    </ListItem>
                    <ListItem>
                      <Button className='button' color="inherit">Відгуки</Button>
                    </ListItem>
                    <ListItem>
                      <Button className='button' color="inherit">Контакти</Button>
                    </ListItem>
                  </List>
                </Popover>
              </>
            ) : (
              <>
                <Button className='button' color="inherit" style={{ marginLeft: 'auto', fontWeight: 'bold' }}>Головна</Button>
                <Button className='button' color="inherit">Про нас</Button>
                <Button className='button' color="inherit">Візи</Button>
                <Button className='button' color="inherit">Послуги</Button>
                <Button className='button' color="inherit">Відгуки</Button>
                <Button className='button' color="inherit">Контакти</Button>
              </>
            )}
          </div>
        </Toolbar>
      </div>
    </div>
  );
}

//так дивись тепер я хочу добавити кнопки в навігаційне меню 1) Головна сторінка яка буде відправляти на верх сторінки де буде короткий опис послуг United for Ukraine та допомоги у візах до США 2) Про нас яка буде також відправляти на ту саму сторінку але нище де буде описано про послуги і фірму. 3) Послуги - та сама сторінка, але ще трохи нище. 4) Відгуки буде посилати на іншу сторінку де будуть відображенні відгуки, і форма залишити відгук, і кнопка більше відгуків з посиланням на інстаграм. 5) Контакти головна сторінка але нище після послуг буде посилання на соц мережі і форма (Залишити свої дані ми перезвонимо). 6 Візи - окрема сторінка де будуть описані візи які надає фірма. Зараз созередься на додаваню самих кнопок як html + css не реалізовуй функцонал переходу кнопок, і не реалізовуй решту частину сайту, тільки самі кнопки і їх вигляд. Використовуй для цього material_ui
//1) Головна сторінка яка буде відправляти на верх сторінки де буде короткий опис послуг United for Ukraine та допомоги у візах до США 2) Про нас яка буде також відправляти на ту саму сторінку але нище де буде описано про послуги і фірму. 3) Послуги - та сама сторінка, але ще трохи нище. 4) Відгуки буде посилати на іншу сторінку де будуть відображенні відгуки, і форма залишити відгук, і кнопка більше відгуків з посиланням на інстаграм. 5) Контакти головна сторінка але нище після послуг буде посилання на соц мережі і форма (Залишити свої дані ми перезвонимо). 6 Візи - окрема сторінка де будуть описані візи які надає фірма.