import logotwo from "../../images/logo-two.png";
import logoone from "../../images/logo-one.png";
import styles from "../../homepage/home.module.css";
import "../../App";
import { useNavigate } from "react-router-dom";

const HomePageSection = function () {
  const navigate = useNavigate();
  return (
    <div className="container" data-aos="fade-down">
      <div className={styles.section}>
        <div className={styles.para}>
          <p data-aos="zoom-in-up" data-aos-delay="600" className={styles.p}>
            Connecting Farmers to Consumers <br /> Without Stress Through
            Technology
          </p>
          <p data-aos="fade-up" data-aos-delay="600" className={styles.pp}>
            No need for middlemen. Move your produce from farm and factory to
            table in no time!
          </p>
        </div>
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
        <div className={styles.fleximage}>
          <div data-aos="zoom-in-up" data-aos-delay="600">
            <img src={logotwo} alt="kkkk" />
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="600">
            <img src={logoone} alt="gggg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePageSection;
