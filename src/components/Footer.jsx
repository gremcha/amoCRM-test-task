import React from 'react'
import '../styles/footer.css'

export default function Footer({ layoutType }) {
    const menuText = [
        ['Кейсы', 'Благодарность клиентов'],
        ['Благодарственные письма', 'Кейсы'],
    ]

    return (
        <div className="footer">
            <div className="main-info">
                <div className="block">
                    <span className="title">О компании</span>
                    <div className="content">
                        <span>Партнёрская программа</span>
                        <span>Вакансии</span>
                    </div>
                </div>
                <div className="block">
                    <span className="title">Меню</span>
                    <div className="menu-content">
                        <div className="content">
                            <span>Расчёт стоимости</span>
                            <span>Услуги</span>
                            <span>Виджеты</span>
                            <span>Интеграции</span>
                            <span>Наши клиенты</span>
                        </div>
                        <div className="content">
                            {menuText.map((elem, index) => {
                                return layoutType ? (
                                    <span>{elem[1]}</span>
                                ) : (
                                    <span>{elem[0]}</span>
                                )
                            })}
                            <span>Сертификаты</span>
                            <span>Блог на Youtube</span>
                            <span>Вопрос / Ответ</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block contacts">
                <span className="title">Контакты</span>
                <span>+7 555 555-55-55</span>
                <div className="messengers">
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
                <span>Москва, Путевой проезд 3с1, к 902</span>
                <div className="legal-info">
                    <span>©WELBEX 2022. Все права защищены.</span>
                    <span className="underline-text">
                        Политика конфиденциальности
                    </span>
                </div>
            </div>
        </div>
    )
}
