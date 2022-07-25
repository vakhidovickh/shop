import React, {Component} from 'react';
import './Cart.css'
import PopularCategories from "../All codes/PopularCategories/PopularCategories";
import FamousBrands from "../All codes/FamousBrands/famousbrands";
import Camera from "../All codes/imgs/Camera.png"

// icons
import {BsArrowLeft} from 'react-icons/bs'

export default class Cart extends Component {
    state = {
        dataA: [],
        soni: 0,
        skidka: 0,
        totalprice: 0
    };
    hisob = () => {
        var tip = 0;
        for (var i = 0; i < this.state.dataA.length; i++) {
            tip = tip + this.state.dataA[i].count
        }
        this.setState({
            soni: tip

        })
    };
    totalprice = () => {
        var allprice = 0;
        for (var i = 0; i < this.state.dataA.length; i++) {
            allprice = allprice + this.state.dataA[i].price * this.state.dataA[i].count
        }
        this.setState({
            totalprice: allprice.toFixed(2)
        })

    };
    Skidka = () => {
        var allprice = 0;
        for (var i = 0; i < this.state.dataA.length; i++) {
            allprice = allprice + (this.state.dataA[i].price * this.state.dataA[i].count * this.state.dataA[i].scidka) / 100
        }
        this.setState({
            skidka: allprice.toFixed(2)
        })

        this.state.skidka = allprice.toFixed(2);
        console.log(this.state.skidka);


    };
    plus = (key) => {
        this.state.dataA[key].count++;
        this.setState({});
        localStorage.setItem("uch", JSON.stringify(this.state.dataA));
        this.hisob();
        this.totalprice();
        this.Skidka();
    };
    minus = (key) => {

        this.state.dataA[key].count--;
        this.setState({});
        if (this.state.dataA[key].count <= 0) {
            this.state.dataA.splice(key, 1)
        }
        localStorage.setItem("uch", JSON.stringify(this.state.dataA));
        this.hisob();
        this.totalprice();
        this.Skidka();

    };

    componentDidMount() {
        if (JSON.parse(localStorage.getItem("uch")) !== null) {
            this.setState({dataA: JSON.parse(localStorage.getItem("uch"))})
        }
        setTimeout(() => {
            this.hisob();
            this.totalprice();
            this.Skidka()
        }, 100);
    }


    render() {

        return (
            <>

                <div className="MainSectionCart Container">
                    <div className="TitleCart">
                        <div className="leftHero">
                            <a href="/"><BsArrowLeft/></a>
                            <h2>Корзина</h2>
                        </div>
                        <div className="rightHero">
                            <p><span>{this.state.dataA.length}</span> предмета</p>
                        </div>
                    </div>

                    <div className="CartContent">
                        <div className="CartContentLeft">
                            <div className="TitleContentLeft">
                                <h2>Name Product</h2>
                                <p>Amount</p>
                                <p>Price</p>
                                <p>Total</p>
                            </div>
                            {this.state.dataA.map((item, key) => {
                                return <div  key={key}  className="ContentItemCart">
                                    <span className="NameProduct"><h2>Name Product</h2></span>
                                  <div className="TitleProduct">
                                   <span><img src={Camera} alt=""/></span>
                                    <h3>{item.name}</h3>
                                  </div>
                                    <div className="NumberAndPrice2">
                                        <p>Amount</p>
                                        <p>Price</p>
                                        <p>Total</p>
                                    </div>
                                  <div className="NumberAndPrice">
                                    <span className="NumberOfItem">
                                        <button onClick={() => this.minus(key)}>-</button>
                                        <p>{item.count}</p>
                                        <button onClick={() => this.plus(key)}>+</button>
                                    </span>
                                    <h5>{item.price}</h5>
                                    <h5>{(item.price * item.count).toFixed(2)}</h5>
                                 </div>
                            </div>
                            })}
                        </div>
                        <div className="CartContentRight">
                            <h4> Итог заказа</h4>
                            <div className="TotalPrices">
                                <p><span>{this.state.dataA.length}</span> ПУНКТА</p>
                                <p><strong><span>{this.state.totalprice}</span> сум</strong></p>
                            </div>
                            <div className="ItemsPrices">
                                <div className="NumberItems">
                                    <p>Товары, <span>{this.state.soni}</span> шт.</p>
                                    <p><span>{this.state.totalprice}</span>сум</p>
                                </div>
                                <div className="DiscountItem">
                                    <p>Скидка</p>
                                    <p><span>-{this.state.skidka}</span> сум</p>
                                </div>
                                <div className="TotalPrice">
                                    <p>Итого:</p>
                                    <p><span>{(this.state.totalprice - this.state.skidka).toFixed(2)}</span> сум</p>
                                </div>
                            </div>
                            <a href="/PersonalData">
                                <div className="buttonCart">Продолжать</div>
                            </a>
                        </div>
                    </div>

                </div>

                <PopularCategories/>

                <FamousBrands/>

            </>
        );
    }
}


{/*<table className="TableCart">*/
}
{/*    <thead>*/
}
{/*    <th>Продукт</th>*/
}
{/*    <th>Число</th>*/
}
{/*    <th>Цена</th>*/
}
{/*    <th>Общий</th>*/
}
{/*    </thead>*/
}
{/*    <tbody className="Tbody">*/
}
{/*    {this.state.dataA.map((item, key) => {*/
}
{/*        return <tr key={key}>*/
}
{/*            <td>*/
}
{/*                <span><img src={Camera} alt=""/></span>{item.name}</td>*/
}


{/*            <td>*/
}
{/*                                             <span>*/
}
{/*                                                <button onClick={() => this.minus(key)}>-</button>*/
}
{/*                                                <p>{item.count}</p>*/
}
{/*                                                <button onClick={() => this.plus(key)}>+</button>*/
}
{/*                                             </span>*/
}
{/*            </td>*/
}
{/*            <td>{item.price}</td>*/
}
{/*            <td>{(item.price * item.count).toFixed(2)}</td>*/
}

{/*        </tr>*/
}
{/*    })*/
}
{/*    }*/
}

{/*    </tbody>*/
}
{/*</table>*/
}