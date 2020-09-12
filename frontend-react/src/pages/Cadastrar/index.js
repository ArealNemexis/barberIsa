import React from 'react';
import NavBar from '../../components/NavBar'
import api from "../../services/api";

import PatternButton from "../../components/PatternButton"
class Cadastrar extends React.Component {

    state = {
        costumers : [],
    };

    async componentDidMount() {
        const response = await api.get("customers");

        this.setState({ customers: response.data });
    }

    render() {

      
        return (
            <div>
                <NavBar>BarberIsa</NavBar>

                <form>
                    <label for="name">Name:</label>
                    <input id="name" type="text"  name = "name"/>

                    <label for="cpf">Cpf:</label>
                    <input id="cpf" type="text"  name = "cpf"/>
                    <PatternButton>
                        Enviar
                    </PatternButton>

                </form>
            </div>

        );

        
        
    }

   

}

export default Cadastrar;