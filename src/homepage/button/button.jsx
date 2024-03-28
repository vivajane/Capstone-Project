// import styles from "../home.module.css"
import styles from "../../signIn/sign.module.css"
const Button = function({children, variant}){
    return <button variant={variant} className={styles.btno}>{children}</button>
}

export default Button;