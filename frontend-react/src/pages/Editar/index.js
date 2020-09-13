import React from 'react'
import NavBar from '../../components/NavBar'
import api from "../../services/api";
import PatternButton from "../../components/PatternButton"
import './style.css'

class Editar extends React.Component {
    constructor(props) {
        super(props)
        this.editarButton = this.editarButton.bind(this)
    }

    async editarButton() {

        const id = document.getElementById('id').value;

        var name = document.getElementById('name').value;
        var cpf = document.getElementById('cpf').value;
        var phone = document.getElementById('phone').value;

        await api.put(`/customers/${id}`, {
            id,
            name,
            cpf,
            phone
        })

        document.getElementById('id').value='';

        document.getElementById('name').value='';
        document.getElementById('cpf').value='';
        document.getElementById('phone').value='';
    }


    render() {

        return (
            <div>
                <NavBar>BarberIsa</NavBar>

                <form id = "form-edicao">

                    <label className="cssed-test"  htmlFor="id">ID:</label>
                    <input id='id' type='text' name='id'/>

                    <label className="cssed-test"  htmlFor="name">Name:</label>
                    <input id='name' type='text' name='name'/>

                    <label className="cssed-test" htmlFor="cpf">Cpf:</label>
                    <input id="cpf" type="text"  name = "cpf"/>

                    <label className="cssed-test" htmlFor="phone">Phone:</label>
                    <input id="phone" type="text"  name = "phone"/>

                    <PatternButton className="edicao-button" onClick={this.editarButton}>
                        Editar
                    </PatternButton>
                </form>
            </div>
        );
    }
}

export default Editar;