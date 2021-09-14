import "./header.scss"
import { Component } from "react"
import { slide as Menu } from 'react-burger-menu'

class Burger extends Component {
    render () {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
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
                    {/* <a href="/#"><div className="circulo"><img className="bars" src="./images/header/bars-solid.svg" alt="" /></div></a> */}
                    <a href="/#"><div className="circulo"><><Burger/></></div></a>
                </div>
            </nav>
        </header>
    )
}
