import "./home.scss"
import { Zoom, Fade } from "react-awesome-reveal";
export function Home() {
    return (
        <main className="home">
            <Zoom>
                <section className="top">
                    <div className="container">
                        <div className="col">
                            <h1 className="txtH1">Sinopse</h1>
                            <p className="descricao">O jogo é uma história interativa que te leva para o mundo de Anaya, uma mulher preta que lida com problemas de ansiedade e busca vencer seus desafios e traumas para encontrar a felicidade e ficar em paz consigo mesma.
                                E você pode ajuda-la nessa jornada de autoconhecimento, mergulhe na vida dela e use sua experiência para guia-la em meio aos desafios da vida adulta.</p>
                            <div className="btn">
                                <button className="botao" type="button">Jogue agora</button>
                            </div>
                        </div>
                        <div className="right-block">
                            <img className="img-anaya" src="/images/home/Anaya_22.png" alt="Foto de uma mulher negra" />
                        </div>
                    </div>
                </section>
            </Zoom>
            <section className="bot">
                <div className="container">
                    <Fade delay={500}>
                        {/* <div className="col"> */}
                        <p id="citacao" className="citacao">
                            “9,3% da população
                            brasileira sofre de
                            transtorno de
                            ansiedade”.
                            - OMS"
                        </p>
                        {/* </div> */}
                    </Fade>
                    <Fade delay={1000}>
                        {/* <div className="right-block"> */}
                        <p className="txtP">
                            O Brasil é o país com a maior taxa de pessoas com transtornos de ansiedade no mundo e o quinto em casos de depressão. Segundo estimativas da Organização Mundial da Saúde (OMS) divulgadas nesta quinta-feira, 23, 9,3% dos brasileiros têm algum transtorno de ansiedade e a depressão afeta 5,8% da população. Pesam nesse cenário, dizem especialistas, fatores socioeconômicos, como pobreza e desemprego, e ambientais, como o estilo de vida em grandes cidades.
                        </p>
                        {/* </div> */}
                    </Fade>
                </div>
                <div className="container">
                    <Fade delay={1100}>
                        <p className="txtP">O transtorno de ansiedade é marcado por sintomas como a dificuldade de concentração, problemas no sono e preocupação excessiva. Segundo André Brunoni, psiquiatra do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (USP), esses sintomas podem levar ao quadro depressivo, caracterizado pelos sintomas do transtorno acrescido de alterações no humor, como apatia, solidão, tristeza, além do isolamento social e dores sem justificativa física. </p>
                    </Fade>
                </div>
                <Fade delay={1000}>
                    <div className="container">
                        <img className="game-pic" src="images/home/games.jpeg" alt="foto de duas pessoas jogando videogame" />
                    </div>
                </Fade>
                <Fade delay={1000}>
                    <div className="container">
                        <p className="txtP">“Os games são excelentes recursos, pois podem ampliar as possibilidades de diálogo, distrações, além de facilitar aprendizados e conexões nesse contexto de isolamento social”, afirma Elisa Faria, psicóloga da Ama Psicologia Clínica em Natal, Rio Grande do Norte (RN). “Antes da pandemia, era comum relatos sobre a ausência de tempo para atividades em conjunto, promovendo, portanto, certos distanciamentos ainda que todos morando em uma mesma residência. Agora, com a necessidade que todos fiquem em casa, essas atividades interativas podem ajudar a construir essas aproximações e mais tempo em família”.</p>
                    </div>
                </Fade>
                <Fade delay={1100}>
                    <div className="container">
                        <p className="txtP">“Estar em casa, mesmo acompanhado, e não poder socializar com mais ninguém traz o desafio de lidar com as emoções de maneira totalmente diferente”, comenta Luciana Vainstoc, psicóloga esportiva. “Os videogames são, sim, uma forma de socializar, de estar perto mesmo estando longe. Os jogos são espaços de união para momentos em família, para compartilhar, se conectar, deixar um pouco de lado as obrigações. Quando nos conectamos com nossa parte mais lúdica e criativa, a ansiedade e angústia podem baixar”.</p>
                    </div>
                </Fade>
                <Zoom>
                    <div className="imgs">
                        <div className="transtornos">
                            <img className="imagem" src="/images/home/transtorno1.svg" alt="desenho de rapaz ansioso" />
                            <img className="imagem" src="/images/home/transtorno2.svg" alt="desenho de moça deprimida" />
                            <img className="imagem" src="/images/home/transtorno3.svg" alt="desenho de moça bipolar" />
                            <img className="imagem" src="/images/home/transtorno4.svg" alt="desenho de rapaz esquizofrenico" />
                        </div>
                    </div>
                </Zoom>
            </section>
        </main>
    )
}
