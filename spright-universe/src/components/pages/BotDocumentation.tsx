import { Helmet } from "react-helmet-async";
import { LinkButton } from "../layouts/buttons/LinkButton";

import { SectionContainer } from "../layouts/container/SectionContainer";

export function BotDocumentation(){
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
                </>
            }></SectionContainer>
        </>
    )
}