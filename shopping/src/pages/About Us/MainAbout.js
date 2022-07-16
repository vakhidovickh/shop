import React, {Component} from 'react';
import Header from "../MainPage/Header";
import NavigationBar from "../MainPage/NavigationBar";
import Footer from "../MainPage/Footer";
import SectionAboutUs from "./SectionAboutUs";
import SectionBrands from "../MainPage/SectionBrands";

class MainAbout extends Component {
    render() {
        return (
            <>
                <NavigationBar/>
                <Header/>
                <SectionAboutUs/>
                <SectionBrands/>
                <Footer/>
            </>
        );
    }
}

export default MainAbout;