import React, {Component} from 'react';
import './HomePage.css'
import '../All codes/imgs/photoShop.png'
import Carousel from "react-bootstrap/Carousel";
import '../All codes/Navbar/forNavbar.css';
import FamousBrands from "../All codes/FamousBrands/famousbrands";
import PopularCategories from "../All codes/PopularCategories/PopularCategories";
import axios from "axios";
import canonPhoto from "../All codes/imgs/canon2.png";


// Icons
import {BsArrowRight} from 'react-icons/bs'


export default class HomePage extends Component {

    state = {
        data: [
            {
                "name": "Camera 1",
                'ckidka': 10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "12.99",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 2",
                'ckidka': 10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "23.54",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 3",
                'ckidka': 10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "324.32",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 4",
                'ckidka': 10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.32",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 5",
                'ckidka': 10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.23",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            }
        ],
        data2: [
            {
                "name": "Camera 12",
                'ckidka': 10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "12.99",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 22",
                'ckidka': 10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "23.54",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 32",
                'ckidka': 10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "324.32",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 42",
                'ckidka': 10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.32",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 52",
                'ckidka': 10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.23",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            }
        ],
        data3: [
            {
                "name": "Camera 13",
                'ckidka': 10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "12.99",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 23",
                'ckidka': 10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "23.54",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 33",
                'ckidka': 10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "243.54",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 43",
                'ckidka': 10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.32",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 53",
                'ckidka': 10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.23",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            }
        ],
        data5: [],
        i: 0,
        j: 0,
        t: 0,
        a: 1,
        dataA: [],
        dataAA: [],
        bor: true,
        products:[]
    };
baq=()=>{
    axios.get('https://shop.abrorjonaxmadov.uz/api/v1/products/').then(res=>{
      this.setState({products:res.data})
    }).catch(err=>{
        console.log(err)
    })

};
    getValue = () => {
        var b = document.querySelectorAll(".baribir").value;
        this.state.a = Number(b);
    };

    getShop = (name, img, price, skidka) => {
        var date1 = this.state.dataA;
        var key1 = true;
        let data6 = {
            "scidka": skidka,
            "name": name,
            "count": this.state.a,
            "img": img,
            "price": price
        };

        if (date1[0] === undefined) {
            date1.push(data6);
            key1 = false;
        } else {
            for (let i = 0; i < date1.length; i++) {
                if (date1[i].name === data6.name) {
                    key1 = false;
                    date1[i].count += this.state.a;
                }
            }
        }
        if (key1) {
            date1.push(data6)
        }
        localStorage.setItem("uch", JSON.stringify(this.state.dataA));
        var storedNames = JSON.parse(localStorage.getItem("uch"));
        console.log(storedNames);
    };

    componentDidMount() {
        if (JSON.parse(localStorage.getItem('uch')) == null) {
            this.setState({dataA: []})
        } else {
            this.setState({dataA: JSON.parse(localStorage.getItem('uch'))})
        }
        this.setState({i: 0, j: 0, t: 0})


        if (JSON.parse(localStorage.getItem('tort')) == null) {
            this.setState({dataAA: []})
        } else {
            this.setState({dataAA: JSON.parse(localStorage.getItem('tort'))})
        }
        this.setState({i: 0, j: 0, t: 0})

    }

    getItem = (name, img, price, description, skidka) => {
        let data6 = {
            "scidka": skidka,
            "name": name,
            "count": 1,
            "img": img,
            "price": price,
            "description": description
        };

        console.log(data6);
        localStorage.setItem("tort", JSON.stringify(data6));
        var storedNames = JSON.parse(localStorage.getItem("tort"));
        console.log(storedNames);
    };


    render() {

        return (
            <>
                <div className="Main">
                    <div className="CarouselRelative">
                        <Carousel className="Carousel Container">
                            <Carousel.Item className="item">
                                <img className="d-block" src={canonPhoto} alt=""/>
                            </Carousel.Item>
                            <Carousel.Item className="item">
                                <img className="d-block" src={canonPhoto} alt=""/>
                            </Carousel.Item>
                            <Carousel.Item className="item">
                                <img className="d-block" src={canonPhoto} alt=""/>
                            </Carousel.Item>
                            <Carousel.Item className="item">
                                <img className="d-block" src={canonPhoto} alt=""/>
                            </Carousel.Item>
                        </Carousel>
                    </div>


                    <div className="CardsSection Container3">
                        <div className="NewItemsTitle df">
                            <h2>Новинки</h2>
                            <a href="/NewItems">Все категории <span><BsArrowRight/></span></a>
                        </div>

                        <div className="NewItems Cards">

                            {this.state.data.map((item, key) => {
                                this.state.i++;
                                if (this.state.i <= 4) {
                                    return <div key={key}
                                                onClick={() => this.getItem(item.name, item.img, item.price, item.description, item.ckidka)}
                                                className="Card">
                                        <a href="/Item">

                                            <div className="CardHeader">
                                                <img src="https://photobuy3.netlify.app/Camera1.png" alt="sdf"/>
                                            </div>
                                            <div className="CardBody">
                                                <h4>{item.name}</h4>
                                                <p>{item.price}</p>
                                                <h6>{item.description}</h6>
                                            </div>
                                        </a>
                                        <select name="number" className='baribir' onChange={() => {
                                            this.getValue()
                                        }} id="numberOfItem">
                                            <option value={1}>1 шт.</option>
                                            <option value={2}>2 шт.</option>
                                            <option value={3}>3 шт.</option>
                                            <option value={4}>4 шт.</option>
                                            <option value={5}>5 шт.</option>
                                        </select>
                                        <div onClick={() => this.getShop(item.name, item.img, item.price, item.ckidka)}
                                             className="cart">
                                            <img src="https://photobuy3.netlify.app/cart.png" alt=""/>
                                        </div>
                                    </div>
                                }
                            })}

                        </div>
                    </div>

                    <div className="CardsSection Container3">
                        <div className="DiscountTitle df">
                            <h2>Скидки <span>%</span></h2>
                            <a href="/Discount">Все категории <span><BsArrowRight/></span></a>
                        </div>
                        <div className="DiscountItems Cards">

                            {this.state.data2.map(item2 => {
                                this.state.j++;
                                if (this.state.j <= 4) {
                                    return <div
                                        onClick={() => this.getItem(item2.name, item2.img, item2.price, item2.description)}
                                        className="Card">
                                        <a href="/Item">
                                            <div className="CardHeader">
                                                <img src="https://photobuy3.netlify.app/Camera1.png" alt="sdf"/>
                                            </div>
                                            <div className="CardBody">
                                                <h4>{item2.name}</h4>
                                                <p>{item2.price}</p>
                                                <h6>{item2.description}</h6>
                                            </div>
                                        </a>
                                        <select name="number" id="numberOfItem">
                                            <option>1 шт.</option>
                                            <option>2 шт.</option>
                                            <option>3 шт.</option>
                                            <option>4 шт.</option>
                                            <option>5 шт.</option>
                                        </select>
                                        <div
                                            onClick={() => this.getShop(item2.name, item2.description, item2.price, item2.ckidka)}
                                            className='cart'>
                                            <img src="https://photobuy3.netlify.app/cart.png" alt=""/>
                                        </div>
                                    </div>
                                }
                            })}
                        </div>
                    </div>

                    <PopularCategories/>

                    <div className="CardsSection Container3">
                        <div className="MostSellsTitle df">
                            <h2>Хиты продаж</h2>
                            <a href="/MostSells">Все категории <span><BsArrowRight/></span></a>
                        </div>

                        <div className="MostSels Cards">
                            {this.state.data3.map((item3, key) => {
                                this.state.t++;
                                if (this.state.t <= 4) {
                                    return <div key={key}
                                                onClick={() => this.getItem(item3.name, item3.img, item3.price, item3.description)}
                                                className="Card">
                                        <a href="/Item">
                                            <div className="CardHeader">
                                                <img src="https://photobuy3.netlify.app/Camera1.png" alt="sdf"/>
                                            </div>
                                            <div className="CardBody">
                                                <h4>{item3.name}</h4>
                                                <p>{item3.price}</p>
                                                <h6>{item3.description}</h6>
                                            </div>
                                        </a>
                                        <select name="number" id="numberOfItem">
                                            <option>1 шт.</option>
                                            <option>2 шт.</option>
                                            <option>3 шт.</option>
                                            <option>4 шт.</option>
                                            <option>5 шт.</option>
                                        </select>
                                        <div
                                            onClick={() => this.getShop(item3.name, item3.description, item3.price, item3.ckidka)}
                                            className="cart">
                                            <img src="https://photobuy3.netlify.app/cart.png" alt=""/>
                                        </div>
                                    </div>
                                }
                            })}
                        </div>
                    </div>


                    <FamousBrands/>

                </div>


            </>
        );
    }
}

