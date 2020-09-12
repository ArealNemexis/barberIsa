import React from "react";
import NavBar from "../../components/NavBar";
import api from "../../services/api";
import './home.css'

class Home extends React.Component {
    state = {
        customers: [],
    };

    async componentDidMount() {
        const response = await api.get("customers");

        this.setState({ customers: response.data });
    }

    render() {
        const { customers } = this.state;

        return (
            <div>
                <NavBar>BarberIsa</NavBar>
                <ul className="list-components">
                    {customers.map((customer) => (
                        <li className="components">
                            <h2>ID:{customer.id}</h2>
                            <p>Nome: {customer.name}</p>
                            <p>CPF: {customer.cpf}</p>
                            <p>Phone: {customer.phone}</p>
                        </li>
                    ))}
                </ul>
                
            </div>
        );
    }
}

export default Home;
