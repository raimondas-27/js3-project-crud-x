import React, {Component} from 'react';
import {Link} from "react-router-dom";

class HeaderX extends Component {
   state = {}

   render() {
      return (
          <header className={"header"}>
             <div className={"container d-flex space-between"}>
                <Link className={"logo"} to={"/"}>
                   JS3<strong>Shop</strong>X
                </Link>
                <nav className={"main-nav"}>
                   {this.props.navLinks.map((oneLink) => (
                       <Link key={oneLink.title}
                             className={"nav-link-item"}
                             to={oneLink.to}
                       >
                          {oneLink.title}
                       </Link>
                   ))}
                </nav>
             </div>

          </header>
      );
   }
}

export default HeaderX;