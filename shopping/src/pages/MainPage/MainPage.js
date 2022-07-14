import React, {Component} from 'react';
import NavigationBar from "./NavigationBar";
import Header from './Header'
import MainHeader from "./MainHeader";
import SectionNews from "./SectionNews";
import SectionDiscounts from "./SectionDiscounts";
import PopularBrands from "./PopularBrands";
import SectionBestsalers from "./SectionBestsalers";
import SectionBrands from "./SectionBrands";
import Footer from "./Footer";


class MainPage extends Component {
    render() {
        return (
            <div className="MainBody">
                <NavigationBar/>
                <Header/>
                <MainHeader/>
                <SectionNews/>
                <SectionDiscounts/>
                <PopularBrands/>
                <SectionBestsalers/>
                <SectionBrands/>
                <Footer/>
            </div>
        );
    }
}

export default MainPage;
