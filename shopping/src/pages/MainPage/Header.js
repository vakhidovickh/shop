import React, {Component} from 'react';
import '../../styles/Header.css'
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
                                    <img src={logo} alt=""/>
                                </div>
                                <div className="Header__catalog">
                                    <MdOutlineMenu className="Catalog"/>
                                    <h3>Каталог</h3>
                                </div>
                                <div className="Ceader__search">
                                        <input type="text" id="search" placeholder="Что желаете найти?"/>
                                </div>
                                <div className="Header__basket">
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
