import styles from '../css/SectionContainer.module.css'

export function SectionContainer({title, html} : any){
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

            <div className={styles.section_container_body}>
                {html}
            </div>
        </section>
    )
}