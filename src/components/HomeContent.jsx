import React from 'react'
import '../styles/homepage.css'

export default function HomeContent({ layoutType }) {
    const bonusText = [
        ['30 готовых <br />решений', 'Skype аудит'],
        ['с показателями <br />вашего бизнеса', '30 виджетов'],
        ['отдела продажи <br />и CRM системы', 'Dashboard'],
        ['использования <br />CRM', 'Месяц аmoCRM'],
    ]
    const bonusHeading = ['Виджеты', 'Dashboard', 'Skype Аудит', '35 дней']

    return (
        <div className="home-content">
            <div className="home-block">
                <span className="white-h">
                    Зарабатывайте
                    <br />
                    больше
                </span>
                <span className="color-h">с WELBEX</span>
                <span className="sub-h">
                    Развиваем и контролируем
                    <br />
                    продажи за вас
                </span>
            </div>
            <div className="home-block right">
                <div className="consultation-header">
                    <span className="white-text">Вместе с </span>
                    <span className="upspan">бесплатной</span>
                    <br /> <span className="upspan">консультацией</span>
                    <span className="white-text"> мы дарим:</span>
                </div>
                <div className="consultation-bonus">
                    {bonusText.map((elem, index) => {
                        return layoutType ? (
                            <div className="bonus" key={index}>
                                <div className="gradient-line" />
                                <span className="bonus-text">{elem[1]}</span>
                            </div>
                        ) : (
                            <div className="bonus" key={index}>
                                <span>{bonusHeading[index]}</span>{' '}
                                <span
                                    className="bonus-text"
                                    dangerouslySetInnerHTML={{
                                        __html: elem[0],
                                    }}
                                ></span>
                            </div>
                        )
                    })}
                </div>
                <div className="button">
                    <span>Получить консультацию</span>
                </div>
            </div>
        </div>
    )
}
