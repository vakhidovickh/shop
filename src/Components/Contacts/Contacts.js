import React, {Component} from 'react';
import './Contacts.css'

import FamousBrands from "../All codes/FamousBrands/famousbrands";

import contacts from "../All codes/imgs/contacts.png";
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {TbBrandTwitter} from 'react-icons/tb'

export default class Contacts extends Component {
    render() {
        return (
            <>

                <div className="Contacts Container">
                    <h2>Контакты</h2>
                    <div className="ContactsContent">
                        <div className="ContactsHeroLeft">
                            <div className="LinksContacts">
                                <ul>
                                    <li><a href="#">+998 90 000 00 00</a></li>
                                    <li><a href="#"> +998 90 000 00 00</a></li>
                                    <li><a href="#"> designers@gmail.com</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">г.Юнусабад Ул. Унверсам
                                        Д. 1, Кв. 43</a></li>
                                </ul>
                            </div>
                             <div className="IconsContacts">
                                 <a href="#"><FiFacebook/></a>
                                 <a href="#"><FiInstagram/></a>
                                 <a href="#"><TbBrandTwitter/></a>
                             </div>
                        </div>
                        <div className="ContactsHeroRight">
                            <img src={contacts} alt=""/>
                        </div>

                    </div>
                </div>

                <FamousBrands/>

\            </>
        );
    }
}
