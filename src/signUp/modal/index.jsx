import styles from "../../signIn/sign.module.css";
import { useNavigate } from "react-router-dom";
const ModalSign = ({ setShowModal, response }) => {
  const navigate = useNavigate();
  const closeModal = function () {
    setShowModal(false);
    //   if(response.data.user_type === "consumer"){
    //     navigate("/registerconsumer")
    //   } else{ navigate("/registerfarmer")}
    //   console.log(" I am the if statement")

 
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalsign}>
        <h3>Verify your email address</h3>
        <p>
          A verification code has been <br /> sent to your email address.
        </p>
        <div>
          <button onClick={closeModal}>CLOSE</button>
        </div>
      </div>
    </div>
  );
};

export default ModalSign;
