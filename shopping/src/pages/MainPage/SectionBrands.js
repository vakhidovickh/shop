import React, {Component} from 'react';
import {FiArrowRight} from 'react-icons/fi'
import '../../styles/SectionBrands.css'
import apple from '../../images/apple.png'
import samsung from '../../images/samsung 1.png'
import huawei from '../../images/Vector.png'
import mi from '../../images/Group 15.png'

class SectionBrands extends Component {
    render() {
        return (
            <>
                <div className="Container">
                    <div className="Top">
                        <div className="Top__text">
                            <h3>Популярные категории</h3>
                        </div>
                        <a href="" className="See__all">
                            <a href="#">Все категории</a>
                            <FiArrowRight/>
                        </a>
                    </div>
                    <div className="Brands">
                            <div className="Brand">
                                <img src={apple} alt=""/>
                                <span>

                                </span>
                            </div>
                            <div className="Brand">
                                <img src={samsung} alt=""/>
                                <span>

                                </span>
                            </div>
                            <div className="Brand">
                                <img src={huawei} alt=""/>
                                <span>

                                </span>
                            </div>
                            <div className="Brand">
                                <img src={apple} alt=""/>
                                <span>

                                </span>
                            </div>
                            <div className="Brand">
                                <img src={mi} alt=""/>
                            </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SectionBrands;
