import React, {Component} from 'react';
import SocialIcons from "../UI/SocialIcons";

class ShopSingleItem extends Component {
   state = {}

   render() {


      return (
          <div className={"single-shop-item"}>
             <div className={"single-shop-item__content"}>
                <div className={"single-shop-item__photo"}>
                   <img src={require(`../static/shopImg/jeans/jeans_main_image/jeans_main_img.jpeg`)
                       .default}
                        alt={"jeans"}/>
                </div>
                <div className={"single-shop-item__description"}>
                   <h5 className={"single-shop-item__description-title"}> {this.props.shopItems[0].title} </h5>
                   <h5 className={"single-shop-item__description-price"}> {this.props.shopItems[0].price} </h5>
                   <div className={"single-shop-item__description-options"}>
                      <div className={"single-shop-item__description-colour"}>
                         <h5> Colour : </h5>
                         <select name="colour" id="colour">
                            <optgroup className={"options-colour"}>
                               <option value="White">{this.props.shopItemColours[0]}</option>
                               <option value="Black">{this.props.shopItemColours[1]}</option>
                               <option value="Blue">{this.props.shopItemColours[2]}</option>
                            </optgroup>
                         </select>
                      </div>
                      <div className={"single-shop-item__description-size"}>
                         <h5> Size : </h5>
                         <select name="size" id="size">
                            <option value="38">38</option>
                            <option value="40">40</option>
                            <option value="42">42</option>
                         </select>
                      </div>
                   </div>
                   <div className={"single-shop-item__description-buttons"}>
                      <button> Add to chart</button>
                      <button> Buy it now</button>
                   </div>
                   <SocialIcons socialLinks={this.props.socialLinks}/>
                </div>
             </div>
          </div>
      );
   }
}

export default ShopSingleItem;