import React from "react";

import './MainPage.css';

export default function Services() {
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 600);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            console.log(scrollPosition);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        }
    }, [scrollPosition]);

    let translateValue;
    if (isMobile) {
        translateValue = 595;
    } else {
        translateValue = 375;
    }
    const style = isMobile ? {} : (scrollPosition < 1190 || scrollPosition > 1790) ? //center = 1490 up = 1090 down = 1790
        {
            transform: `translateX(${-scrollPosition * 0.249 + translateValue}%)`,
            transition: 'transform 7s ease-out'
        }
    :
        {
            transform: `translateX(0)`,
            transition: 'transform 1s ease-out'
        };

   /* const style = isMobile ? {} : {
        transform: `translateX(0)%`,
        transition: 'transform 0.5s ease-out'
    };*/

    const mobileScrollValues = [ 1450, 1650, 1850, 2050, 2250, 2450]  // Change these values as per your requirement for mobile
    const desktopScrollValues = [1050, 1150, 1350, 1550, 1750, 1950]; // Change these values as per your requirement for desktop

    return (
        <div className="services" id="services">
            <div className="process-name-bar">
                <h2 style={style}>
                    У НАС ВСЕ ГОТОВЕ ДЛЯ ВАШОГО УСПІШНОГО МАЙБУТНЬОГО!
                </h2>
            </div>
            <div className={`process-step-left ${scrollPosition > (isMobile ? mobileScrollValues[0] : desktopScrollValues[0]) ? 'slide-in-left' : ''}`}>
                <p>ОБГОВОРЕННЯ ДЕТАЛЕЙ - ПЕРШИЙ КРОК ДО РЕАЛІЗАЦІЇ ВАШОЇ МРІЇ.</p>
            </div>
            <div className={`process-step-right ${scrollPosition > (isMobile ? mobileScrollValues[1] : desktopScrollValues[1]) ? 'slide-in-right' : ''}`}>
                <p>ПІДПИСАННЯ ДОГОВОРУ ТА ВНЕСЕННЯ ПРЕДОПЛАТИ - МАКСИМАЛЬНА ЗАБЕЗПЕЧЕНІСТЬ У ВАШИХ ДІЯХ.</p>
            </div>
            <div className={`process-step-left ${scrollPosition > (isMobile ? mobileScrollValues[2] : desktopScrollValues[2]) ? 'slide-in-left' : ''}`}>
                <p>ПОДАЧА СПОНСОРА ПЕТИЦІЇ НА ВАШЕ ІМʼЯ ДО МІГРАЦІЙНОЇ СЛУЖБИ – ВАША СПОКІЙНА ПЕРЕВІРКА, ЩО МИ ВЖЕ ПРАЦЮЄМО ЗА ВАС.</p>
            </div>
            <div className={`process-step-right ${scrollPosition > (isMobile ? mobileScrollValues[3] : desktopScrollValues[3]) ? 'slide-in-right' : ''}`}>
                <p>РОЗГЛЯД СПРАВИ ТА ОБОВ’ЯЗКОВЕ ЗАТВЕРДЖЕННЯ ФОРМИ – КРОК ЗА КРОКОМ ДО ВАШОЇ МЕТИ.</p>
            </div>
            <div className={`process-step-left ${scrollPosition > (isMobile ? mobileScrollValues[4] : desktopScrollValues[4]) ? 'slide-in-left' : ''}`}>
                <p>СТВОРЕННЯ КАБІНЕТУ НА ВАШЕ ІМʼЯ ТА ВАС НА ДОЗВІЛ НА ВʼЇЗД – ВАША ОСОБИСТА ПІДТРИМКА НА КОЖНОМУ ЕТАПІ.</p>
            </div>
            <div className={`process-step-right ${scrollPosition > (isMobile ? mobileScrollValues[5] : desktopScrollValues[5]) ? 'slide-in-right' : ''}`}>
                <p>ПЕРЕДАЧА КАБІНЕТУ ТА ВНЕСЕННЯ ПОВНОЇ ОПЛАТИ – ВАША ГАРАНТІЯ УСПІШНОГО ЗАВЕРШЕННЯ.</p>
            </div>
        </div>
    );
}