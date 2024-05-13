import React from "react";
import './MainPage.css';

export default function Visa() {
    return (
        <div className="visa-container" id="visa">
            <hr/>
            <div className="visa-text">
                <h2>ТАКОЖ МИ ПОДАЄМО ВАС НА ТУРИСТИЧНІ ВІЗИ ДО США</h2>
                <ul>
                    <li>ОДИНОЧНІ:
                        <ul>
                            <li>дорослий - 350$</li>
                            <li>діти - 300$</li>
                        </ul>
                    </li>
                    <li>ПАРНІ:
                        <ul>
                            <li>двоє дорослих - 640$</li>
                            <li>двоє дорослих і дитина - 820$</li>
                            <li>двоє дорослих і двоє дітей - 1000$</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <hr/>
        </div>
    );
}
