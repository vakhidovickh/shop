import React, {Component} from 'react';
import NavigationBar from "../MainPage/NavigationBar";
import Header from "../MainPage/Header";
import PopularBrands from "../MainPage/PopularBrands";
import SectionBrands from "../MainPage/SectionBrands";
import Footer from "../MainPage/Footer";
import { FiArrowLeft } from "react-icons/fi";
import '../../styles/Basket/Basket.css'


class Basket extends Component {


        add=()=>{

        };

    state={
      shop: localStorage.getItem('bir')
    };



    render() {
        return (
            <>
                <NavigationBar/>
                <Header/>
                {this.state.shop===null?(
                    <div className="Container">
                        <a href="http://localhost:3000/" className="Back d-flex align-items-center gap-3">
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
                    this.state.shop.map(item=> {
return <h1>{item}</h1>
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

export default Basket;
