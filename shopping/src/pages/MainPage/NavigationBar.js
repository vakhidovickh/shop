import React, {Component} from 'react';
import '../../styles/MainPage/Navbar.css'
import { MdLocationOn } from 'react-icons/md'


class NavigationBar extends Component {
    render() {
        return (
            <div>
                <div className="Navbar">
                    <div className="Container">
                        <div className="Nav">
                            <div className="Navigation">
                                <a href="http://localhost:3000/about-us"><h2>О нас </h2></a>
                                <a href="http://localhost:3000/" className="Location">
                                    <MdLocationOn/>
                                    <h3>Ташкент</h3>
                                </a>
                            </div>
                            <div className="Nav__contact">
                                <h3>+ 99899 000 00 00</h3>
                                <a href="http://localhost:3000/"><p>Заказать звонок</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationBar;
