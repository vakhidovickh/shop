import React, {Component} from 'react';
import './Footer.css'
import logo from '../imgs/logoWhite.png'
import { RiTelegramLine} from 'react-icons/ri'
import {  IoLogoInstagram} from 'react-icons/io'
import { RiFacebookCircleLine} from 'react-icons/ri'

export default class Footer extends Component {
   render() {
      return (
          <>
             <div className="Footer">
                <div className="FooterContent Container">
                   <div className="FooterTop">
                      <div className="FooterLogo2">
                         <a href="/"><span><img src={logo} alt=""/></span></a>
                      </div>
                      <div className="FooterLinks">
                         <ul className="Nav-1">
                            <li><h3>Информация</h3></li>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#"> Условия использования</a></li>
                            <li><a href="#"> Оплата и доставка</a></li>
                            <li><a href="#"> Как заказать</a></li>
                            <li><a href="#"> Вопросы и ответы</a></li>
                         </ul>
                         <ul className="Nav-1">
                            <li><h3>Категории товаров</h3></li>
                            <li><a href="#">Объективы</a></li>
                            <li><a href="#"> Аксессуары для студии</a></li>
                            <li><a href="#"> Вспышки для фотоаппаратов</a></li>
                            <li><a href="#"> Аксессуары для камеры</a></li>
                            <li><a href="#"> Штативы</a></li>
                            <li><a href="#"> Аксессуары для камеры</a></li>
                         </ul>
                      </div>
                      <div className="FooterContacts">
                         <div className="FooterContactsCard">
                            <div className="LeftHeroContacts">
                               <div className="ContactsText">
                                  <a href="tel:99890">+99899 000 00 00</a>
                                  <a href="#">Yunusobod tumani -22 kvartal</a>
                                  <a href="#">Эл.почта: webdesigner@gmail.com</a>
                               </div>
                               <div className="InputFooter">
                                  <input type="text" placeholder="Поиск"/>
                               </div>
                            </div>

                            <div className="RightHeroContacts">
                               <div className="ButtonFooter">
                                 <h3> ЗАКАЗАТЬ ЗВОНОК</h3>
                               </div>
                               <div className="IconsFooter">
                                  <a href="#"><RiTelegramLine/></a>
                                  <a href="#"><IoLogoInstagram/></a>
                                  <a href="#"><RiFacebookCircleLine/></a>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="FooterBottom">
                      <div className="FooterLogo">
                         <a href="/"><span><img src={logo} alt=""/></span></a>
                      </div>
                      <div className="FooterBottomContent">
                         <p>© 2022 Lift Media. All Rights Reserved. </p>
                      </div>
                   </div>
                </div>
             </div>
          </>
      );
   }
}