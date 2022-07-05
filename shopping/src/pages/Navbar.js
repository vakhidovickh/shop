import React, {Component} from 'react';
import '../styles/Navbar.css'
import { MdLocationOn } from 'react-icons/md'

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="container">
                        <div className="nav">
                            <div className="navigation">
                                <a href="#"><h2>О нас </h2></a>
                                <a href="#" className="location">
                                    <MdLocationOn/>
                                    <h3>Ташкент</h3>
                                </a>
                            </div>
                            <div className="nav__contact">
                                <h3>+ 99899 000 00 00</h3>
                                <a href="#"><p>Заказать звонок</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;