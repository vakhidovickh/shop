import React, {Component} from 'react';
import './PersonalData.css'
import PopularCategories from "../All codes/PopularCategories/PopularCategories";
import FamousBrands from "../All codes/FamousBrands/famousbrands";

// icons
import {BsArrowLeft} from 'react-icons/bs'

class PersonalData extends Component {

state={
    dataA:[],
    soni: 0,
    totalprice: 0,
    skidka: 0
};
hisob=()=>{
    var tip=0;
    for(var i=0;i<this.state.dataA.length;i++){
    tip=tip+this.state.dataA[i].count
    }
    this.setState({
        soni:tip
        
    })
};
totalprice=()=>{
    var allprice = 0;
    for(var i=0;i<this.state.dataA.length;i++){
        allprice=allprice+this.state.dataA[i].price*this.state.dataA[i].count
    }
    this.setState({
        totalprice:allprice.toFixed(2)
    })
  
};
Skidka=()=>{
      var allprice = 0;
        for(var i=0;i<this.state.dataA.length;i++){
            allprice=allprice+(this.state.dataA[i].price*this.state.dataA[i].count*this.state.dataA[i].scidka)/100 
        }
        this.setState({
            skidka:allprice.toFixed(2)
        });
       
      this.state.skidka=allprice.toFixed(2);
      console.log(this.state.skidka);
     
    
};
componentDidMount() {
if (JSON.parse(localStorage.getItem('uch')) == null) {
    this.setState({ dataA: [] })
  }
  else { this.setState({ dataA: JSON.parse(localStorage.getItem('uch')) }) }
this.setState({forData1:0});
setTimeout(() => {
    this.hisob  ();
    this.totalprice();
    this.Skidka()        
}, 100); 
}

    render() {
        return (
            <>

                <div className="MainSectionPersonalData Container">
                    <div className="TitlePD">
                        <a href="/Cart"><BsArrowLeft/></a>
                        <h2>Персональные данные</h2>
                    </div>

                    <div className="FormsPD">
                        <div className="Form">
                            <div className="InputForm">
                                <p>Имя</p>
                                <input type="text" name="Name" placeholder="Ваше имя"/>
                            </div>
                            <div className="InputForm">
                                <p>Фамилия</p>
                                <input type="text" name="SurName" placeholder="Ваше фамилия"/>
                            </div>
                            <div className="InputForm">
                                <p>Телефонный номер</p>
                                <input type="phone" name="number" placeholder="Ваше номер"/>
                            </div>
                            <div className="InputForm">
                                <p>Электронный почта</p>
                                <input type="email" name="AdressEmail" placeholder="Ваше Электронный адресс"/>
                            </div>
                                <div className="ButtonSend">Отправить</div>
                        </div>
                        <div className="PricePD">
                            <h4>Итог заказа</h4>
                            <div className="ItemsPrices">
                                <div className="NumberItems">
                                    <p>Товары, <span>{this.state.soni}</span> шт.</p>
                                    <p><span>{this.state.totalprice}</span> сум</p>
                                </div>
                                <div className="DiscountItem">
                                    <p>Скидка</p>
                                    <p><span>{this.state.skidka}</span> сум</p>
                                </div>
                                <div className="TotalPrice">
                                    <p>Итого:</p>
                                    <p><span>{(this.state.totalprice-this.state.skidka).toFixed(2)}</span> сум</p>
                                </div>  
                            </div>

                            <div className="SomeTextPD">
                                <h6>Нажимая 'Оформить заказ', я соглашаюсь с <span><a href="#">публичным договором оферты
                                </a></span></h6>
                                <p>  Для расчета стоимости доставки крупногабаритного товара весом более 5 кг обращайтесь
                                    к оператору Call-центра*
                                    * Может взыматься дополнительная плата за доставку в труднодоступные места,
                                    (например крупногабаритная техника, которую нужно доставить в дома, с неработающим
                                    лифтом)
                                    ** При необходимости</p>
                            </div>
                        </div>
                    </div>
                </div>

                <PopularCategories/>

                <FamousBrands/>

            </>
        );
    }
}

export default PersonalData;