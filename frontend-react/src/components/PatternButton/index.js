import React from 'react';
import './style.css';
class PatternButton extends React.Component {
    render() {
        return (
            <button type="button" onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}

export default PatternButton;
