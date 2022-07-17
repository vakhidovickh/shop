import React, {Component} from 'react';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainAbout from "./pages/About Us/MainAbout";
import SectionNews from "./pages/News Page/SectionNews";
import Discounts from "./pages/SectionDiscounts/Discounts";
import SectionTop from './pages/SectionTop/SectionTop'
import Basket from "./pages/Basket/Basket";


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="about-us" element={<MainAbout/>}/>
                        <Route path="news" element={<SectionNews/>}/>
                        <Route path="discounts" element={<Discounts/>}/>
                        <Route path="tops" element={<SectionTop/>}/>
                        <Route path="basket" element={<Basket/>}/>

                    </Routes>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;
