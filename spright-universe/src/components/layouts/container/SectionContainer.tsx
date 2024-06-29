import { useEffect } from 'react';
import styles from '../css/SectionContainer.module.css'

interface ComponentProps{
    title : string;
    html : JSX.Element;
}

export function SectionContainer({title, html} : ComponentProps){
    useEffect(() => {
        document.documentElement.scrollIntoView(true);
    });
    return(
        <section className={`${styles.section_container} ${styles.section}`}>

            <div className={styles.section_container_title}>
                <h1 className={styles.main_title}>
                    (<span className={styles.select}></span>) {title}
                </h1>
                <aside>
                    <i className="bi bi-dice-1-fill"></i>
                    <i className="bi bi-dice-3-fill"></i>
                    <i className="bi bi-dice-6-fill"></i>
                </aside>
            </div>

            {/* PARTE DO HTML <section> */}
            <div className={styles.section_container_body}>
                {html}
            </div>
        </section>
    )
}