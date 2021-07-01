import React, {Component} from 'react';
import "./Button.css";

class Button extends Component {
   state = {}

   render() {
      return (
          <div>
             <li className={"categories-item"}>{this.props.oneCategory.title}</li>
          </div>
      );
   }
}

export default Button;