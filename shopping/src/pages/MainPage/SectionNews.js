import React, {Component} from 'react';
import { FiArrowRight } from 'react-icons/fi'
import '../../styles/MainPage/SectionNews.css'

class SectionNews extends Component {
    componentDidMount() {
        for (let i = 0; i <4 ; i++) {
            document.querySelector('.Cards').innerHTML+=`
                                        <div class="Card">
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

    render() {
        return (
            <>
                <div className="Container">
                    <div className="Top">
                        <h3>Новинки </h3>
                        <a href="http://localhost:3000/News" className="See__all">
                            <a href="http://localhost:3000/News">Все категории</a>
                            <FiArrowRight/>
                        </a>
                    </div>
                        <div className="Cards">

                        </div>
                </div>
            </>
        );
    }
}

export default SectionNews;