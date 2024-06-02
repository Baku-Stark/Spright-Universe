import { Helmet } from "react-helmet-async"
import { LinkButton } from "../buttons/LinkButton"

import styles from './css/Home.module.css'

export function Home(){
    return(
        <>
            <Helmet>
                <title>Spright Universe [RPG] | Home</title>
            </Helmet>
            <div className="landing-page"></div>
            <div className={`section-container ${styles.section}`}>
                <h1 className="main-title">Welcome to Spright Universe!</h1>
                <LinkButton link_set="/docs" text="Server Documentation"/>
            </div>
        </>
    )
}