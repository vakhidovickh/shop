import React, {Component} from 'react';
import NavigationBar from "./NavigationBar";
import Header from './Header'
import MainHeader from "./MainHeader";
import SectionNews from "./SectionNews";

class MainPage extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <Header/>
                <MainHeader/>
                <SectionNews/>
            </div>
        );
    }
}

export default MainPage;
