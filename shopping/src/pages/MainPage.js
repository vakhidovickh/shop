import React, {Component} from 'react';
import Navbar from "./Navbar";
import Header from './Header'
import MainHeader from "./MainHeader";

class MainPage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Header/>
                <MainHeader/>
            </div>
        );
    }
}

export default MainPage;
