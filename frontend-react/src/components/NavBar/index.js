import React from "react";
import NavButton from "../NavButton";
import "./style.css";

class NavBar extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.props.class="nav-bar-component"
    // }
    render() {
        return (
            <div id="nav-bar">
                <h1>{this.props.children}</h1>
                <nav>
                    <ul className="nav-list">
                        <NavButton className="li-header" href="/">
                            Home
                        </NavButton>
                        <NavButton className="li-header" href="/cadastro">
                            Cadastrar
                        </NavButton>
                        <NavButton className="li-header" href="/deletar">
                            Deletar
                        </NavButton>
                        <NavButton className="li-header" href="/euc">
                            Editar um campo
                        </NavButton>
                        <NavButton className="li-header" href="/editar">
                            Editar varios
                        </NavButton>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;
