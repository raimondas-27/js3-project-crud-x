import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import "font-awesome/css/font-awesome.css"

import HeaderX from "./components/HeaderX";
import Home from "./pages/Home";
import Shop from "./pages/Shop";


import './App.css';

class App extends Component {
   state = {
      navLinks: [
         {to: "", title: "Home"},
         {to: "/shop", title: "Shop"},
         {to: "/about", title: "About"},
      ],
      shop: {
         shopCategories: [
            {_id: 1, title: "Accessories"},
            {_id: 2, title: "Denim"},
            {_id: 3, title: "Footwear"},
            {_id: 4, title: "Jeans"},
            {_id: 5, title: "T-Shirts"},
         ],
         socialLinks: [
            {to: "https://www.facebook.com", icon: "fa fa-facebook"},
            {to: "https://www.instagram.com", icon: "fa fa-instagram"},
            {to: "https://www.twitter.com", icon: "fa fa-twitter"},
         ],
         shopItems: [
            {
               _id: 1,
               title: "Trench Skinny Demin Jeans",
               price: 799.99,
               image: "jeans",
               color: "black",
               size: "normal",
               clothes_direction : "jeans",
            },
            {
               _id: 2,
               title: "Omari Jacket - Black",
               price: 1599.99,
               image: "jackets",
               color: "black",
               size: "normal",
               clothes_direction : "jackets",
            },
            {
               _id: 3,
               title: "Quebec Denim Shirt - Black",
               price: 699.99,
               image: "shirts",
               color: "black",
               size: "large",
               clothes_direction : "shirts",
            },
         ],
         shopItemColours : ["White", "Black", "Blue"],
      },
   }

   render() {
      return (
          <div className="App">
             <HeaderX navLinks={this.state.navLinks}/>
             <div className={"container"}>
                <Switch>
                   {/* kai reikia perduoti props i route, mes tai darome su sekancia sintakse apacioje:*/}
                   <Route path={"/shop"} render={(props) =>
                       <Shop
                           shop={this.state.shop}
                           {...props} />}
                   />
                   <Route exact path={"/"}
                          component={Home}/>
                </Switch>
             </div>
          </div>
      );
   }
}

export default App;
