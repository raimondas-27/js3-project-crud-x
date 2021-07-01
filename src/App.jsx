import React, {Component} from 'react';
import HeaderX from "./components/HeaderX";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

import './App.css';

class App extends Component {
   state = {
      navLinks: [
         {to: "", title: "Home"},
         {to: "/shop", title: "Shop"},
         {to: "/about", title : "About"},
      ]
   }

   render() {
      return (
          <div className="App">
             <HeaderX navLinks={this.state.navLinks}/>
             <Home/>
             <Shop/>
          </div>
      );
   }
}

export default App;
