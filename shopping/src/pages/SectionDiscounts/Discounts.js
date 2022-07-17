import React, {Component} from 'react';
import NavigationBar from "../MainPage/NavigationBar";
import Header from "../MainPage/Header";
import { FiArrowLeft } from "react-icons/fi";
import PopularBrands from "../MainPage/PopularBrands";
import SectionBrands from "../MainPage/SectionBrands";
import Footer from "../MainPage/Footer";
import '../../styles/SectionNews/SectionNews.css'


class Discounts extends Component {

    componentDidMount() {
        for (let i = 0; i < 20; i++) {
            document.querySelector('.Cards').innerHTML += `
                                        <div class="Card">
                            <div class="Card__header">
                                <img src="https://photobuy3.netlify.app/Camera1.png" alt=""/>
                            </div>
                            <div class="Card__body">
                                <span><h4>12%</h4></span>
                                <h3>Cовместимость со вспышками — AD200/AD200Pro</h3>
                                <p class="Real__price">67 763,23 сум</p>
                                <h2>62 392,23 Сум</h2>
                            </div>
                            <div class="Card__footer">
                                <select name="number" id="number">
                                    <option value="">1 шт.</option>
                                    <option value="">2 шт.</option>
                                    <option value="">3 шт.</option>
                                    <option value="">4 шт.</option>
                                    <option value="">5 шт.</option>
                                    <option value="">6 шт.</option>
                                </select>
                                <img src="https://photobuy3.netlify.app/cart.png" alt=""/>
                            </div>
                        </div>
            `
        }

    }

    MyDiscount = () => {
        document.querySelector('.Cards').innerHTML += ``;

        for (let i = 0; i < 20; i++) {
            document.querySelector('.Cards').innerHTML += `
                                    <div class="Card mb-3">
                                <div class="Card__header">
                                    <img src="https://photobuy3.netlify.app/Camera1.png" alt=""/>
                                </div>
                                <div class="Card__body">
                                    <h3>Cовместимость со вспышками — AD200/AD200Pro</h3>
                                    <p class="Real__price">67 763,23 сум</p>
                                    <h2>62 392,23 Сум</h2>
                                </div>
                                <div class="Card__footer">
                                    <select name="number" id="number">
                                        <option value="">1 шт.</option>
                                        <option value="">2 шт.</option>
                                        <option value="">3 шт.</option>
                                        <option value="">4 шт.</option>
                                        <option value="">5 шт.</option>
                                        <option value="">6 шт.</option>
                                    </select>
                                    <img src="https://photobuy3.netlify.app/cart.png" alt=""/>
                                </div>
                            </div>
        `;

        }
    };

    render() {
        return (
            <>
                <NavigationBar/>
                <Header/>
                <div className="Container">
                    <a href="http://localhost:3000/" className="Back d-flex align-items-center gap-3">
                        <span className="Arrow__left align-items-center">
                            <FiArrowLeft/>
                        </span>
                        <div className="Top__text">
                            <h3 className="d-flex">Скидки <span>%</span></h3>
                        </div>
                    </a>
                    <div className="Cards">

                    </div>
                    <div className="Button">
                        <button onClick={this.MyDiscount} className="btn btn-danger mt-5">See More</button>
                    </div>
                </div>
                <PopularBrands/>
                <SectionBrands/>
                <Footer/>
            </>
        );
    }
}

export default Discounts;
