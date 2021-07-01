import React, {Component} from 'react';
import { Link } from "react-router-dom";

class HeaderX extends Component {
   state = {}

   render() {
      return (
          <header>
             <Link to={"/"}>
                <h3> i am a header </h3>
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

          </header>
      );
   }
}

export default HeaderX;