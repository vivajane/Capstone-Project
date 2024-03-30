import styles from "../home.module.css";
// import "../../App";
import "../../App.css"
const Numerals = function () {
  return (
    <div className="container">
      <div className={styles.numerals}>
        <div className={styles.numcontent}>
          <span className={styles.numspan}>
            <span><h1>10K +</h1> </span>
          </span>
          <p className={styles.farmers}>Farmers</p>
        </div>
        <div>
          <span className={styles.numspan}>
          <span><h1>200K +</h1> </span>
          </span>
          <p className={styles.farmers}>Customers</p>
        </div>
        <div>
          <span>
          <span><h1>5000 +</h1> </span>
          </span>
          <p className={styles.farmers}>Suppliers</p>
        </div>
      </div>
    </div>
  );
};

export default Numerals;
