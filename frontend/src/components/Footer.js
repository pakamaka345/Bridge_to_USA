import * as React from 'react';
import { Link } from 'react-scroll';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Footer() {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0', marginTop: '10px', maxWidth: '100%' }}>
      {matches ? (
        // Mobile version
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <img src={"images/logo.png"} alt="Logo" style={{ height: '80px', marginTop: "20px" }} />
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
              offset={-55}
              duration={500}>
              Про нас
            </Link>
          </Button>
          <Button className='button' color="inherit">
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-180}
              duration={500}>
              Послуги
            </Link>
          </Button>
          <Button className='button' color="inherit">
            <Link
              activeClass="active"
              to="visa"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              Візи
            </Link>
          </Button>
          <Button className='button' color="inherit">
            <Link
              activeClass="active"
              to="reviews"
              spy={true}
              smooth={true}
              offset={-35}
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
              offset={0}
              duration={500}>
              Контакти
            </Link>
          </Button>
        </div>
      ) : (
        // Desktop version
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <img src={"images/logo.png"} alt="Logo" style={{ height: '80px', marginLeft: '150px', marginTop: "20px" }} />
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
              offset={-55}
              duration={500}>
              Про нас
            </Link>
          </Button>
          <Button className='button' color="inherit">
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-180}
              duration={500}>
              Послуги
            </Link>
          </Button>
          <Button className='button' color="inherit">
            <Link
              activeClass="active"
              to="visa"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              Візи
            </Link>
          </Button>
          <Button className='button' color="inherit">
            <Link
              activeClass="active"
              to="reviews"
              spy={true}
              smooth={true}
              offset={-35}
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
              offset={0}
              duration={500}>
              Контакти
            </Link>
          </Button>
        </div>
      )
      }
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        © 2024 Bridge to USA
      </div>
    </footer >
  );
}

