import React, {Component} from 'react';
import './PopularCategories.css';

// images
import Camera from "../imgs/Camera.png";



class PopularCategories extends Component {
    render() {
        return (
            <>
                <div className="PopularItems Container2">

                    <div className="df">
                        <h2>Популярные категории</h2>
                    </div>
                    <div className="PopularProducts">
                        <div className="PopularProduct">
                            <img src={Camera} alt=""/>
                            <h6>Фотоаппараты</h6>
                        </div>
                        <div className="PopularProduct">
                            <img src={Camera} alt=""/>
                            <h6>Фотоаппараты</h6>
                        </div>
                        <div className="PopularProduct">
                            <img src={Camera} alt=""/>
                            <h6>Фотоаппараты</h6>
                        </div>
                        <div className="PopularProduct">
                            <img src={Camera} alt=""/>
                            <h6>Фотоаппараты</h6>
                        </div>
                        <div className="PopularProduct">
                            <img src={Camera} alt=""/>
                            <h6>Фотоаппараты</h6>
                        </div>
                        <div className="PopularProduct">
                            <img src={Camera} alt=""/>
                            <h6>Фотоаппараты</h6>
                        </div>
                        <div className="PopularProduct">
                            <img src={Camera} alt=""/>
                            <h6>Фотоаппараты</h6>
                        </div>
                        <div className="PopularProduct">
                            <img src={Camera} alt=""/>
                            <h6>Фотоаппараты</h6>
                        </div>
                        <div className="PopularProduct">
                            <img src={Camera} alt=""/>
                            <h6>Фотоаппараты</h6>
                        </div>
                        <div className="PopularProduct">
                            <img src={Camera} alt=""/>
                            <h6>Фотоаппараты</h6>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default PopularCategories;