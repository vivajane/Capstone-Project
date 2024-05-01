import Header from "../../component/header";
import Footer from "../../component/footer";
import ProduceSub from "../producesub";
// import { BiChevronLeft } from "react-icons/bi";
// import ProduceSection from "../producesection";
import styles from "../produceditPage/producedit.module.css";
import fish from "../../produceimage/catfish.png";
import star from "../../produceimage/star.png";
import Button from "../../homepage/button/button";
import ProduceMini from "../producemini";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProduceDetail = function () {
  return (
    <div>
      <Header />
      <div className={styles.sub}>
        <ProduceSub />
      </div>
      <Produce />
      <ProduceMini />
      <Footer />
    </div>
  );
};

export default ProduceDetail;

export const Produce = function () {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("id"));

  const id = searchParams.get("id");

  const Popularitems = [
    {
      id: 1,
      item: "Big Basket of Tomatoes",
      star: "../produceimage/tomato.png",
      text: "-4.0",
      price: 12000,
    },
    {
      id: 2,
      item: "Painter of onions",
      star: "../produceimage/onion.png",
      text: "-4.0",
      price: 1500,
    },
    {
      id: 3,
      item: "Cabbage Medium Size",
      star: "../produceimage/cabbage.png",
      text: "-4.0",
      price: 500,
    },
    {
      id: 4,
      item: "Basket of Carrot",
      star: "../produceimage/carrot.png",
      text: "-4.0",
      price: 1000,
      quantity: 10,
    },
    {
      id: 5,
      item: "Mangoes",
      star: "../produceimage/mangoes.png",
      text: "-4.0",
      price: 200,
    },
    {
      id: 6,
      item: "Eggs",
      star: "../produceimage/eggs.png",
      text: "-4.0",
      price: 2500,
    },
    {
      id: 7,
      item: "Fresh Chicken",
      star: "../produceimage/chickenfrozen.png",
      text: "-4.0",
      price: 7000,
    },
    {
      id: 8,
      item: "50kg of Rice",
      star: "../produceimage/rice.png",
      text: "-4.0",
      price: 70000,
    },
    {
      id: 9,
      item: "Smoked Catfish Large",
      star: "../produceimage/catfish.png",
      text: "-4.0",
      price: 4500,
    },
    {
      id: 10,
      item: "Tubers of Yam",
      star: "../produceimage/yam.png",
      text: "-4.0",
      price: 2500,
    },
  ];

  const Produce = Popularitems?.find((item) => item.id === +id);
  console.log(Produce, "produce");

  const navigate = useNavigate()

  const[quantity, setQuantity] = useState(0)

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
    console.log(quantity)

  }
  const decreaseQuantity = () => {
    if(quantity > 0){
      setQuantity(quantity - 1)
    console.log(quantity)

    }
    

  }

  const onClickHandler = () => {
    navigate("/mycart")
    


  }

  return (
    <div className={styles.tubers}>
      <div className={styles.tubersflexx}>
        <div className={styles.imgflexxx}>
          <div className={styles.fish}>
            <img src={Produce?.star} alt="imgg" />
          </div>
        </div>
        <div className={styles.classclass}>
          <div>
            <h3>{Produce?.item}</h3>
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
            Yams are carbohydrates used in making different varieties of food.
            You can make <br /> porridge yam, pounded yam, white yam and
            sauce,etc.
          </p>
          <h3>{Produce?.price}</h3>
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
                      <button onClick={decreaseQuantity}>-</button>
                      <p>{quantity}</p>
                      <button onClick={increaseQuantity}>+</button>
                    </div>
                    <div>
                      <p>
                        {Produce.quantity} items left! <br /> don't miss it!
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.btnflex}>
                  <div>
                    <Button variant="cartt" onClick={onClickHandler} >Add to Cart</Button>
                  </div>
                  <div>
                    <Button variant="cartt">Buy Now</Button>
                  </div>
                </div>
                <div className={styles.star}>
                  <div>
                    <img src={star} alt="" />
                  </div>
                  <div className={styles.free}>
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
        <p>
          <a href="/">View all</a>
        </p>
      </div>
    </div>
  );
};
