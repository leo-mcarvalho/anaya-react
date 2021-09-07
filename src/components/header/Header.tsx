import "./header.scss"
export function Header() {
    return (
        <header className="headerContainer">
            <nav className="nav">
                <ul>
                    <li><a href="/#">Jogar</a></li>
                    <li><a href="/#">Sobre</a></li>
                </ul>
                <a className="logo" href="/#"><img src="/images/header/Anaya.svg" alt="" /></a>
                <div className="right-nav">
                    <a href="/#">Login</a>
                <div className="circulo"><img className="bars" src="/images/header/bars-solid.svg" alt="" /></div>
                </div>
            </nav>
        </header>
    )
}