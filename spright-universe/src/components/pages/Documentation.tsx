import { Helmet } from "react-helmet-async";
import { LinkButton } from "../layouts/buttons/LinkButton";

import { SectionContainer } from "../layouts/container/SectionContainer";

import styles from './css/Documentatio.module.css';

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
                        <div className={`${styles.card} card border-light mb-3`}>
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Light card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className={`${styles.card} card border-light mb-3`}>
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Light card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className={`${styles.card} card border-light mb-3`}>
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Light card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className={`${styles.card} card border-light mb-3`}>
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Light card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </section>
                </>
            }></SectionContainer>
        </>
    )
}