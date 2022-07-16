import React, {Component} from 'react';
import '../../styles/AboutUs/SectionAboutUs.css'
import about from '../../images/AboutUs.png'
import apple from '../../images/apple.png'

class SectionAboutUs extends Component {
    render() {
        return (
            <>
                <div className="Container">
                    <div className="About__section d-flex justify-content-between align-items-center">
                        <div className="About__text">
                            <h2 className="About__shop">о магазине</h2>
                            <div className="About__rates mb-3">
                                <div className="Number__rates mt-3">
                                    <h2>1800+</h2>
                                    <h4>отзывов</h4>
                                </div>
                                <div className="Rates__description">
                                    <p>Реальные отзывы На яндекс, гугл картах и вайлдберис</p>
                                </div>
                            </div>
                            <div className="About__rates mb-3">
                                <div className="Number__rates mt-3">
                                    <h2>4</h2>
                                    <h4>ГОДА</h4>
                                </div>
                                <div className="Rates__description">
                                    <p>Продаем казаные и аксессуары в Беларуси и России</p>
                                </div>
                            </div>
                            <div className="About__rates">
                                <div className="Number__rates mt-3">
                                    <h4>официальный дилер</h4>
                                </div>
                                <div className="Rates__description">
                                    <p>Работаем напрямую с заводами и <span
                                        className="Text__gold">имеем сертификаты</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="About__photo mt-5">
                            <img className="mt-5" src={about} alt=""/>
                        </div>
                    </div>
                    <div className="Why__we">
                        <h2>почему выбирают нас</h2>
                        <div className="Cards__about">
                            <div className="Card__about">
                                <img className="mb-3" src={apple} alt=""/>
                                <h3>Доставка за 4 часа <br/> по Узбекистану</h3>
                                <p>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon
                                    speligen holigt. </p>
                            </div>
                            <div className="Card__about">
                                <img className="mb-3" src={apple} alt=""/>
                                <h3>Доставка за 4 часа <br/> по Узбекистану</h3>
                                <p>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon
                                    speligen holigt. </p>
                            </div>
                            <div className="Card__about">
                                <img className="mb-3" src={apple} alt=""/>
                                <h3>Доставка за 4 часа <br/> по Узбекистану</h3>
                                <p>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon
                                    speligen holigt. </p>
                            </div>
                            <div className="Card__about">
                                <img className="mb-3" src={apple} alt=""/>
                                <h3>Доставка за 4 часа <br/> по Узбекистану</h3>
                                <p>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon
                                    speligen holigt. </p>
                            </div>
                            <div className="Card__about">
                                <img className="mb-3" src={apple} alt=""/>
                                <h3>Доставка за <br/> 4 часа по Узбекистану</h3>
                                <p>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon
                                    speligen holigt. </p>
                            </div>
                            <div className="Card__about">
                                <img className="mb-3" src={apple} alt=""/>
                                <h3>Доставка за 4 часа <br/>по Узбекистану</h3>
                                <p>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon
                                    speligen holigt. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SectionAboutUs;