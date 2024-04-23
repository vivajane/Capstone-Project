import styles from "../../producePage/produceditPage/producedit.module.css";
// import logoimage from "../../produceimage/yambig.png";
import star from "../../produceimage/star.png";
import Button from "../../homepage/button/button";
import { useState } from "react";

const Carts = [
  {
    id: 1,
    imagesrc: "../../produceimage/yambig.png",
   
    name: "Tubers of Yam",
    desc: " Yams are carbohydrates used in making different varieties of food, You can <br> make porridge yam, pounded yam, white yam and sauce",
    price: "NGN5000",
    no: 0
  },
];
const ProduceSection = function () {
  const [add, setAdd] = useState(Carts)

  return (
    <div className={styles.editproductt}>
      {add &&
        add.map((Cart) => (
          <div className={styles.tubersflex}>
            <div className={styles.imgflexxx}>
              <div>
                <img src={Cart.imagesrc} alt="imgg" />
              </div>
            </div>
            <div>
              <div>
                <h3>{Cart.name}</h3>
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
                {Cart.desc}
              
              </p>
              <h3>{Cart.price}</h3>
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
                          <p></p>
                          <button  >+</button>
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
                        <Button variant="cartt">Add Product</Button>
                      </div>
                      <div>
                        <Button variant="cartt">Save Product</Button>
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
        ))}
    </div>
  );
};

export default ProduceSection;
