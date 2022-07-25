import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from "./Components/404/NotFound";
import HomePage from "./Components/HomePage/HomePage";
import AboutUs from "./Components/AboutUs/AboutUs";
import NewItems from "./Components/NewItems/NewItems";
import Discount from "./Components/Discount/Discount";
import MostSells from "./Components/MostSells/MostSells";
import Cart from "./Components/Cart/Cart";
import PersonalData from "./Components/PersonalData/PersonalData";
import Item from "./Components/Item/Item";
import Contacts from "./Components/Contacts/Contacts";
import Footer from './Components/All codes/Footer/Footer';
import logo from './Components/All codes/imgs/logo.png'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import search from './Components/All codes/imgs/search.svg'
import { FaShoppingCart } from 'react-icons/fa'


export default class App extends Component {
state={
   data: [
      {
          "name": "Camera 1",
          'ckidka':10,
          "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
          "price": "12.99",
          "category": "apparel",
          "img": "https://photobuy3.netlify.app/Camera1.png",
      },
      {
          "name": "Camera 2",
          'ckidka':10,
          "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
          "price": "23.54",
          "category": "apparel",
          "img": "https://photobuy3.netlify.app/Camera1.png",
      },
      {
          "name": "Camera 3",
          'ckidka':10,
          "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
          "price": "324.32",
          "category": "apparel",
          "img": "https://photobuy3.netlify.app/Camera1.png",
      },
      {
          "name": "Camera 4",
          'ckidka':10,
          "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
          "price": "32.32",
          "category": "apparel",
          "img": "https://photobuy3.netlify.app/Camera1.png",
      },
      {
          "name": "Camera 5",
          'ckidka':10,
          "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
          "price": "32.23",
          "category": "apparel",
          "img": "https://photobuy3.netlify.app/Camera1.png",
      },
      {
          "name": "Camera 6",
          'ckidka':10,
          "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
          "price": "32.23",
          "category": "apparel",
          "img": "https://photobuy3.netlify.app/Camera1.png",
      },
      {
          "name": "Camera 7",
          'ckidka':10,
          "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
          "price": "32.23",
          "category": "apparel",
          "img": "https://photobuy3.netlify.app/Camera1.png",
      },
      {
          "name": "Camera 8",
          'ckidka':10,
          "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
          "price": "32.23",
          "category": "apparel",
          "img": "https://photobuy3.netlify.app/Camera1.png",
      },
      {
          "name": "Camera 9",
          'ckidka':10,
          "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
          "price": "32.23",
          "category": "apparel",
          "img": "https://photobuy3.netlify.app/Camera1.png",
      },
      {
          "name": "Camera 10",
          'ckidka':10,
          "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
          "price": "32.23",
          "category": "apparel",
          "img": "https://photobuy3.netlify.app/Camera1.png",
      },
      {
          "name": "Camera 11",
          'ckidka':10,
          "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
          "price": "32.23",
          "category": "apparel",
          "img": "https://photobuy3.netlify.app/Camera1.png",
      },
      {
          "name": "Camera 12",
          'ckidka':10,
          "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
          "price": "32.23",
          "category": "apparel",
          "img": "https://photobuy3.netlify.app/Camera1.png",
      },
      {
          "name": "Camera 13",
          'ckidka':10,
          "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
          "price": "32.23",
          "category": "apparel",
          "img": "https://photobuy3.netlify.app/Camera1.png",
      },
      {
          "name": "Camera 14",
          'ckidka':10,
          "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
          "price": "32.23",
          "category": "apparel",
          "img": "https://photobuy3.netlify.app/Camera1.png",
      },
      {
          "name": "Camera 15",
          'ckidka':10,
          "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
          "price": "32.23",
          "category": "apparel",
          "img": "https://photobuy3.netlify.app/Camera1.png",
      },
      {
          "name": "Camera 16",
          'ckidka':10,
          "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
          "price": "32.23",
          "category": "apparel",
          "img": "https://photobuy3.netlify.app/Camera1.png",
      },  
       {
          "name": "Camera 17",
          'ckidka':10,
          "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
          "price": "32.23",
          "category": "apparel",
          "img": "https://photobuy3.netlify.app/Camera1.png",
      },
      {
         "name": "Camera 23",
         'ckidka':10,
         "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
         "price": "23.54",
         "category": "apparel",
         "img": "https://photobuy3.netlify.app/Camera1.png",
     },
     {
         "name": "Camera 33",
         'ckidka':10,
         "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
         "price": "243.54",
         "category": "apparel",
         "img": "https://photobuy3.netlify.app/Camera1.png",
     },
     {
         "name": "Camera 43",
         'ckidka':10,
         "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
         "price": "32.32",
         "category": "apparel",
         "img": "https://photobuy3.netlify.app/Camera1.png",
     },
     {
         "name": "Camera 53",
         'ckidka':10,
         "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
         "price": "32.23",
         "category": "apparel",
         "img": "https://photobuy3.netlify.app/Camera1.png",
     }

  ],
   searchdata:[],
   dataA:[],
   i: 0,
   j:0,
   t:0,
    bor:true
};


getShop=(name, img, price,skidka)=>{
   var date1 = this.state.dataA;
   var key1 = true;
   let data6 = {
       "scidka":skidka,
       "name": name,
       "count":1,
       "img": img,
       "price": price
   }; 

   if (date1[0]===undefined) {
       date1.push(data6)
       key1 = false;
     } else {
       for (let i = 0; i < date1.length; i++) {
         if (date1[i].name === data6.name) {
           key1=false;
           date1[i].count++;
         }
       }
     }
     if (key1) {
       date1.push(data6)
     }      
   localStorage.setItem("uch", JSON.stringify(this.state.dataA));
var storedNames = JSON.parse(localStorage.getItem("uch"));       
   console.log(storedNames);
};  
componentDidMount() {
   if (JSON.parse(localStorage.getItem('uch')) == null) {
       this.setState({ dataA: [] })
     }
     else { this.setState({ dataA: JSON.parse(localStorage.getItem('uch')) }) }
   this.setState({i:0,j:0,t:0})

    if (JSON.parse(localStorage.getItem('tort')) == null) {
        this.setState({ dataAA: [] })
    }
    else { this.setState({ dataAA: JSON.parse(localStorage.getItem('tort')) }) }
    this.setState({i:0,j:0,t:0,card:4,forData1:0})
}


getItem=(name, img, price, description, skidka)=>{
   let data6 = {
       "scidka":skidka,
       "name": name,
       "count":1,
       "img": img,
       "price": price,
       "description":description
   }; 

  console.log(data6);
   localStorage.setItem("tort", JSON.stringify(data6));
var storedNames = JSON.parse(localStorage.getItem("tort"));       
   console.log(storedNames);
}






    getSerch=()=>{
       var game=[];
      if(document.querySelector('#searchall').value.length>=1){
         for(var i=0;i<this.state.data.length;i++){
            if (this.state.data[i].name.toLowerCase().includes(document.querySelector('#searchall').value.toLowerCase())) {
            game.push(this.state.data[i])  
            }
         }
         this.state.searchdata=game;
    this.setState({bor:false})
        }else{
            this.setState({bor:true})
        }
    };
    
    
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
                      <input type="text" onKeyUp={()=>{this.getSerch()}} id='searchall'  placeholder="Что желаете найти?"/>
                      <button onClick={()=>{this.getSerch()}} ><span><img src={search} alt=""/></span></button>
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



        {this.state.bor?(   <BrowserRouter>
                <Routes>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/AboutUS' element={<AboutUs/>}/>
                    <Route path='/NewItems' element={<NewItems/>}/>
                    <Route path='/Discount' element={<Discount/>}/>
                    <Route path='/MostSells' element={<MostSells/>}/>
                    <Route path='/Cart' element={<Cart/>}/>
                    <Route path='/PersonalData' element={<PersonalData/>}/>
                    <Route path='/Item' element={<Item/>}/>
                    <Route path='/Contacts' element={<Contacts/>}/>
                </Routes>
            </BrowserRouter>):(
               <div className='SearchResult'>
               <div className='Container'>
                
            <div className='Cards'>
             {this.state.searchdata.map((search)=>(
                  <div onClick={()=> this.getItem(search.name, search.img, search.price, search.description,search.ckidka)} className="Card">
                  <a href="/Item">
                      <div className="CardHeader">
                          <img src="https://photobuy3.netlify.app/Camera1.png" alt="sdf"/>
                      </div>
                      <div className="CardBody">
                          <h6>{search.name}</h6>
                          <p>{search.price}</p>
                          <h6>{search.description}</h6>
                      </div>
                  </a>
                  <select name="number" id="numberOfsearch">
                      <option>1 шт.</option>
                      <option>2 шт.</option>
                      <option>3 шт.</option>
                      <option>4 шт.</option>
                      <option>5 шт.</option>
                  </select>
                  <div onClick={() => this.getShop(search.name, search.img, search.price,search.ckidka)}
                       className="cart">
                      <img src="https://photobuy3.netlify.app/cart.png" alt=""/>
                  </div>
              </div>
               ))} 
                           </div>
               </div>
               </div>
            )}  










<Footer/>
        </>
    )
}


}