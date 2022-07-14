import React, {Component} from 'react';
import '../styles/Header.css'
import logo from '../images/logo.png'
import {MdOutlineMenu} from 'react-icons/md'
import {FaShoppingCart} from 'react-icons/fa'


    class Header extends Component {
        render() {
            return (
                <div>
                    <div className="header">
                        <div className="container">
                            <div className="header__top">
                                <div className="header__brand">
                                    <img src={logo} alt=""/>
                                </div>
                                <div className="header__catalog">
                                    <MdOutlineMenu className="catlog"/>
                                    <h3>Каталог</h3>
                                </div>
                                <div className="header__search">
                                        <input type="text" id="search" placeholder="Что желаете найти?"/>
                                </div>
                                <div className="header__basket">
                                    <FaShoppingCart/>
                                    <h3>Корзина</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
export default Header;
