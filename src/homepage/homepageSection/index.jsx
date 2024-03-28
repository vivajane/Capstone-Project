import logotwo from "../../images/logo-two.png";
import logoone from "../../images/logo-one.png";
import styles from "../../homepage/home.module.css"
// import "../../App";
const HomePageSection = function(){
    return (
        <div className={styles.container}>
          <div className={styles.section}>
            <div className={styles.para}>
              <p>
                Connecting Farmers to Consumers <br /> Without Stress Through
                Technology
              </p>
              <p>
                No need for middlemen.Move your produce from farm and factory to
                table in no time!
              </p>
            </div>
            <nav className={styles.spanbtn}>
            <div>
              {/* <Button> */}
                <a href="/signin">Sign in as a Farmer</a>
              {/* </Button> */}
            </div>
            <div>
              {/* <Button> */}
                <a href="hhhkk">Sign as a Consumer</a>
              {/* </Button> */}
            </div>
          </nav>
            <div className={styles.fleximage}>
              <div>
                <img src={logotwo} alt="kkkk" />
              </div>
              <div>
                <img src={logoone} alt="gggg" />
              </div>
            </div>
          </div>
        </div>
      );

};
export default HomePageSection;