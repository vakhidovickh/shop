import React, {Component} from 'react';
import '../../styles/SectionNews/SectionNews.css'
import NavigationBar from "../MainPage/NavigationBar";
import Header from "../MainPage/Header";
import SectionBrands from "../MainPage/SectionBrands";
import PopularBrands from "../MainPage/PopularBrands";
import Footer from "../MainPage/Footer";
import { FiArrowLeft } from 'react-icons/fi'

class SectionNews extends Component {
state={
    data:[],
    ab:["abbas1","abbas2","abbas3","abbas4"]
};
getShop=(item)=>{
    // this.state.data=localStorage.getItem('bir')
this.state.data.push(item);
    localStorage.setItem('bir',this.state.data);
    console.log(localStorage.getItem('bir'))
};
    my = () => {
        document.querySelector('.Cards').innerHTML = ` `;

        for (let i = 0; i < 40; i++) {
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
                        <h3>Новинки</h3>
                    </a>
                    <div className="Cards">
                        {this.state.ab.map(item=>{
                            return <div className="Card mb-3">
                                <div className="Card__header">
                                    <img src="https://photobuy3.netlify.app/Camera1.png" alt=""/>
                                </div>
                                <div className="Card__body">
                                    <h3>Cовместимость со вспышками — AD200/AD200Pro</h3>
                                    <p className="Real__price">67 763,23 сум</p>
                                    <h2>62 392,23 Сум</h2>
                                </div>
                                <div className="Card__footer">
                                    <select name="number" id="number">
                                        <option value="">1 шт.</option>
                                        <option value="">2 шт.</option>
                                        <option value="">3 шт.</option>
                                        <option value="">4 шт.</option>
                                        <option value="">5 шт.</option>
                                        <option value="">6 шт.</option>
                                    </select>

                                    <button className="Btn-add" onClick={()=>this.getShop(item)}>

                                        <img src="https://photobuy3.netlify.app/cart.png" alt=""/>
                                    </button>

                                </div>
                            </div>
                        })}
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
