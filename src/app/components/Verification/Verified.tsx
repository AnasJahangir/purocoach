import styles from "./Verification.module.css"
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export const Verified = () => {
    return (
        <div className={`${styles.verification} ${styles.verified}`}>
        <span><IoCheckmarkCircleOutline/></span>
            <h2>Email Verified</h2>
            <p>Your email has been verified. Now let's get you scheduled for your free consultation with an expert.</p>
            <button><span>Schedule Your free consultation</span></button>
        </div>
    )
}