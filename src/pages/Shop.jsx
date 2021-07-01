import React, {Component} from 'react';
import Button from "../UI/Button";
import ShopList from "../components/ShopList";


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
                <div className={"social"}>
                   {this.props.shop.socialLinks.map((oneSocialLink) => (
                       <a className={"socialLink-item"}
                          target="_blank"
                          key={oneSocialLink.to}
                          href={oneSocialLink.to}
                       >
                          <i className={oneSocialLink.icon}></i>
                       </a>
                   ))}
                </div>
             </aside>
             <main className={"shop-list"}>
                <ShopList/>
             </main>
          </div>
      );
   }
}

export default Shop;