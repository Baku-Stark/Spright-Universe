import { Link } from 'react-router-dom';

import Logo from '../../../img/logo.png';
import styles from '../css/FooterContainer.module.css'

export function FooterContainer(){
    const year = new Date().getFullYear();

    return(
        <footer>
            <section className={styles.footer_links_content}>
                <figure>
                    <img src={Logo} alt="Logo Footer" />
                </figure>
                <aside>
                    <Link to={"https://discord.gg/95EZ7R9DuY"} id={styles.link_button} target={'_blank'}>
                        <i className={"bi bi-discord"}></i>
                        Servidor Discord
                    </Link>
                </aside>
                <aside>
                    <Link to={"/spright_universe/server_support/"}
                    id={styles.helper}>
                        Suporte
                    </Link>
                    <Link to={"/spright_universe/about_server/"}
                    id={styles.helper}>
                        Sobre o servidor
                    </Link>
                    <Link to={"https://discord.com/guidelines/"} target={'_blank'} id={styles.helper}>
                        Diretrizes do Discord
                    </Link>
                </aside>
            </section>
            <section className={styles.footer_copiright_content}>
                <p className='mb-0'>
                    Copyright &copy; {year} Baku-Stark. All rights reserved.
                </p>
            </section>
        </footer>
    )
}