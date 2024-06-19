import { Helmet } from "react-helmet-async"
import { LinkButton } from "../layouts/buttons/LinkButton"

import { SectionContainer } from "../layouts/container/SectionContainer"

import styles from './css/Home.module.css'

export function Home(){
    return(
        <>
            <Helmet>
                <title>Spright Universe [RPG] | Home</title>
            </Helmet>

            <div className={styles.landing_page}>
                <div className={styles.landing_page_panel}>
                    <h1 className={styles.landing_title}>
                        Spright Universe
                    </h1>
                    <a href="#"><img src="https://readme-typing-svg.demolab.com?font=Helvetica&weight=700&pause=1000&color=36BCF7&random=false&width=435&lines=Construa+sua+hist%C3%B3ria+no+mundo+Spright." alt="Typing SVG" /></a>

                    <a href="#"><img src="https://readme-typing-svg.demolab.com?font=Arial&weight=500&pause=1000&color=36BCF790&random=false&width=435&lines=Escolha+ser+o+salvador+ou+um+vil%C3%A3o..." alt="Typing SVG" /></a> 
                </div>
            </div>
            <SectionContainer title={"Bem-vindo ao RPG!"} html={
                <>   
                    <section>
                        <p className={styles.text_center}>
                            Saudações, aventureiro! Estamos entusiasmados em tê-lo conosco em nossa jornada através de mundos mágicos, terras misteriosas e reinos repletos de desafios épicos. Aqui, a imaginação é o limite, e cada um de nós tem um papel fundamental a desempenhar na construção de histórias inesquecíveis. <strong>🛡️ Vamos ao jogo! ⚔️</strong>
                        </p>
                        <aside>
                            <LinkButton
                            link_set="/spright_universe/server/docs/" 
                            text="Servidor - Documentação"
                            />
                            <LinkButton
                            link_set="/spright_universe/bot/docs/" 
                            text="Imu-Sama - Documentação"
                            />
                        </aside>
                    </section>
                    <hr />
                    <section>
                        <div>
                            <h2>
                                🌟 Regras Básicas para uma Grande Aventura 🌟
                            </h2>
                        </div>
                        <ol>
                            <li>
                                <strong>Respeito Acima de Tudo:</strong> Cada personagem e jogador traz algo único para a mesa. Respeite as ideias, opiniões e o tempo de todos.
                            </li>
                            <li>
                                <strong>Seja Colaborativo:</strong> RPG é um jogo de equipe. Trabalhe junto com seus colegas de grupo para enfrentar os desafios e alcançar objetivos comuns.
                            </li>
                            <li>
                                <strong>Comunicação é a Chave:</strong> Se tiver dúvidas, preocupações ou sugestões, sinta-se à vontade para compartilhá-las. Queremos garantir que todos se divirtam.
                            </li>
                            <li>
                                <strong>Seja Criativo:</strong> Não tenha medo de pensar fora da caixa. As melhores aventuras vêm de ideias ousadas e inovadoras.
                            </li>
                            <li>
                                <strong>Divirta-se!:</strong> Lembre-se, o objetivo principal é se divertir e criar memórias épicas.
                            </li>  
                        </ol>
                    </section>
                    <section>
                        <div>
                            <h2>✨ O Que Esperar ✨</h2>
                        </div>
                        <ul>
                            <li>
                                <strong>Histórias Engajantes:</strong> Prepare-se para tramas complexas e missões emocionantes que testarão suas habilidades e criatividade.
                            </li>
                            <li>
                                <strong>Personagens Memoráveis:</strong> Desenvolva e evolua seu personagem ao longo das aventuras, interagindo com NPCs fascinantes e jogadores dedicados.
                            </li>
                            <li>
                                <strong>Ambiente Acolhedor:</strong> Nosso grupo valoriza a inclusão e o respeito. Todos são bem-vindos para contribuir e aproveitar o jogo.
                            </li>
                        </ul>
                    </section>
                </>
            }/>
        </>
    )
}