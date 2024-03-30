import Header from "../component/header";
import "../App.css";
import Footer from "../component/footer";
import styles from "./produce.module.css"

const Producepage = function () {
  return (
    <div className="container">
      <div className={styles.maincontainer}>
        <Header />
        {/* <HomePageSection/> */}
        <div>Produce page</div>
        <Footer />
      </div>
    </div>
  );
};

export default Producepage;
