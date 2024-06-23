import { Helmet } from "react-helmet-async";
import { SectionContainer } from "../layouts/container/SectionContainer";
import { LinkButton } from "../layouts/buttons/LinkButton";

import styles from './css/RulesServer.module.css'

export function RulesServer(){
    return(
        <>
            <Helmet>
                <title>Regras do Servidor</title>
            </Helmet>
            <SectionContainer title={"Regras"} html={
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
                    <section className={styles.rules_section}>
                        <div>
                            <h2>
                                1. ⚔️ Regras Gerais de Comportamento
                            </h2>
                            <ul>
                                <li>
                                    <strong>Respeito Mútuo:</strong> Trate todos os membros com respeito e cordialidade. Comportamento tóxico, bullying, racismo, sexismo, ou qualquer forma de discriminação não será tolerado.
                                </li>
                                <li>
                                    <strong>Linguagem Apropriada:</strong> Use uma linguagem apropriada para todos os públicos. Evite palavrões e linguagem ofensiva.
                                </li>
                                <li>
                                    <strong>Spam e Food:</strong> Não envie mensagens repetitivas ou irrelevantes em canais de texto ou voz.
                                </li>
                                <li>
                                    <strong>Privacidade:</strong> Não compartilhe informações pessoais suas ou de outros membros. Respeite a privacidade de todos.
                                </li>
                                <li>
                                    <strong>Conflitos:</strong> Resolva conflitos de maneira civilizada. Se necessário, peça a intervenção de um moderador.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                2. ⚔️ Regras Específicas de RPG
                            </h2>
                            <ul>
                                <li>
                                    <strong>Respeito Mútuo:</strong> Trate todos os membros com respeito e cordialidade. Comportamento tóxico, bullying, racismo, sexismo, ou qualquer forma de discriminação não será tolerado.
                                </li>
                                <li>
                                    <strong>Linguagem Apropriada:</strong> Use uma linguagem apropriada para todos os públicos. Evite palavrões e linguagem ofensiva.
                                </li>
                                <li>
                                    <strong>Spam e Food:</strong> Não envie mensagens repetitivas ou irrelevantes em canais de texto ou voz.
                                </li>
                                <li>
                                    <strong>Privacidade:</strong> Não compartilhe informações pessoais suas ou de outros membros. Respeite a privacidade de todos.
                                </li>
                                <li>
                                    <strong>Conflitos:</strong> Resolva conflitos de maneira civilizada. Se necessário, peça a intervenção de um moderador.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                3. ⚔️ Regras para Canais de Texto e Voz
                            </h2>
                            <ul>
                            <li>
                                <strong>Canais de Texto:</strong> Use os canais de texto apropriados para diferentes tópicos {"(RP, OOC - Out of Character, anúncios, etc.)"}. Evite discussões fora do tema do canal.
                            </li>
                            
                            <li>
                                <strong>Canais de Voz:</strong> Respeite quem está falando. Evite falar por cima dos outros e mantenha o microfone mudo quando não estiver falando.
                            </li>
                            
                            <li>
                                <strong>Gravações e Streams:</strong> Não grave ou transmita sessões de jogo sem a permissão de todos os participantes.
                            </li>

                            </ul>
                        </div>
                        <div>
                            <h2>
                                4. ⚔️ Regras para Mods e Admins
                            </h2>
                            <ul>
                                <li>
                                    <strong>Autoridade:</strong> Respeite as decisões dos moderadores e administradores. Eles estão aqui para garantir uma experiência agradável para todos.
                                </li>
                                <li>
                                    <strong>Denúncias e Punições:</strong> Caso veja uma violação das regras, reporte para um moderador ou administrador. Punições serão aplicadas conforme a gravidade da infração (advertência, mute, kick, ban).
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                5. ⚔️ Regras de Customização e Personalização
                            </h2>
                            <span>{"(Não é obrigatório)"}</span>
                            <ul>
                                <li>
                                    <strong>Avatares e Nomes de Usuário:</strong> Avatares e nomes de usuário devem ser apropriados e não ofensivos. Nomes devem refletir claramente quem você é no servidor.
                                </li>
                                <li>
                                    <strong>Bios e Perfis:</strong> Informações em bios e perfis devem ser relevantes ao servidor e apropriadas para todos os públicos.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                6. ⚔️ Regras de Interações Fora do Jogo
                            </h2>
                            <ul>
                                <li>
                                    <strong>Discussões OOC {'(Out of Character)'}:</strong> Mantenha discussões OOC amigáveis e respeitosas. Evite discussões polêmicas que possam causar conflitos.
                                </li>
                                <li>
                                    <strong>Eventos e Atividades:</strong> Participe de eventos e atividades conforme as regras estabelecidas pelos organizadores. Respeite os horários e as instruções fornecidas.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <article>
                                <h3>Consequências para Violações</h3>
                                <ul className={styles.tags_violation}>
                                    <li>
                                        <span className={styles.rule_adv}>Advertência Verbal</span> <i className="bi bi-arrow-right"></i> Para infrações leves.
                                    </li>
                                    <li>
                                        <span className={styles.rule_mute}>Mute Temporário</span> <i className="bi bi-arrow-right"></i> Para comportamentos que interrompem a experiência dos outros.
                                    </li>
                                    <li>
                                        <span className={styles.rule_kick}>Kick</span> <i className="bi bi-arrow-right"></i> Remoção temporária do servidor para reflexões sobre o comportamento.
                                    </li>
                                    <li>
                                        <span className={styles.rule_ban}>Ban</span> <i className="bi bi-arrow-right"></i> Remoção permanente do servidor para violações graves ou repetidas.
                                    </li>
                                </ul>
                            </article>
                            <article>
                                <h3>Observações Finais</h3>
                                <ul>
                                    <li>
                                        <strong>Feedback:</strong> Estamos abertos a feedbacks e sugestões para melhorar o servidor.
                                    </li>
                                    <li>
                                        <strong>Atualizações das Regras:</strong> As regras podem ser atualizadas conforme necessário. Mantenha-se informado sobre quaisquer mudanças.
                                    </li>
                                </ul>
                            </article>
                        </div>
                    </section>
                </>
            }></SectionContainer>
        </>
    )
}