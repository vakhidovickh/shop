import React, {Component} from 'react';
import NavigationBar from "./NavigationBar";
import Header from './Header'
import MainHeader from "./MainHeader";
import SectionNews from "./SectionNews";
import SectionDiscounts from "./SectionDiscounts";
import PopularBrands from "./PopularBrands";
import SectionBestsalers from "./SectionBestsalers";

class MainPage extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <Header/>
                <MainHeader/>
                <SectionNews/>
                <SectionDiscounts/>
                <PopularBrands/>
                <SectionBestsalers/>
            </div>
        );
    }
}

export default MainPage;
