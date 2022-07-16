import React, {Component} from 'react';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainAbout from "./pages/About Us/MainAbout";
import SectionNews from "./pages/News Page/SectionNews";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="AboutUs" element=<MainAbout/>/>
                        <Route path="News" element={<SectionNews/>}/>
                    </Routes>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;
