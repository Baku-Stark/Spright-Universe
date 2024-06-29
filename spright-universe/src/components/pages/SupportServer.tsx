import { ChangeEvent, useState } from "react";
import { Helmet } from "react-helmet-async";
import { LinkButton } from "../layouts/buttons/LinkButton";

import { SectionContainer } from "../layouts/container/SectionContainer";

import { IReportAuth } from "../../interfaces/Form";

import styles from './css/SupportServer.module.css';

export function SupportServer(){
    const [report, setReport] = useState<IReportAuth>()

    function SendReport(event : React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        
        try {
            console.log(report);
        }
        
        catch (error) {
            console.error(error);
        }
        
        finally{
            console.log("Report send!");
        }
    }

    // ---- INPUT
    function ChangeInput(event: ChangeEvent<HTMLInputElement>){
        //console.log(event.target.value);
        setReport({...report, [event.target.name]: event.target.value});
    }

    // ---- TEXT AREA
    function ChangeTextArea(event: ChangeEvent<HTMLTextAreaElement>){
        //console.log(event.target.value);
        setReport({...report, comment: event.target.value});
    }

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
                    <section className="section_container">
                        <form
                            method="post"
                            onSubmit={SendReport}
                            className={styles.form_body}
                        >
                            {/* TITLE | COMMENT | USER_ID */}
                            <div>
                                {/* === TITLE === */}
                                <label>
                                    <span>
                                        Título
                                        <abbr title="Qual o tipo de denúncia">*</abbr>
                                    </span>
                                    <input
                                        required
                                        type="text"
                                        name="title"
                                        id={styles.title}
                                        onChange={ChangeInput}
                                        placeholder="Tipo de Denunicia (Ofensa, reclamação, etc)..."
                                        maxLength={20}
                                    />
                                </label>
                            </div>
                            <div>
                                {/* === COMMENT === */}
                                <label>
                                    <span>
                                        Descrição
                                        <abbr title="Escreva sobre o problema">*</abbr>
                                    </span>
                                    <textarea
                                        required
                                        name="comment"
                                        id={styles.comment}
                                        onChange={ChangeTextArea}
                                        placeholder="Ex: tal usuário começou a ofender os outros gratuitamente..."
                                        maxLength={200}
                                    >
                                    </textarea>
                                </label>
                            </div>
                            <div>
                                {/* === USER ID === */}
                                <label>
                                    <span>
                                        ID de Usuário {"(Discord)"}
                                        <abbr title="Apenas números neste campo">*</abbr>
                                        </span>
                                    <input
                                        required
                                        type="text"
                                        name="user_id"
                                        id={styles.user_id}
                                        onChange={ChangeInput}
                                        placeholder="Ex:  303321235679477760"
                                        maxLength={18}
                                    />
                                </label>
                            </div>
                            <hr />
                            <div>
                                <input type="submit" value="Report" />
                            </div>
                        </form>
                    </section>
                </>
            }></SectionContainer>
        </>
    )
}