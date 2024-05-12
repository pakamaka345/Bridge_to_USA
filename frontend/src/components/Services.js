import React from "react";

import './MainPage.css';

export default function Services() {
    const [ scrollPosition, setScrollPosition ] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className="services" id="services">
            <div className={`process-step-left ${scrollPosition > 750 ? 'slide-in-left' : ''}`}>
                <p>ОБГОВОРЕННЯ ДЕТАЛЕЙ - ПЕРШИЙ КРОК ДО РЕАЛІЗАЦІЇ ВАШОЇ МРІЇ.</p>
            </div>
            <div className={`process-step-right ${scrollPosition > 950 ? 'slide-in-right' : ''}`}>
                <p>ПІДПИСАННЯ ДОГОВОРУ ТА ВНЕСЕННЯ ПРЕДОПЛАТИ - МАКСИМАЛЬНА ЗАБЕЗПЕЧЕНІСТЬ У ВАШИХ ДІЯХ.</p>
            </div>
            <div className={`process-step-left ${scrollPosition > 1150 ? 'slide-in-left' : ''}`}>
                <p>ПОДАЧА СПОНСОРА ПЕТИЦІЇ НА ВАШЕ ІМʼЯ ДО МІГРАЦІЙНОЇ СЛУЖБИ – ВАША СПОКІЙНА ПЕРЕВІРКА, ЩО МИ ВЖЕ ПРАЦЮЄМО ЗА ВАС.</p>
            </div>
            <div className={`process-step-right ${scrollPosition > 1350 ? 'slide-in-right' : ''}`}>
                <p>РОЗГЛЯД СПРАВИ ТА ОБОВ’ЯЗКОВЕ ЗАТВЕРДЖЕННЯ ФОРМИ – КРОК ЗА КРОКОМ ДО ВАШОГО МЕТИ.</p>
            </div>
            <div className={`process-step-left ${scrollPosition > 1550 ? 'slide-in-left' : ''}`}>
                <p>СТВОРЕННЯ КАБІНЕТУ НА ВАШЕ ІМʼЯ ТА ВАС НА ДОЗВІЛ НА ВʼЇЗД – ВАША ОСОБИСТА ПІДТРИМКА НА КОЖНОМУ ЕТАПІ.</p>
            </div>
            <div className={`process-step-right ${scrollPosition > 1750 ? 'slide-in-right' : ''}`}>
                <p>ПЕРЕДАЧА КАБІНЕТУ ТА ВНЕСЕННЯ ПОВНОЇ ОПЛАТИ – ВАША ГАРАНТІЯ УСПІШНОГО ЗАВЕРШЕННЯ.</p>
            </div>
        </div>
    );
}