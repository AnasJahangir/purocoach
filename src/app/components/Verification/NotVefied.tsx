import styles from "./Verification.module.css"
import { RxCrossCircled } from "react-icons/rx";

export const NotVefied = ({handleBtn} : {handleBtn: () => void}) => {
    return (
        <div className={`${styles.verification} ${styles.not_verified}`}>
            <span><RxCrossCircled/></span>
            <h2>Email Could Not Be Verified</h2>
            <p>Our apologies, but we couldn’t verify your email address. Please go back to confirm all your information is accurate.</p>
            <button onClick={handleBtn}><span>Go back</span></button>
        </div>
    )
}