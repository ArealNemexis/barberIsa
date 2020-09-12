import React from 'react';
import './style.css';
class PatternButton extends React.Component {
    render() {
        return <button type="button">{this.props.children}</button>;
    }
}

export default PatternButton;
