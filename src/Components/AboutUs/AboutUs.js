import React, {Component} from 'react';
import FamousBrands from "../All codes/FamousBrands/famousbrands";

import photoShop from "../All codes/imgs/photoShop.png";
import fastDelivery from "../All codes/imgs/fastDelivery.svg";
import './AboutUsCode.css'


class AboutUs extends Component {
    render() {
        return (
            <>

                <div className="AboutUs">
                    <div className="Container">
                        <div className="AboutShop">
                            <div className="AboutShopContent">
                                <h2>О магазине</h2>
                                <div className="AboutShopContentRows">
                                    <div className="Row-1">
                                        <div className="Row-1Number">
                                            <h6>1800+</h6>
                                            <p>отзывов</p>
                                        </div>
                                        <div className="Row-1Title">
                                            <p> Реальные отзывы
                                                На яндекс, гугл картах и вайлдберис</p>
                                        </div>
                                    </div>
                                    <div className="Row-1">
                                        <div className="Row-1Number">
                                            <h6>4</h6>
                                            <p>ГОДА</p>
                                        </div>
                                        <div className="Row-1Title">
                                            <p>Продаем казаные
                                                и аксессуары
                                                в Беларуси и России</p>
                                        </div>
                                    </div>
                                    <div className="Row-1">
                                        <div className="Row-1Number">
                                            <p>официальный
                                                дилер</p>
                                        </div>
                                        <div className="Row-1Title">
                                            <p>Работаем
                                                напрямую
                                                с заводами и
                                                <span><a href="/#"> имеем сертификаты</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="AboutShopImg">
                                <img src={photoShop} alt=""/>
                                <button>наш магазин</button>
                            </div>
                        </div>
                        <div className="SecondContent">
                            <h2>Почему выбирают нас</h2>
                            <div className="SecondContentRows">
                                <div className="SecondContentColumn">
                                    <img src={fastDelivery} alt=""/>
                                    <div className="SecondContentTitle">
                                        <h6>Доставка за 4 часа по Узбекистану</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur illo itaque
                                            laudantium nam nemo tenetur.</p>
                                    </div>
                                </div>

                                <div className="SecondContentColumn">
                                    <img src={fastDelivery} alt=""/>
                                    <div className="SecondContentTitle">
                                        <h6>Доставка за 4 часа по Узбекистану</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur illo itaque
                                            laudantium nam nemo tenetur.</p>
                                    </div>
                                </div>
                                <div className="SecondContentColumn">
                                    <img src={fastDelivery} alt=""/>
                                    <div className="SecondContentTitle">
                                        <h6>Доставка за 4 часа по Узбекистану</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur illo itaque
                                            laudantium nam nemo tenetur.</p>
                                    </div>
                                </div>
                                <div className="SecondContentColumn">
                                    <img src={fastDelivery} alt=""/>
                                    <div className="SecondContentTitle">
                                        <h6>Доставка за 4 часа по Узбекистану</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur illo itaque
                                            laudantium nam nemo tenetur.</p>
                                    </div>
                                </div>
                                <div className="SecondContentColumn">
                                    <img src={fastDelivery} alt=""/>
                                    <div className="SecondContentTitle">
                                        <h6>Доставка за 4 часа по Узбекистану</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur illo itaque
                                            laudantium nam nemo tenetur.</p>
                                    </div>
                                </div>
                                <div className="SecondContentColumn">
                                    <img src={fastDelivery} alt=""/>
                                    <div className="SecondContentTitle">
                                        <h6>Доставка за 4 часа по Узбекистану</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur illo itaque
                                            laudantium nam nemo tenetur.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <FamousBrands/>

            </>
        );
    }
}

export default AboutUs;