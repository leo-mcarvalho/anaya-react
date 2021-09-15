import "./header.scss"
import { Component } from "react"
import { slide as Menu } from 'react-burger-menu'

class Burger extends Component {
    render () {
        return (
        <Menu right isOpen={ false } customBurgerIcon={ <img src="./images/header/bars-solid.svg" alt="bars" />} customCrossIcon={ <img src="./images/header/close.svg" alt="close"/> } noOverlay width={'300px'} disableOverlayClick>
            <a id="meuperfil" className="menu-item" href="/meuperfil">Meu perfil</a>
            <a id="infopessoais" className="menu-item" href="/infopessoais">Informações Pessoais</a>
            <a id="conquistas" className="menu-item" href="/conquistas">Conquistas</a>
            <a id="histescolhas" className="menu-item" href="/histescolhas">Histórico de Escolhas</a>
            <a id="cadastro" className="menu-item" href="/cadastro">Cadastro</a>
        </Menu>
        );
    }
}

export function Header() {
    return (
        <header className="headerContainer">
            <nav className="nav">
                <ul>
                    <li><a href="/#">Jogar</a></li>
                    <li><a href="/#">Sobre</a></li>
                </ul>
                <div className="anaya">
                    <a href="/#"><img className="logo" src="/images/header/Anaya.svg" alt="" /></a>
                </div>
                <div className="right-nav">
                    <a href="/#">Login</a>
                    <div className="circulo"><><Burger/></></div>
                </div>
            </nav>
        </header>
    )
}
