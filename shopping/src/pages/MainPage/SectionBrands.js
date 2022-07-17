import React, {Component} from 'react';
import '../../styles/MainPage/SectionBrands.css'
import apple from '../../images/apple.png'

class SectionBrands extends Component {
    render() {
        return (
            <>
                <div className="Container">
                    <div className="Top">
                        <div className="Top__text">
                            <h3>Популярные категории</h3>
                        </div>
                    </div>
                    <div className="Brands row">
                        <div className="Brand Col justify-content-end">
                            <img src={apple} alt=""/>
                        </div>
                        <div className="Brand Col justify-content-end">
                            <img src={apple} alt=""/>
                        </div>
                        <div className="Brand Col justify-content-end">
                            <img src={apple} alt=""/>
                        </div>
                        <div className="Brand Col justify-content-end">
                            <img src={apple} alt=""/>
                        </div>
                        <div className="Brand Col justify-content-end">
                            <img src={apple} alt=""/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SectionBrands;
