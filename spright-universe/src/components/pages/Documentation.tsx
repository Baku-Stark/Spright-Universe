import { Helmet } from "react-helmet-async";
import { LinkButton } from "../layouts/buttons/LinkButton";

import { SectionContainer } from "../layouts/container/SectionContainer";

import styles from './css/Documentation.module.css';
import { Link } from "react-router-dom";

export function Documentation(){
    return(
        <>
            <Helmet>
                <title>Spright Universe [RPG] | Docs</title>
            </Helmet>
            <SectionContainer title={"Documentação (Servidor)"} html={
                <>
                    <section>
                        <p>
                            Para a leitura de documentos referentes ao <strong>servidor</strong>, <strong>consulta de fichas</strong>, <strong>nerfs e buffs</strong> {"(poderes e/ou items)"}.
                        </p>
                        <aside>
                            <LinkButton
                                link_set="/" 
                                text="Página Inicial"
                            />
                        </aside>
                    </section>
                    <hr />
                    <section className={styles.section_card_doctumentation}>
                        <div className={`text-bg-dark card border-dark mb-3 ${styles.card}`}>
                            <div className={`card-header ${styles.bg_dark}`}>
                                <i className="bi bi-database"></i>
                                <span>Lista de Personagens {'(NPC e Jogadores)'}</span>
                            </div>
                            <div className={`${styles.card_body} ${styles.s_1}`}>
                                <div className={styles.card_body_text}>
                                    <p className="card-text">Personagem não jogáveis do RPG. Eles servirão para ajudá-los.</p>
                                </div>
                            </div>
                            <div className={`card-footer ${styles.bg_dark}`}>
                                <Link to={"/spright_universe/server_chars/"}>acessar</Link>
                            </div>
                        </div>

                        <div className={`text-bg-dark card border-dark mb-3 ${styles.card}`}>
                            <div className={`card-header ${styles.bg_dark}`}>
                                <i className="bi bi-grid-1x2-fill"></i>
                                <span>Informações sobre o mundo</span>
                            </div>
                            <div className={`${styles.card_body} ${styles.s_2}`}>
                                <div className={styles.card_body_text}>
                                    <p className="card-text">Conteúdo para leitura sobre o mundo.</p>
                                </div>
                            </div>
                            <div className={`card-footer ${styles.bg_dark}`}>
                                <Link to={"/spright_universe/server_info_world/"}>acessar</Link>
                            </div>
                        </div>

                        <div className={`text-bg-dark card border-dark mb-3 ${styles.card}`}>
                            <div className={`card-header ${styles.bg_dark}`}>
                                <i className="bi bi-shield-fill-check"></i>
                                <span>Empresas de Defesa</span>
                            </div>
                            <div className={`${styles.card_body} ${styles.s_3}`}>
                                <div className={styles.card_body_text}>
                                    <p className="card-text">Empresas e Agências que defendam os seresm mais fracos.</p>
                                </div>
                            </div>
                            <div className={`card-footer ${styles.bg_dark}`}>
                                <Link to={"/spright_universe/server_companys/"}>acessar</Link>
                            </div>
                        </div>

                        <div className={`text-bg-dark card border-dark mb-3 ${styles.card}`}>
                            <div className={`card-header ${styles.bg_dark}`}>
                                <i className="bi bi-body-text"></i>
                                <span>Regras do servidor</span>
                            </div>
                            <div className={`${styles.card_body} ${styles.s_4}`}>
                                <div className={styles.card_body_text}>
                                    <p className="card-text">Regras do servidor. Leitura importante!</p>
                                </div>
                            </div>
                            <div className={`card-footer ${styles.bg_dark}`}>
                                <Link to={"/spright_universe/server_rules/"}>acessar</Link>
                            </div>
                        </div>
                    </section>
                </>
            }></SectionContainer>
        </>
    )
}