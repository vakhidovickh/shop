import React, {Component} from 'react';
import '../../styles/MainPage/Header.css'
import logo from '../../images/logo.png'
import {MdOutlineMenu} from 'react-icons/md'
import {FaShoppingCart} from 'react-icons/fa'


    class Header extends Component {
        render() {
            return (
                <div>
                    <div className="Header">
                        <div className="Container">
                            <div className="Header__top">
                                <div className="Header__brand">
                                    <a href="/"><img src={logo} alt=""/></a>
                                </div>
                                <div className="Header__catalog">
                                    <MdOutlineMenu className="Catalog"/>
                                    <h3>Каталог</h3>
                                </div>
                                <div className="Ceader__search">
                                        <input type="text" id="search" placeholder="Что желаете найти?"/>
                                </div>
                                <a href="http://localhost:3000/basket" className="Header__basket">
                                    <FaShoppingCart/>
                                    <h3>Корзина</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
export default Header;
