// import styles from "../home.module.css"
import styles from "../../signIn/sign.module.css"
const Button = function({children, variant, type, onClick}){
    return <button variant={variant} onClick={onClick} className={styles.btno} type={type || "button"}>{children}  </button>
}

export default Button;