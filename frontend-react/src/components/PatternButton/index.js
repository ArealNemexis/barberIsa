import React from 'react';
import './style.css';
class PatternButton extends React.Component {
    constructor(props){

        super(props)
        console.log(props);
    }
    render() {
        return (
            <button  className={this.props.className} type="button" onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}

export default PatternButton;
