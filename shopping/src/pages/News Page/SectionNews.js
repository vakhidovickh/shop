import React, {Component} from 'react';
import '../../styles/SectionNews/SectionNews.css'
import NavigationBar from "../MainPage/NavigationBar";
import Header from "../MainPage/Header";
import SectionBrands from "../MainPage/SectionBrands";
import PopularBrands from "../MainPage/PopularBrands";
import Footer from "../MainPage/Footer";

class SectionNews extends Component {

    componentDidMount() {
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
            `
        }

    }

    my = () => {
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




    less = () => {

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
            if (i+=40) {
                document.querySelector('.Button').innerHTML += ``;

                document.querySelector('.Button').innerHTML+=
                    `
                        <button onclick="this.less()" class="btn btn-danger">See Less</button>
                    `
            }
        }
    };

    render() {
        return (
            <>
                <NavigationBar/>
                <Header/>
                <div className="Container">
                    <div className="Cards">

                    </div>
                    <div className="Button">
                        <button onClick={this.my} className="btn btn-danger mt-5">See More</button>
                    </div>
                </div>

                <PopularBrands/>
                <SectionBrands/>
                <Footer/>
            </>
        );
    }
}

export default SectionNews;
