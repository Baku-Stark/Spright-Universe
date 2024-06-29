import { Helmet } from "react-helmet-async";
import { SectionContainer } from "../layouts/container/SectionContainer";
import { LinkButton } from "../layouts/buttons/LinkButton";

import styles from '../layouts/css/ApiContainer.module.css';

export function CharsServer(){
    return(
        <>
            <Helmet>
                <title>Spright Universe | Personagens</title>
            </Helmet>
            <SectionContainer title={"Spright Personagens"} html={
                <>
                    <section>
                        <p>
                            Procure informações sobre algum personagem.
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
                    <section className={styles.section_api_container}>
                        <div className={styles.section_api_container_title}>
                            <h2>Personagens</h2>
                        </div>
                        <div className={styles.section_api_container_search}>
                            <input type="search" name="" id="" />
                        </div>
                        <div className={styles.section_api_container_content}>
                            conteudo
                        </div>
                    </section>
                </>
            }></SectionContainer>
        </>
    )
}