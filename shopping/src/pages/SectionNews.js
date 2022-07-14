import React, {Component} from 'react';
import photo from '../images/photo.png'
import { FiArrowRight } from 'react-icons/fi'
import '../styles/SectionNews.css'

class SectionNews extends Component {
    render() {
        return (
            <>
                <div className="Container">
                    <div className="Top">
                        <h3>Новинки </h3>
                        <div className="See__all">
                            <a href="#">Все категории</a>
                            <FiArrowRight/>
                        </div>
                    </div>
                        <div className="Cards">
                            <div className="Card">
                                <div className="Card__header">
                                    <img src={photo} alt=""/>
                                </div>
                                <div className="Card__body">
                                    <h3>
                                        Cовместимость со вспышками — AD200/AD200Pro
                                    </h3>
                                    <p className="Discount__price">67 763,23 сум</p>
                                    <h2>62 392,23 Сум</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </>
        );
    }
}

export default SectionNews;