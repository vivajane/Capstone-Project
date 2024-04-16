import styles from "../produceditPage/producedit.module.css";
import logoimage from "../../produceimage/yam.png";
// import { SlLogout } from "react-icons/sl";
import { SlPicture } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
// import { BiChevronDown } from "react-icons/bi";
import Header from "../../component/header";
import Footer from "../../component/footer";
import ProduceComponent from "../producecomponent";
import star from "../../produceimage/star.png";
import "../../App";
import Button from "../../homepage/button/button";
import ProduceSection from "../producesection";

const ProduceOverview = () => {
  return (
    <div>
      <Header />
      <Section />
      <Footer />
    </div>
  );
};

export default ProduceOverview;

const Section = () => {
  return (
    <div className="containe">
      <section className={styles.productsection}>
        <ProduceComponent />
        <ProduceSection/>
        
      </section>
    </div>
  );
};
