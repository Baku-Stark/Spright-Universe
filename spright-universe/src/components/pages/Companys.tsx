import { Helmet } from "react-helmet-async";
import { SectionContainer } from "../layouts/container/SectionContainer";
import { LinkButton } from "../layouts/buttons/LinkButton";

export function Companys(){
    return(
        <>
            <Helmet>
                <title>Spright Universe | Companhias de Defesa</title>
            </Helmet>
            <SectionContainer title={"Companhias de Defesa do Mundo"} html={
                <>
                    <section>
                        <p>
                            Todas as empresas privadas e/ou públicas do mundo que oferecem serviçõs de proteção à populção global.
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
                </>
            }></SectionContainer>
        </>
    )
}