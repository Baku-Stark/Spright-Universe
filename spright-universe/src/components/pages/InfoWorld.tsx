import { Helmet } from "react-helmet-async"
import { SectionContainer } from "../layouts/container/SectionContainer"
import { LinkButton } from "../layouts/buttons/LinkButton"

export function InfoWorld(){
    return(
        <>
            <Helmet>
                <title>Informações sobre o mundo</title>
            </Helmet>

            <SectionContainer title={"Mundo - Spright"} html={
                <>
                    <section>
                        <p>
                            Regra da comunidade. Segui-las para manter um ambiente saudável e acolhedor, além de divertido aos jogadores.
                        </p>
                        <aside>
                            <LinkButton
                                link_set="/" 
                                text="Página Inicial"
                            />
                            <LinkButton
                                link_set="/spright_universe/server/docs/" 
                                text="Servidor - Documentação"
                            />
                        </aside>
                    </section>
                    <hr />
                    <section>
                        <div>
                            <p>
                                Após a explosão de uma estrela, toda a radiação emitida pelo corpo celeste viajou pelo espaço até que, por causa do destino, atingiu o planeta Terra, afetando toda os seres vivos {"(humanos e animais)"}. Este fenômeno foi nomeado de <strong>Primeiro Impacto</strong>, ocorrendo no ano de 2030.
                            </p>
                            <p>
                                No se passar dos anos, depois do Primeiro Impacto, especificamente em 2124, a humanidade e os animais já sofreram mutações ao longo dos anos, dando-lhes formas e/ou habilidades que tornou ambas as espécie em seu auge. Atualmente, em 2150, toda a raça utiliza a nova fonte de energia como o sustento e pavimento para sustentabilidade.
                            </p>
                            <p>
                                No início do século XXVI, um evento catastrófico mudou para sempre o curso da história da Terra. Um meteoro de proporções gigantescas entrou na atmosfera do planeta, causando destruição massiva ao colidir com a superfície. No entanto, o impacto não foi o único fenômeno extraordinário desse evento. Do meteoro emanava uma energia desconhecida, que os cientistas da época denominaram de <strong>Energia Spright</strong>.
                            </p>
                        </div>
                        <div>
                            <h2>A Nova Ordem Mundial</h2>
                            <p>
                                Com o aumento da população de Despertos, surgiram conflitos entre aqueles que desejavam usar seus poderes para dominar o mundo e aqueles que queriam proteger a humanidade. Superpotências globais começaram a treinar equipes de Despertos para missões especiais, ou empresas privadas faziam isso através de contratos, tanto defensivas quanto ofensivas.
                            </p>
                        </div>
                        <div>
                            <h2>Evolução e Convivência</h2>
                            <p>
                                Décadas se passaram, e a sociedade aprendeu a coexistir com os Despertos. A Energia Spright tornou-se uma parte fundamental da vida na Terra, influenciando tudo, desde a medicina até a tecnologia. Algumas cidades foram reconstruídas com a ajuda dos poderes dos Despertos, enquanto outras ainda sofriam com os conflitos entre diferentes facções.
                            </p>
                        </div>
                        <div>
                            <h2>O Futuro da Humanidade
                            </h2>
                            <p>
                                O futuro da humanidade continua incerto. A Energia Spright, apesar de ser uma fonte de grande poder, também é imprevisível e perigosa. Cientistas e líderes mundiais trabalham incansavelmente para entender seus mistérios e garantir que seu uso seja responsável. No entanto, com o surgimento contínuo de novos Despertos e a evolução de seus poderes, a humanidade deve permanecer vigilante e adaptável. 
                            </p>
                        </div>
                    </section>
                </>
            }></SectionContainer>
        </>
    )
}