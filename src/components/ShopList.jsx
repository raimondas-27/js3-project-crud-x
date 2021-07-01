import React, {Component} from 'react';
import ShopItem from "./ShopItem";

class ShopList extends Component {
   state = {}

   render() {
      return (
          <div className={"shop-list d-flex"}>
             {this.props.shopItems.map((oneItem) => (
                 <ShopItem key={oneItem._id} oneItem={oneItem}/>
             ))}
          </div>
      );
   }
}

export default ShopList;