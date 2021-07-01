import React, {Component} from 'react';
import Button from "../UI/Button";


class Shop extends Component {
   state = {}

   render() {
      return (
          <div className={"shop-page"}>
             <aside className={"categories-aside"}>
                <div className={"categories"}>
                   {this.props.shop.shopCategories.map((oneLink) => (
                          <Button key={oneLink._id} oneCategory={oneLink}/>
                   ))}
                </div>
                <div className={"social"}>
                   {this.props.shop.socialLinks.map((oneSocialLink) => (
                       <a key={oneSocialLink.to} href={oneSocialLink.to} className={oneSocialLink.icon}></a>
                   ))}
                </div>
             </aside>
          </div>
      );
   }
}

export default Shop;