import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Button from "../UI/Button";
import ShopList from "../components/ShopList";
import ShopSingleItem from "../components/ShopSingleItem";
import SocialIcons from "../UI/SocialIcons";


class Shop extends Component {
   state = {}

   render() {
      return (
          <div className={"shop-page d-flex"}>
             <aside className={"categories-aside"}>
                <div className={"categories"}>
                   {this.props.shop.shopCategories.map((oneLink) => (
                       <Button key={oneLink._id}
                               oneCategory={oneLink}
                       />
                   ))}
                </div>
                <SocialIcons socialLinks={this.props.shop.socialLinks}/>
             </aside>
             <main className={"shop-list"}>
                <Route path="/shop/item/1" render={(props) =>
                    <ShopSingleItem {...props}
                                    socialLinks={this.props.shop.socialLinks}
                                    shopItemColours={this.props.shop.shopItemColours}
                                    shopItems={this.props.shop.shopItems}/>}/>
                <Route path="/shop" render={(props) =>
                    <ShopList {...props}
                              shopItems={this.props.shop.shopItems}/>}/>
             </main>
          </div>
      );
   }
}

export default Shop;