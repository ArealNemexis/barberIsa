import React from 'react';
import NavBar from '../../components/NavBar';
import PatternButton from '../../components/PatternButton';
import './style.css';
import api from '../../services/api';

class DeletePage extends React.Component {
    constructor(props) {
        super(props);
        this.deleteButton = this.deleteButton.bind(this);
    }
    async deleteButton() {
        const id = document.getElementById('Id-delete').value;

        await api.delete(`/customers/${id}`);
        document.getElementById('Id-delete').value = '';
    }
    render() {
        return (
            <div>
                <NavBar>BarberIsa</NavBar>
                <form id="form-delete">
                    <label htmlFor="Id-delete">ID:</label>
                    <input type="text" id="Id-delete"></input>
                    <PatternButton className="delete-button" onClick={this.deleteButton}>
                        Apagar
                    </PatternButton>
                </form>
            </div>
        );
    }
}

export default DeletePage;
