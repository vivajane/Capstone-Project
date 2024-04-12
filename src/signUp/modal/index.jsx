import styles from "../../signIn/sign.module.css";
import { useNavigate } from "react-router-dom";
const SignUpModal = ({ setShowModal, response }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.modal}>
      <div className={styles.modalsign}>
        <h3>Verify your email address</h3>
        <p>
          A verification code has been <br /> sent to your email address.
        </p>
        <div>
          <button onClick={setShowModal}>CLOSE</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
