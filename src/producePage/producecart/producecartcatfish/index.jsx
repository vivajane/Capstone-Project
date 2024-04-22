import Header from "../../../component/header";
import Footer from "../../../component/footer";
import ProduceSub from "../../producesub";
// import { BiChevronLeft } from "react-icons/bi";
// import ProduceSection from "../producesection";
import styles from "../../produceditPage/producedit.module.css"
import fish from "../../../produceimage/catfish.png"
import star from "../../../produceimage/star.png"
import Button from "../../../homepage/button/button";
import ProduceMini from "../../producemini";

const ProduceCartCatFish = function () {
  return (
    <div>
      <Header />
      <div className={styles.sub}><ProduceSub /></div>
      <Produce/>
      <ProduceMini/>
      <Footer />
    </div>
  );
};

export default ProduceCartCatFish;

export const Produce = function () {
  return (
    <div className={styles.tubers}>
    <div className={styles.tubersflexx}>
      <div className={styles.imgflexxx}>
        <div className={styles.fish}>
          <img src={fish} alt="img" />
        </div>
      </div>
      <div>
        <div>
          <h3>Smoked Catfish</h3>
        </div>
        <div className={styles.classflex}>
          <div>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
          <p>(121)</p>
        </div>
        <p>
          Yams are carbohydrates used in making different varieties of food. You
          can make <br /> porridge yam, pounded yam, white yam and sauce,etc.
        </p>
        <h3>NGN 5000</h3>
        <p>Suggested payments with 6 months special financing</p>
        <hr />
        <div className={styles.guide}>
          <p>Select Size</p>
          <p>Size Guide</p>
        </div>
        <div className={styles.large}>
          <p>Extra Large</p>
          <p>Large</p>
          <p>Medium</p>
          <p>Small</p>
        </div>
        <hr />
        <div>
          <div>
            <div>
              <div>
                <h4 style={{ padding: "10px 0" }}>Quantity</h4>
                <div className={styles.btnp}>
                  <div className={styles.pb}>
                    <button>-</button>
                    <p>0</p>
                    <button>+</button>
                  </div>
                  <div>
                    <p>
                      12 items left! <br /> don't miss it!
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.btnflex}>
                <div>
                  <Button variant="cartt">Add to Cart</Button>
                </div>
                <div>
                  <Button variant="cartt">Buy Now</Button>
                </div>
              </div>
              <div className={styles.star}>
                <div>
                  <img src={star} alt="" />
                </div>
                <div>
                  <h4>Free delivery</h4>
                  <a href="/">
                    Enter your Postal Code for Delivery Availability
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.view}>
    <h3>Recommended for You</h3>
    <p><a href="/">View all</a></p>
    </div>
    </div>
  );
};
