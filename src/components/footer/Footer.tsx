import "./footer.scss"
export function Footer() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
            <div className="divisor-div">
                <hr className="divisor" />
            </div>
            <footer className="footer-container">
                <div>
                    <div className="line">
                        <a href="/#"><img className="insta" src="images/footer/instagram icon.svg" alt="logo instagram" /></a>
                        <p>&copy;2021. Criado por</p>
                        <p>Topo</p>
                    </div>
                    <div className="line">
                        <a href="/#"><img className="face" src="images/footer/Facebook icon.svg" alt="logo facebook" /></a>
                        <div>
                            <img className="unknown" src="images/footer/unknown 1.svg" alt="logo Unknown" />
                        </div>
                        <div>
                            <button type="button" onClick={() => scrollToTop()} id="btn-back-to-top">
                                <img className="arrow" src="images/footer/scroll top arrow.svg" alt="seta apontando para cima" />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}