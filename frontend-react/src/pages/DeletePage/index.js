import React from 'react';
import NavBar from '../../components/NavBar';
import PatternButton from '../../components/PatternButton';
import './style.css';

class DeletePage extends React.Component {
    render() {
        return (
            <div>
                <NavBar>BarberIsa</NavBar>
                <form id="form-delete">
                    <label htmlFor="Id-delete">ID:</label>
                    <input type="text" id="Id-delete"></input>
                    <PatternButton onClick={this.handleClick}>
                        Apagar
                    </PatternButton>
                </form>
            </div>
        );
    }
}

export default DeletePage;
