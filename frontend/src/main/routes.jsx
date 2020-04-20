import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Home from '../template/home'
import About from '../about/about'
import CadastroUsuario from '../template/cadastro/cadastro-usuario'
import CadastroEmpresa from '../template/cadastro/cadastro-empresa'
import Login from '../template/login/login'


export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
        <Route path='/cadastro-usuario' component={CadastroUsuario} />
        <Route path='/cadastro-empresa' component={CadastroEmpresa} />

        <Redirect from='*' to='/home' />
    </Router>
)