import React, {Component} from 'react';
import './Item.css'


// icons
import {BsArrowLeft} from 'react-icons/bs'
import PopularCategories from "../All codes/PopularCategories/PopularCategories";
import FamousBrands from "../All codes/FamousBrands/famousbrands";

class Item extends Component {


      state={
         dataA:[],
         dataAA:[],
         key:1
      }

plus=()=>{
   this.state.key++
   this.setState({})
   console.log(this.state.key);
}
minus=()=>{
   if(this.state.key>1){this.state.key--
   this.setState({})}
   console.log(this.state.key);
}
      getShop=()=>{
         var date1 = this.state.dataA;
         var key1 = true;
         console.log(this.state.dataAA);
         let data6 = {
             "scidka":this.state.dataAA.scidka,
             "name": this.state.dataAA.name,
             "count":this.state.key,
             "img": this.state.dataAA.img,
             "price": this.state.dataAA.price
         }; 
 
         if (date1[0]===undefined) {
             date1.push(data6)
             key1 = false;
           } else {
             for (let i = 0; i < date1.length; i++) {
               if (date1[i].name === data6.name) {
                 key1=false;
                 date1[i].count+=this.state.key;
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
         if (JSON.parse(localStorage.getItem("tort")) !== null) {
             this.setState({dataAA: JSON.parse(localStorage.getItem("tort"))})
         }
         if (JSON.parse(localStorage.getItem('uch')) == null) {
            this.setState({ dataA: [] })
          }
          else { this.setState({ dataA: JSON.parse(localStorage.getItem('uch')) }) }
        this.setState({i:0,j:0,t:0})
    }

      

   render() {
      return (
          <>   

  <div className="Item Container">
                <div className="TitleItem">
                   <a href="/"><BsArrowLeft/></a>
                   <h2>Товары</h2>
                </div>
                <div className="ContentItem">
                   <div className="ImagesItem">
                      <div className="SmallImgItem">
                         <img src={this.state.dataAA.img} alt=""/>
                         <img src={this.state.dataAA.img} alt=""/>
                      </div>
                      <img className="BigImgItem" src={this.state.dataAA.img} alt=""/>
                   </div>
                   <div className="InfoItem">
                        <h3>{this.state.dataAA.name}</h3>
                      <div className="TextItem">
                         {/* <h6> Арт. 890.321.44  /  <span>Под заказ на 4.04.2021</span></h6> */}
                         <p>{this.state.dataAA.description}</p>
                         <div className="PriceItem">
                            <h4><span>{this.state.dataAA.price}</span> Сум</h4>
                            <div className="NumberItem">
                               <button onClick={this.plus}>+</button><p>{this.state.key}</p><button onClick={this.minus}>-</button>
                            </div>
                         </div>
                         <a href='/Cart'>
                         <div className="ButtonItemAdd" onClick={()=> this.getShop()}>
                            Добаить в корзину +
                         </div>
                        </a>
                      </div>
                   </div>
                </div>
             </div>

             <PopularCategories/>

             <FamousBrands/>

          </>
      );
   }
}

export default Item;