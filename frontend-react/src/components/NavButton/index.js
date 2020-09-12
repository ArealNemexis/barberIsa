import React from 'react';
import './style.css';

class NavButton extends React.Component {
    
    render(){
        return (
            <li className={this.props.className}><a href={this.props.href}>{this.props.children}</a></li>
        );
    }
    
}

export default NavButton;
