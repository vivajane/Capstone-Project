import "../../App";
import logodiscover from "../../images/logofour.png";
import styles from "../home.module.css";
import connect from "../../images/Connect.png";
import workshop from "../../images/Workshop.png";
const Discovery = function () {
  return (
    <div className="container">
      <div className={styles.discover}>
        <div>
          <img src={logodiscover} alt="discover" />
        </div>
        <div>
          <div className={styles.hh}>
            <h1>Discover our Services </h1>
            <p>
              Explore our services and experiencen from the direct connection
              between farmers <br /> and consumers.
            </p>
          </div>
          <div>
            <div>
              <div className={styles.connectcon}>
                <div className={styles.connect}>
                  <img src={connect} alt="connect" />
                </div>
                <div>
                  <p>
                    Connect with local farmers and enjoy a wide variety of{" "}
                    <br /> local and fresh, seasonal produce delivered to your{" "}
                    <br /> doorstep{" "}
                  </p>
                </div>
              </div>
              <div className={styles.connectcon}>
                <div className={styles.connect}>
                  <img src={workshop} alt="workshop" />
                </div>
                <div>
                  <p>
                    Engage in workshops designed to educate both <br /> farmers
                    and consumers on sustaining farming <br /> practices and the
                    benefits of direct sourcing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Discovery;
