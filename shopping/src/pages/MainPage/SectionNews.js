import React, {Component} from 'react';
import photo from '../../images/photo.png'
import { FiArrowRight } from 'react-icons/fi'
import '../../styles/SectionNews.css'
import shop from '../../images/add.png'

class SectionNews extends Component {
    render() {
        return (
            <>
                <div className="Container">
                    <div className="Top">
                        <h3>Новинки </h3>
                        <a href="" className="See__all">
                            <a href="#">Все категории</a>
                            <FiArrowRight/>
                        </a>
                    </div>
                        <div className="Cards">
                            <div className="Card">
                                <div className="Card__header">
                                    <img src={photo} alt=""/>
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
                                    <img src={shop} alt=""/>
                                </div>
                            </div>
                            <div className="Card">
                                <div className="Card__header">
                                    <img src={photo} alt=""/>
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
                                    <img src={shop} alt=""/>
                                </div>
                            </div>
                            <div className="Card">
                                <div className="Card__header">
                                    <img src={photo} alt=""/>
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
                                    <img src={shop} alt=""/>
                                </div>
                            </div>
                            <div className="Card">
                                <div className="Card__header">
                                    <img src={photo} alt=""/>
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
                                    <img src={shop} alt=""/>
                                </div>
                            </div>
                        </div>
                </div>
            </>
        );
    }
}

export default SectionNews;