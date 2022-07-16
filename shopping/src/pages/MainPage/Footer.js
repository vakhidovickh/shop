import React, {Component} from 'react';
import '../../styles/MainPage/Footer.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'
import logo from '../../images/logo.png'

class Footer extends Component {
    render() {
        return (
            <>
                <div className="Footer">
                    <div className="Container">
                        <div className="Footer__items">
                            <div className="Footer__information">
                                <h4>Иинформация</h4>
                                <ul>
                                    <li><a href="#">О нас</a></li>
                                    <li><a href="#">Условия использования</a></li>
                                    <li><a href="#">Оплата и доставка</a></li>
                                    <li><a href="#">Как заказать</a></li>
                                    <li><a href="#">Вопросы и ответы</a></li>
                                </ul>
                            </div>
                            <div className="Footer__category">
                                <h4>КАТЕГОРИИ ТОВАРОВ</h4>
                                <ul>
                                    <li><a href="#">Фотоаппараты</a></li>
                                    <li><a href="#">Аксессуары для студии</a></li>
                                    <li><a href="#">Вспышки для фотоаппаратов</a></li>
                                    <li><a href="#">Аксессуары для камеры</a></li>
                                    <li><a href="#">Штативы</a></li>
                                    <li><a href="#">Видеокамеры</a></li>
                                </ul>
                            </div>
                            <div className="Footer__contact">
                                <div className="Number mt-4 d-flex align-items-center">
                                    <div className="Contact d-flex align-items-center">
                                        <BsFillTelephoneFill/>
                                        <h3>+99899 000 00 00</h3>
                                    </div>
                                    <button className="btn btn-danger">ЗАКАЗАТЬ ЗВОНОК</button>
                                </div>
                                <div className="d-flex">
                                    <div className="Adress">
                                        <p>Yunusobod tumani -22 kvartal</p>
                                        <h4>Эл.почта: webdesigner@gmail.com</h4>
                                        <input type="search" placeholder="Поиск" id="footer"/>
                                    </div>
                                    <div className="icons">
                                        <FiFacebook/>
                                        <BsInstagram/>
                                        <AiOutlineTwitter/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Footer__copyright d-flex">
                            <div className="Footer__logo">
                                <img src={logo} alt=""/>
                            </div>
                            <p>© 2022 Lift Media. All Rights Reserved. </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;
