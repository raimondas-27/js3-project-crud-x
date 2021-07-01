import React, {Component} from 'react';
import ShopItem from "./ShopItem";

class ShopList extends Component {
   state = {}

   render() {
      return (
          <div className={"shop-list d-flex"}>
             <ShopItem/>
             <ShopItem/>
             <ShopItem/>
          </div>
      );
   }
}

export default ShopList;