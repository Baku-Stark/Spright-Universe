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
                    <h1>Spright Universe</h1>
                </div>
            </div>
            <SectionContainer title={"Bem-vindo ao RPG!"} html={
                <>   
                    <LinkButton link_set="/docs" text="Server Documentation" />
                </>
            }/>
        </>
    )
}