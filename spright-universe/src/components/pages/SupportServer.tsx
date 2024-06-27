import { Helmet } from "react-helmet-async";
import { LinkButton } from "../layouts/buttons/LinkButton";

import { SectionContainer } from "../layouts/container/SectionContainer";

import styles from './css/SupportServer.module.css'


export function SupportServer(){
    return(
        <>
            <Helmet>
                <title>Suporte ao Jogadores</title>
            </Helmet>
            <SectionContainer title={"Suporte"} html={
                <>
                    <section>
                        <p>
                            Reporte ofensas e/ou xingamentos. Não é tolerado qualquer tipo de desrespeito com os jogadores!
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
                        <form
                        method="post"
                        className={styles.form_body}
                        >

                        </form>
                    </section>
                </>
            }></SectionContainer>
        </>
    )
}