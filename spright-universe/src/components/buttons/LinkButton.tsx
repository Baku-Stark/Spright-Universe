import { Link } from "react-router-dom";
import styles from './css/LinkButton.module.css';

export function LinkButton({link_set, text} : any){
    return(
        <Link to={link_set} className={styles.layouts_btn}>
            {text}
        </Link>
    )
}