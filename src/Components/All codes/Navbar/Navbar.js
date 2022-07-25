import React, {Component} from 'react';
import './forNavbar.css';
import logo from '../imgs/logo.png'
import search from '../imgs/search.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'



export default class Navbar extends Component {


   Modal = () => {
      document.querySelector('.ContentModal').style = "left: 15%";
      document.querySelector('.Modal').style = "left: 0"
   };
   CloseModal = () => {
      document.querySelector('.ContentModal').style = "left: -100%";
      document.querySelector('.Modal').style = "left: -100%"
   };

   ContentCatalog1=()=>{
      document.querySelector('.RightHeroModal').innerHTML =``;

      document.querySelector('.RightHeroModal').innerHTML =`
             <ul>
                           <li><h2>Стабилизаторы для телефона</h2></li>
                           <li><p>Ноутбуки</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                        </ul>
                        <ul>
                           <li><h2>Стабилизаторы для телефона</h2></li>
                           <li><p>Ноутбуки</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                        </ul>
      `
   };
   ContentCatalog2=()=>{
      document.querySelector('.RightHeroModal').innerHTML =``;

      document.querySelector('.RightHeroModal').innerHTML =`
             <ul>
                           <li><h2>Фото зонты</h2></li>
                           <li><p>Видеокарты</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                        </ul>
      `
   };
   ContentCatalog3=()=>{
      document.querySelector('.RightHeroModal').innerHTML =``;

      document.querySelector('.RightHeroModal').innerHTML =`
             <ul>
                           <li><h2>Беззеркальные фотоаппараты</h2></li>
                           <li><p>Роутеры</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                        </ul>
      `
   };
   ContentCatalog4=()=>{
      document.querySelector('.RightHeroModal').innerHTML =``;

      document.querySelector('.RightHeroModal').innerHTML =`
             <ul>
                           <li><h2>Фотобокс</h2></li>
                           <li><p>Игровые ноутбуки</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                        </ul>
      `
   };
   ContentCatalog5=()=>{
      document.querySelector('.RightHeroModal').innerHTML =``;

      document.querySelector('.RightHeroModal').innerHTML =`
             <ul>
                           <li><h2>Фотоаппараты с суперзумом</h2></li>
                           <li><p>Отражатели</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                        </ul>
      `
   };
   ContentCatalog6=()=>{
      document.querySelector('.RightHeroModal').innerHTML =``;

      document.querySelector('.RightHeroModal').innerHTML =`
             <ul>
                           <li><h2>Синхронизаторы</h2></li>
                           <li><p>Моноблоки</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                        </ul>
      `
   };
   ContentCatalog7=()=>{
      document.querySelector('.RightHeroModal').innerHTML =``;

      document.querySelector('.RightHeroModal').innerHTML =`
             <ul>
                           <li><h2>Софтбоксы</h2></li>
                           <li><p>Компьютерные столы</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                        </ul>
      `
   };
   ContentCatalog8=()=>{
      document.querySelector('.RightHeroModal').innerHTML =``;

      document.querySelector('.RightHeroModal').innerHTML =`
             <ul>
                           <li><h2>Мыши</h2></li>
                           <li><p>Смартфоны и аксессуары</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                           <li><p>Стабилизаторы для телефона</p></li>
                        </ul>
      `
   };

   render() {
      return (
          <>
             <header className="Header">
                <div className="HeaderTop">
                   <div className="HeaderTopContent Container">
                      <div className="HeaderTopButtons">
                         <div className="HeaderLogo2">
                            <a href="/"><span><img src={logo} alt=""/></span></a>
                         </div>
                         <div className="TitleLogo">
                            <a href="/AboutUs">О нас</a>
                            <a target="_blank" href="https://google.com/maps/@41.3138944,69.2781056,12z">
                               <span><FaMapMarkerAlt/></span> Ташкент</a>
                         </div>
                      </div>
                      <div className="HeaderContacts">
                         <a href="#"> +99899 000 00 00</a>
                         <a href="#">Заказать звонок</a>
                      </div>
                   </div>
                </div>


                <div className="HeaderBottom Container">
                   <div className="HeaderBottomLogo">
                      <div className="HeaderLogo">
                         <a href="/"><span><img src={logo} alt=""/></span></a>
                      </div>
                      <div className="HeaderCatalog">
                         <a onClick={this.Modal} href="#"><span><GiHamburgerMenu/></span>Каталог</a>
                      </div>
                   </div>
                   <div className="HeaderSearch">
                      <input type="text" placeholder="Что желаете найти?"/>
                      <button><span><img src={search} alt=""/></span></button>
                   </div>
                   <div className="HeaderCart">
                      <a href="/Cart"><span><FaShoppingCart/></span>Корзина</a>
                   </div>
                </div>

             </header> 

             <div className="Modal">
                <div className="ContentModal">
                   <div className="LeftHeroModal">
                      <div className="ModalHeader">
                         <div className="LogoModal">
                            <a href="/"><span><img src={logo} alt=""/></span></a>
                         </div>
                         <div onClick={this.CloseModal} className="CloseModal">+</div>
                      </div>
                      <div className="ModalBody">
                         <h2 onClick={this.ContentCatalog1}>Стабилизаторы</h2>
                         <h2 onClick={this.ContentCatalog2}>Фотоаппараты</h2>
                         <h2 onClick={this.ContentCatalog3}>Объективы</h2>
                         <h2 onClick={this.ContentCatalog4}>Аксессуары для студии</h2>
                         <h2 onClick={this.ContentCatalog5}>Вспышки для фотоаппаратов</h2>
                         <h2 onClick={this.ContentCatalog6}>Аксессуары для камеры</h2>
                         <h2 onClick={this.ContentCatalog7}>Штативы</h2>
                         <h2 onClick={this.ContentCatalog8}>Видеокамеры</h2>
                         <h2><span><a href="/Contacts">Контакты</a></span></h2>
                      </div>
                   </div>
                   <div className="RightHeroModal">

                   </div>
                </div>
             </div>
          </>
      );
   }
}


