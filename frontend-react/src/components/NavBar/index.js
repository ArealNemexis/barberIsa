import React from "react";
import NavButton from "../NavButton";
import "./style.css";

class NavBar extends React.Component {
    render() {
        return (
            <div id="nav-bar">
                <h1>{this.props.children}</h1>
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
                    <NavButton className="li-header" href="/ev">
                        Editar varios
                    </NavButton>
                </ul>
            </div>
        );
    }
}

export default NavBar;
