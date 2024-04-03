import logotwo from "../../images/logo-two.png";
import logoone from "../../images/logo-one.png";
import styles from "../../homepage/home.module.css"
import "../../App";
const HomePageSection = function(){
    return (
        <div className="container" class="page home" data-aos="fade-down">
          <div className={styles.section} >
            <div className={styles.para} >
              <p  data-aos="zoom-in-up" data-aos-delay="600">
                Connecting Farmers to Consumers <br /> Without Stress Through
                Technology
              </p>
              <p data-aos="fade-up" data-aos-delay="600">
                No need for middlemen.Move your produce from farm and factory to
                table in no time!
              </p>
            </div>
            <nav className={styles.spanbtn}>
            <div>
              {/* <Button> */}
                <a data-aos="zoom-in" data-aos-delay="600" href="/signin?usertype=farmer">Sign in as a Farmer</a>
              {/* </Button> */}
            </div>
            <div>
              {/* <Button> */}
                <a data-aos="zoom-in" data-aos-delay="600" href="/signin?usertype=consumer">Sign as a Consumer</a>
              {/* </Button> */}
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