import React, {Component} from 'react';
import './NewItems.css'
import { BsArrowLeft } from 'react-icons/bs'
import PopularCategories from "../All codes/PopularCategories/PopularCategories";


class NewItems extends Component {
    state = {
        data: [
            {
                "name": "Camera 1",
                'ckidka':10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "12.99",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 2",
                'ckidka':10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "23.54",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 3",
                'ckidka':10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "324.32",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 4",
                'ckidka':10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.32",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 5",
                'ckidka':10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.23",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 6",
                'ckidka':10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.23",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 7",
                'ckidka':10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.23",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 8",
                'ckidka':10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.23",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 9",
                'ckidka':10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.23",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 10",
                'ckidka':10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.23",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 11",
                'ckidka':10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.23",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 12",
                'ckidka':10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.23",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 13",
                'ckidka':10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.23",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 14",
                'ckidka':10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.23",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 15",
                'ckidka':10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.23",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },
            {
                "name": "Camera 16",
                'ckidka':10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.23",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            },   {
                "name": "Camera 17",
                'ckidka':10,
                "description": "This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.",
                "price": "32.23",
                "category": "apparel",
                "img": "https://photobuy3.netlify.app/Camera1.png",
            }

        ],
        data5: [],
        forData1: 0,
        forData: 0,
        dataA:[],
        card:4,
        datay:[]
    };


newCard=()=>{
    this.state.card+=4
    this.state.datay=this.state.data.slice(0,this.state.card)
    if(this.state.card-4>=this.state.data.length){
        this.setState({card:4});
        alert('barchasi tugadi')
    }
    console.log(this.state.datay);
    this.setState({forData1:0})
}
    getShop=(name, img, price,skidka)=>{
        var date1 = this.state.dataA;
        var key1 = true;
        let data6 = {
            "scidka":skidka,
            "name": name,
            "count":1,
            "img": img,
            "price": price
        }; 

        if (date1[0]===undefined) {
            date1.push(data6)
            key1 = false;
          } else {
            for (let i = 0; i < date1.length; i++) {
              if (date1[i].name === data6.name) {
                key1=false;
                date1[i].count++;
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
            this.setState({ dataA: [] })
          }
          else { this.setState({ dataA: JSON.parse(localStorage.getItem('uch')) }) }
        this.setState({forData1:0})
        this.newCard()
        // setInterval(() => {
        //     this.setState({})   
        // }, 1000);
    }

    getItem=(name, img, price, description, skidka)=>{
        let data6 = {
            "scidka":skidka,
            "name": name,
            "count":1,
            "img": img,
            "price": price,
            "description":description
        }; 

       console.log(data6);
        localStorage.setItem("tort", JSON.stringify(data6));
    var storedNames = JSON.parse(localStorage.getItem("tort"));       
        console.log(storedNames);
    }
    componentDidMount() {
        if (JSON.parse(localStorage.getItem('tort')) == null) {
            this.setState({ dataAA: [] })
          }
          else { this.setState({ dataAA: JSON.parse(localStorage.getItem('tort')) }) }
        this.setState({i:0,j:0,t:0,card:4,forData1:0})
    }


    render() {  
        return (
            <>

                <div className="NewItems Container">
                    <div className="Title">
                        <a href="/"><BsArrowLeft/></a>
                        <h2>Новинки</h2>
                    </div>
                    <div className="Cards">
                        {this.state.data.map(item => {
                            this.state.forData1++;
                            if (this.state.forData1 <= this.state.card) {
                                return <div onClick={()=> this.getItem(item.name, item.img, item.price, item.description,item.ckidka)} className="Card">
                                    <a href="/Item">
                                        <div className="CardHeader">
                                            <img src="https://photobuy3.netlify.app/Camera1.png" alt="sdf"/>
                                        </div>
                                        <div className="CardBody">
                                            <h6>{item.name}</h6>
                                            <p>{item.price}</p>
                                            <h6>{item.description}</h6>
                                        </div>
                                    </a>
                                    <select name="number" id="numberOfItem">
                                        <option>1 шт.</option>
                                        <option>2 шт.</option>
                                        <option>3 шт.</option>
                                        <option>4 шт.</option>
                                        <option>5 шт.</option>
                                    </select>
                                    <div className="cart" onClick={()=>this.getShop(item.name,item.img,item.price,item.scidka)}>
                                        <img src="https://photobuy3.netlify.app/cart.png" alt=""/>
                                    </div>
                                </div>}
                        })}
                    </div>
                    <div className="BtnMore">
                        <button onClick={()=>this.newCard()} className="Btn" >See more</button>
                    </div>
                </div>

                <PopularCategories/>

            </>
        );
    }
}

export default NewItems;