import React, {Component} from 'react';
import photo from "../../images/photo2.png";
import shop from "../../images/add.png";
import {FiArrowRight} from 'react-icons/fi'
import '../../styles/SectionDiscounts.css'

class SectionDiscounts extends Component {
    render() {
        return (
            <>
                <div className="Container">
                    <div className="Top">
                        <div className="Top__text">
                            <h3 className="d-flex">Скидки <span>%</span></h3>
                        </div>
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
                                <span><h4>12%</h4></span>
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
                                <span><h4>12%</h4></span>
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
                                <span><h4>12%</h4></span>
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
                                <span><h4>12%</h4></span>
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

export default SectionDiscounts;
