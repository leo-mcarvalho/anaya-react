import "./home.scss"
export function Home() {
    return (
        <main>
            <div className="container">
                    <div className="col">
                        <h1 className="txtH1">Anaya</h1>
                        <p className="txtP">O jogo te leva para o mundo de Anaya, uma mulher preta que lida com problemas de ansiedade e busca vencer seus desafios para encontrar a felicidade e ficar em paz consigo mesma.</p>
                        <div className="btn">
                        <button className="botao" type="button">Jogue agora</button>
                        </div>
                    </div>
                    <div className="col">
                        <img className="img-anaya" src="/images/home/placeholder anaya.png" alt="Foto de uma mulher negra" />
                    </div>
            </div>
            <div className="container">
                <section className="row">
                    <div className="col">
                        <p>
                        “9,3% da população
                        brasileira sofre de
                        transtorno de
                        ansiedade”.
                        - OMS"
                        </p>
                    </div>
                    <div className="col">
                        <p>
                        Segundo uma pesquisa realizada pelo Ministério da Saúde, a ansiedade é o transtorno mais presente durante a pandemia de Covid-19. Além da ansiedade, encontrada em 86,5% dos respondentes, foi constatada uma presença moderada de transtorno do estresse pós-traumático (45,5%). A proporção de depressão grave foi um pouco mais baixa, 16%.
                        O Ministério divulgou os resultados preliminares ontem, dia 29. A pesquisa foi feita por meio de um questionário online, que ficou disponível de 23 de abril a 15 de maio deste ano. O objetivo era analisar o impacto da pandemia e isolamento social na saúde mental do brasileiro.
                        </p>
                    </div>
                    <div className="container">A primeira amostra do estudo envolveu 17.491 pessoas com idade média de 38,2 anos (variação de 18 e 92 anos), das quais 98,1% não tinham sido diagnosticadas com Covid-19. Entre eles, 20,2% eram profissionais de saúde.
                        Do total, a maioria era do sexo feminino (71,9%), de raça/cor autorreferida branca (61,3%), casados (44,3%), residentes em bairros populares (46,8%) e com renda mensal variando entre R$1.049,00 e R$2.096,00 (24,3%).
                        Segundo os dados divulgados, 25% deles concluíram ensino superior e trabalharam para uma pessoa ou empresa privada (25,5%), e 18% eram desempregados. Entre os que trabalhavam, 31% continuavam trabalhando presencialmente e 93% adotaram o distanciamento social.</div>
                    </section>
            </div>
        <div className="container">
            <section className="row">
                <div>
                    <img className="img" src="/images/home/transtorno1.svg" alt="desenho de rapaz ansioso" />
                    <img className="img" src="/images/home/transtorno2.svg" alt="desenho de moça deprimida" />
                    <img className="img" src="/images/home/transtorno3.svg" alt="desenho de moça bipolar" />
                    <img className="img" src="/images/home/transtorno4.svg" alt="desenho de rapaz esquizofrenico" />
                </div>
            </section>
        </div>
        </main>
    )
}
