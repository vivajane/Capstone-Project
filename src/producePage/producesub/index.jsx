import styles from "../produce.module.css";
import logo from "../../produceimage/Vector.png";
import logoone from "../../produceimage/frameone.png";
import logotwo from "../../produceimage/framethree.png";
import logothree from "../../produceimage/framefour.png";
const ProduceSub = function () {
  return (
    <div>
      <div className={styles.flexdeals}>
        <div className={styles.deals}>
          <div className={styles.flexi}>
            <h2>Hot deals for you!</h2>
            <img src={logo} alt="jjj" />
          </div>
          <p>
            AgroLink make getting healthy, fresh food easier <br /> by
            connecting farmers to consumers.
          </p>
        </div>
        <div className={styles.fast}>
          <div>
            <img src={logoone} alt="one" />
            <h3>Fresh</h3>
            <p>
              Our produce are fresher <br /> than in-store items.
            </p>
          </div>
          <div>
            <img src={logotwo} alt="three" />
            <h3>Healthy</h3>
            <p>
              The best farm-sourced organic <br /> food is safest for your
              health.
            </p>
          </div>
          <div>
            <img src={logothree} alt="four" />
            <h3>Fast</h3>
            <p>
              Enjoy shopping with the fastest <br /> delivery possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProduceSub;
