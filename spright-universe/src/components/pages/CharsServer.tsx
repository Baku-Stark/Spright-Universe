import { Helmet } from "react-helmet-async";
import { ChangeEvent, FormEvent, useState } from "react";

import { LinkButton } from "../layouts/buttons/LinkButton";
import { SectionContainer } from "../layouts/container/SectionContainer";
import { SearchContainer } from "../layouts/container/SearchContainer";
import { ISearchCharAuth } from "../../interfaces/Form";

import styles from '../../components/layouts/css/SearchContainer.module.css';
import styles_page from './css/CharsContainer.module.css';

export function CharsServer(){
    const [char, setChar] = useState<ISearchCharAuth>();

    function ChangeInputSearch(event: ChangeEvent<HTMLInputElement>): void {
        setChar({...char, [event.target.name] : event.target.value
        });
    }
    
    function SubmitSearch(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log(char);
    }

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
                    <SearchContainer title={"Painel de Busca"} html={
                        <>
                            <form
                                method="get"
                                className={styles.form_body}
                                onSubmit={SubmitSearch}
                            >
                                <div>
                                    <label>
                                        <span>Nome do personagem</span>
                                        <input
                                            type="search"
                                            name="character"
                                            id={styles.search_bar}
                                            onChange={ChangeInputSearch}
                                            placeholder={"Digite o nome do personagem"}
                                        />
                                    </label>
                                </div>
                                <hr />
                                <div>
                                    <input type="submit" value="Procurar" />
                                </div>
                            </form>
                        </>
                    }>
                    </SearchContainer>
                    <section className={styles_page.character_container}>
                        <div className={styles_page.character_name}>
                            <h2 >
                                Nome Titulo
                            </h2>
                        </div>
                        <div></div>
                    </section>
                </>
            }></SectionContainer>
        </>
    )
}