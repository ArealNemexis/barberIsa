import React from "react";
import ReactDOM from "react-dom";
//import App from './App';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cadastrar from "./pages/Cadastrar";
import DeletePage from "./pages/DeletePage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cadastro" component={Cadastrar} exact />
            <Route path="/deletar" component={DeletePage} exact />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
