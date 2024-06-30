import styles from '../css/SearchContainer.module.css';

export function SearchContainer({title, html} : ComponentProps){
    return(
        <>
            <section className={styles.section_api_container}>
                <div className={styles.section_api_container_title}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.section_api_container_search}>
                    {html}
                </div>
            </section>
        </>
    )
}