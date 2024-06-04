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
                    <h1 className={styles.landing_title}>Spright Universe</h1>
                    <a href="#"><img src="https://readme-typing-svg.demolab.com?font=Helvetica&weight=700&pause=1000&color=36BCF7&random=false&width=435&lines=Construa+sua+hist%C3%B3ria+no+mundo+Spright." alt="Typing SVG" /></a>

                    <a href="#"><img src="https://readme-typing-svg.demolab.com?font=Arial&weight=500&pause=1000&color=36BCF790&random=false&width=435&lines=Escolha+ser+o+salvador+ou+um+vil%C3%A3o..." alt="Typing SVG" /></a> 
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