import React from 'react'
import '../styles/header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="navbar">
                <div className="logo">
                    <img
                        src={process.env.PUBLIC_URL + '/logo.svg'}
                        alt="logo"
                    />
                    <span className="logo-text">
                        крупный интегратор CRM
                        <br />в Росcии и ещё 8 странах
                    </span>
                </div>
                <div className="menu">
                    <span>Услуги</span>
                    <span>Виджеты</span>
                    <span>Интеграции</span>
                    <span>Кейсы</span>
                    <span className="not-on-mobile">Сертификаты</span>
                </div>
            </div>
            <div className="header-contacts">
                <span>+7 555 555-55-55</span>
                <div className="header-messengers">
                    {' '}
                    <img
                        src={process.env.PUBLIC_URL + '/telegram.svg'}
                        alt="t"
                    />
                    <img src={process.env.PUBLIC_URL + '/viber.svg'} alt="v" />
                    <img
                        src={process.env.PUBLIC_URL + '/whatsup.svg'}
                        alt="w"
                    />
                </div>
            </div>
        </div>
    )
}
