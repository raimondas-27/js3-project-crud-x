import React, {Component} from 'react';

class SocialIcons extends Component {
   state = {}

   render() {
      return (
          <div className={"social"}>
             {this.props.socialLinks.map((oneSocialLink) => (
                 <a className={"socialLink-item"}
                    target="_blank"
                    key={oneSocialLink.to}
                    href={oneSocialLink.to}
                 >
                    <i className={oneSocialLink.icon}></i>
                 </a>
             ))}
          </div>
      );
   }
}

export default SocialIcons;