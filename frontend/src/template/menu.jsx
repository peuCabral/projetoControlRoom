import React from 'react'
import '../css/menu.css'



export default props => (
    <nav className='navbar navbar-light bg-dark' className='navbar-default'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'id='title'>
                    <i className='fas fa-couch'></i>
                    Control Room
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse' className='menu'>
                <ul className='nav navbar-nav navbar-ligth' >
                  
                    <li><a href='#/home'>Home</a></li>
                    <li><a href='#/login'>Login</a></li>
                    <li><a href='#cadastro-usuario'>Cadastro de Usuario</a></li>
                    <li><a href='#cadastro-empresa'>Cadastre Sua Empresa</a></li>

                    <li><a href='#/about'>Sobre</a></li>
                </ul>
            </div>

        </div>
    </nav>

)