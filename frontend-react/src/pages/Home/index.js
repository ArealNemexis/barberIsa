import React from "react";
import NavBar from "../../components/NavBar";
import api from "../../services/api";

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
                <ul>
                    {customers.map((customer) => (
                        <li>
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
