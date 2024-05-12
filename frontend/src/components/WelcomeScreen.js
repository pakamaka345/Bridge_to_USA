import React from 'react';

import './MainPage.css';

export default function WelcomeScreen() {
    const [scrollPosition, setScrollPosition] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const style = {
        transform: `translateY(${-scrollPosition * 3}px)`
    };

    return (
        <div className='welcome-screen' style={style}>
            <img src='/images/america-statue-of-liberty.gif' alt='America' className='welcome-screen img'/>
            <div className='welcome-text'>
                <h1>Вітаємо вас на сайті!</h1>
                <p>Ми надаємо допомогу у візах до США. Наша команда експертів забезпечить вам найкращий досвід та максимальні шанси на успіх.</p>
            </div>
        </div>
    );
}