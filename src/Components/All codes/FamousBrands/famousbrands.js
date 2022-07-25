import React, {Component} from 'react';
import './famousbrands.css'
import appleLogo from '../imgs/apple.png'


class FamousBrands extends Component {
   render() {
      return (
          <>
             <div className="FamousBrands Container2">
                <h2>Популярные бренды</h2>
                <div className="ForScroll">
                   <div className="rows2">
                      <div className="apple column-2">
                         <img src={appleLogo} alt=""/>
                      </div>
                      <div className="column-2">
                         <img src={appleLogo} alt=""/>
                      </div>
                      <div className="column-2">
                         <img src={appleLogo} alt=""/>
                      </div>
                      <div className="column-2">
                         <img src={appleLogo} alt=""/>
                      </div>
                      <div className="mi column-2">
                         <img src={appleLogo} alt=""/>
                      </div>
                   </div>
                </div>
             </div>
          </>
      );
   }
}

export default FamousBrands;