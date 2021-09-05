import React from 'react'

function Header() {
    return (
        <header>
            <a href="/#">Jogar</a>
            <a href="/#">Sobre</a>
            <img src="/public/images/header/Anaya.svg" alt="logo do jogo Anaya" />
            <a href="#/">Login</a>
            <div className="circulo"></div>
            <div className="burger"></div>
        </header>
    )
}

export default Header
