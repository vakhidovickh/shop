import React, {Component} from 'react';
import NavigationBar from "../MainPage/NavigationBar";
import Header from "../MainPage/Header";
import PopularBrands from "../MainPage/PopularBrands";
import SectionBrands from "../MainPage/SectionBrands";
import Footer from "../MainPage/Footer";

class Product extends Component {
    render() {
        return (
            <>
                <NavigationBar/>
                <Header/>
                    <div className="Container">

                    </div>
                <PopularBrands/>
                <SectionBrands/>
                <Footer/>
            </>
        );
    }
}

export default Product;
