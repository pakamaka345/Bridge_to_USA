import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';

import './MainPage.css';

export default function WelcomeScreen() {
    const [scrollPosition, setScrollPosition] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 768) {
                setScrollPosition(window.scrollY);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const style = {
        transform: window.innerWidth > 768 ? `translateY(${-scrollPosition}px)` : 'none',
        transition: 'transform 0.3s ease-out'
    };

    return (
        <div className='welcome-screen' style={style} id='start-page'>
            <img src='/images/flags.png' alt='America' className='welcome-screen img'/>
            <div className='welcome-text'>
                <h1 className='welcome-h'>UNITING FOR UKRAINE</h1>
                <p className='welcome-p'>В зв’язку з російською агресією в Україні 25 квітня 2022 року уряд США розпочав унікальну програму Uniting for Ukraine, яка дає можливість українцям приїжджати в Америку на тимчасове місце проживання з можливістю офіційно працювати.</p>
                <Button className='welcome-button'>
                <Link activeClass='active' to='services' spy={true} smooth={true} offset={-180} duration={500}>ЯК ВІДБУВАЄТЬСЯ ПРОЦЕС</Link>
                </Button>
            </div>
        </div>
    );
}