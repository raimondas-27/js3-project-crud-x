import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class ShopItem extends Component {
   state = {}

   render() {

      const {price, image, title, clothes_direction} = this.props.oneItem;

      return (
          <div className={"shop-item"}>
             <Link to={"/shop/item/1"}>
                <img src={require(`../static/shopImg/${clothes_direction}/${image}_main_image/${image}_main_img.jpeg`)
                    .default}
                     alt={title}/>
                <h5 className={"item-name"}>{title}</h5>
                <p className={"item-price"}>{price}</p>
             </Link>
          </div>
      );
   }
}

export default ShopItem;