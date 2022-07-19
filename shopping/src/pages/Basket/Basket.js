import React, {Component} from 'react';
import NavigationBar from "../MainPage/NavigationBar";
import Header from "../MainPage/Header";
import PopularBrands from "../MainPage/PopularBrands";
import SectionBrands from "../MainPage/SectionBrands";
import Footer from "../MainPage/Footer";
import { FiArrowLeft } from "react-icons/fi";
import '../../styles/Basket/Basket.css'


export default class Basket extends Component {
    state={
        shop: localStorage.getItem('bir').split(","),
        data1:[]
    };
    addData=()=>{
        this.setState({data1:this.state.shop[0]});
 console.log(this.state.data1)
    };

componentDidMount() {
   this.addData()
}

    render() {
        return (
            <>
                <NavigationBar/>
                <Header/>
                {this.state.shop===null?(
                    <div className="Container">
                        <a href="/" target="_self" className="Back d-flex align-items-center gap-3">
                        <span className="Arrow__left align-items-center">
                            <FiArrowLeft/>
                        </span>
                            <h3>Корзина</h3>
                        </a>
                        <div className="Basket__decoration text-center">
                            <img src="https://olcha.uz/_nuxt/img/shoppingCart.9c0394b.png" alt=""/>
                        </div>
                        <div className="Basket__texts text-center">
                            <h3 className="fs-2">В вашей корзине пусто? Не беда!</h3>
                            <p className="fs-3 text-gray">Начните выбирать товары из широкого ассортимента нашего каталога.</p>
                        </div>
                    </div>):(
                    this.state.shop.map((item,key)=> {
return <div key={key}><h1>{item}</h1><br/></div>
                    })
                )

                }
                <PopularBrands/>
                <SectionBrands/>
                <Footer/>
            </>
        );
    }
}


