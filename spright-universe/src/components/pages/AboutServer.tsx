import { Helmet } from "react-helmet-async";
import { SectionContainer } from "../layouts/container/SectionContainer";
import { LinkButton } from "../layouts/buttons/LinkButton";

import styles from './css/AboutServer.module.css'

export function AboutServer(){
    return(
        <>
            <Helmet>
                <title>Sobre o servidor</title>
            </Helmet>
            <SectionContainer title={"Sobre o servidor"} html={
                <>
                    <section>
                        <p>
                            O Spright Universe é um site interativo criado para proporcionar uma experiência única aos seus usuários. Com um design moderno e funcionalidades avançadas, o site é ideal para aqueles que buscam uma navegação intuitiva e conteúdos envolventes.
                        </p>
                        <p>
                            A ideia da criação do servidor foi para o criador, Baku-Stark, possa melhorar suas habilidades em Full-Stack.
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
                    <section className={styles.table_container}>
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan={4}>Tecnologias Utilizadas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <i className="devicon-react-original colored"></i>
                                        <p className="mb-2 mt-2">
                                            React
                                        </p>
                                    </td>
                                    <td>
                                        <i className="devicon-typescript-plain colored"></i>
                                        <p className="mb-2 mt-2">
                                            TypeScript
                                        </p>
                                    </td>
                                    <td>
                                        <i className="devicon-javascript-plain colored"></i>
                                        <p className="mb-2 mt-2">
                                            JavaScript {"(Bot - Discord)"}
                                        </p>
                                    </td>
                                    <td>
                                        <i className="devicon-nodejs-plain-wordmark colored"></i>
                                        <p className="mb-2 mt-2">
                                            Node JS
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </>
            }></SectionContainer>
        </>
    )
}