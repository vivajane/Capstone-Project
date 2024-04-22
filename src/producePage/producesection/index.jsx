import styles from "../../producePage/produceditPage/producedit.module.css"
import logoimage from "../../produceimage/yambig.png"
import star from "../../produceimage/star.png"
import Button from "../../homepage/button/button";
const ProduceSection = function () {
  return (
    <div className={styles.editproductt}>
     
      <div className={styles.tubersflex}>
        <div className={styles.imgflexxx}>
          <div>
            <img src={logoimage} alt="img" />
          </div>
          
        </div>
        <div>
          <div>
            <h3>Tubers of Yam</h3>
          </div>
          <div>
            <div>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p>(121)</p>
          </div>
          <p>
            Yams are carbohydrates used in making different varieties of food.
            You can make <br /> porridge yam, pounded yam, white yam and
            sauce,etc.
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
    </div>
  );
};

export default ProduceSection
