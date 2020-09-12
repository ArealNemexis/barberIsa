import React from 'react';
import NavBar from '../../components/NavBar'
import api from "../../services/api";
import PatternButton from "../../components/PatternButton"
import "./style.css"

class Cadastrar extends React.Component {

   constructor(props) {
       super(props);
       this.cadastroButton = this.cadastroButton.bind(this)
   }

    async cadastroButton() {
       //const id = document.getElementById('form-cadastro').value

       var name = document.getElementById('name').value;
       var cpf = document.getElementById('cpf').value;
       var phone = document.getElementById('phone').value;

       await api.post('/customers', {
           name,
           cpf,
           phone
       });

     document.getElementById('name').value='';
     document.getElementById('cpf').value='';
     document.getElementById('phone').value='';

    }

    render() {

      
        return (
            <div>
                <NavBar>BarberIsa</NavBar>

                <form id = "form-cadastro">
                    <label className="css-test"  htmlFor="name">Name:</label>
                    <input id='name' type='text' name='name'/>

                    <label className="css-test" htmlFor="cpf">Cpf:</label>
                    <input id="cpf" type="text"  name = "cpf"/>

                    <label className="css-test" htmlFor="phone">Phone:</label>
                    <input id="phone" type="text"  name = "phone"/>

                    <PatternButton onClick={this.cadastroButton}>
                        Enviar
                    </PatternButton>
                </form>
            </div>

        );

        
        
    }

   

}

export default Cadastrar;