import React, {Component} from 'react';
import '../../styles/PopularBrands.css'
import photo from '../../images/photo3.png'
import {FiArrowRight} from 'react-icons/fi'


class PopularBrands extends Component {
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
                    <div className="MiniCards mb-4">
                        <div className="MiniCard">
                            <img src={photo} alt=""/>
                            <p>Фотоаппараты</p>
                        </div>
                        <div className="MiniCard">
                            <img src={photo} alt=""/>
                            <p>Фотоаппараты</p>
                        </div>
                        <div className="MiniCard">
                            <img src={photo} alt=""/>
                            <p>Фотоаппараты</p>
                        </div>
                        <div className="MiniCard">
                            <img src={photo} alt=""/>
                            <p>Фотоаппараты</p>
                        </div>
                        <div className="MiniCard">
                            <img src={photo} alt=""/>
                            <p>Фотоаппараты</p>
                        </div>
                    </div>
                    <div className="MiniCards">
                        <div className="MiniCard">
                            <img src={photo} alt=""/>
                            <p>Фотоаппараты</p>
                        </div>
                        <div className="MiniCard">
                            <img src={photo} alt=""/>
                            <p>Фотоаппараты</p>
                        </div>
                        <div className="MiniCard">
                            <img src={photo} alt=""/>
                            <p>Фотоаппараты</p>
                        </div>
                        <div className="MiniCard">
                            <img src={photo} alt=""/>
                            <p>Фотоаппараты</p>
                        </div>
                        <div className="MiniCard">
                            <img src={photo} alt=""/>
                            <p>Фотоаппараты</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PopularBrands;