import { Helmet } from "react-helmet-async";
import { LinkButton } from "../layouts/buttons/LinkButton";

import { SectionContainer } from "../layouts/container/SectionContainer";

import commands from "../../../commands.node.json";

import styles from "./css/BotDocumentation.module.css"

export function BotDocumentation(){
    const commandList = commands;

    return(
        <>
            <Helmet>
                <title>Spright Universe [RPG] | Docs</title>
            </Helmet>
            <SectionContainer title={"Imu-Sama"} html={
                <>
                    <section>
                        <aside>
                            <LinkButton
                                link_set="/" 
                                text="Página Inicial"
                            />
                        </aside>
                    </section>
                    <hr/>
                    <section>
                        <div>
                            <h2>
                                <i className="bi bi-caret-left-fill"></i>
                                Comandos do Imu-Sama
                                <i className="bi bi-caret-right-fill"></i>
                            </h2>
                        </div>
                        <div className={styles.list_commands}>
                            <ul>
                                {
                                    commandList.map((item, index) => (
                                        <li key={index} className="fs-5">
                                            <span className={styles.command_name}>
                                                /{item['command']}
                                            </span>
                                            <p className={`${styles.command_desc} mb-0`}>
                                                {item['desc']}
                                            </p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </section>
                </>
            }></SectionContainer>
        </>
    )
}