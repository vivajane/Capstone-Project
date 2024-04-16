import Footer from "../component/footer";
import Header from "../component/header";
import styles from "../communityPage/pages.module.css";
import logoseven from "../images/logo-seven.png";
import { useNavigate } from "react-router-dom";
import "../App";
const RewardsPage = function () {
  return (
    <div>
      <Header />
      <Rewards />
      <Footer />
    </div>
  );
};

export default RewardsPage;
const Rewards = function () {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.communitygen}>
        <div className={styles.community}>
          <div className={styles.valuecontainer}>
            <div className={styles.valuecom}>
              <h1 data-aos="zoom-in-up" data-aos-delay="400">
                Get your reward today
              </h1>
              <h3>
                Earn valuable rewards as you buy or sell <br /> farm produce.
              </h3>
              <p>
                {" "}
                Take advantage of our various reward system, <br /> whether it's
                in the daily reward or limitless offers, <br /> we reward every
                effort you make.
              </p>
            </div>
            <div className={styles.btn}>
              <nav className={styles.spanbtn}>
                <div className={styles.spanbutton}>
                  <button
                    onClick={() => {
                      localStorage.setItem("userType", "farmer");
                      navigate("/signin");
                    }}
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  >
                    Sign in as a Farmer
                  </button>
                </div>
                <div className={styles.spanbutton}>
                  <button
                    onClick={() => {
                      localStorage.setItem("userType", "consumer");
                      navigate("/signin");
                    }}
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  >
                    Sign as a Consumer
                  </button>
                </div>
              </nav>
            </div>
          </div>
          <div className={styles.logofive}>
            <div data-aos="zoom-in-up" data-aos-delay="600">
              <img src={logoseven} alt="logoseven" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
