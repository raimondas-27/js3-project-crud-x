import React, {Component} from 'react';
import mainImage from "../static/shopImg/jeans/jeans_01.jpeg"

class ShopItem extends Component {
   state = {}

   render() {
      return (
          <div className={"shop-item"}>
             <img src={mainImage} alt="black jeans"/>
             <h5 className={"item-name"}> Trench Skinny Demin Jeans </h5>
             <p className={"item-price"}> $1.599.95</p>
          </div>
      );
   }
}

export default ShopItem;