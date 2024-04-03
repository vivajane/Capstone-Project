import Header from "../component/header";
// import "../App.css";
import Footer from "../component/footer";
import styles from "./produce.module.css";
import ProduceSub from "./producesub";
import hand from "../produceimage/handshake.png";
import star from "../produceimage/star.png";
import Button from "../homepage/button/button";
// import { Button } from "bootstrap";

// import logofour from "../produceimage/frametwo.png"

const ProductCategories = [
  {
    id: 1,
    item: "Vegetables",
    imagesrc: "../produceimage/vegetables.png",
    alt: "imagetwo",
  },
  {
    id: 2,
    item: "Grains",
    imagesrc: "../produceimage/Grains.png",
  },
  {
    id: 3,
    item: "fruits",
    imagesrc: "../produceimage/fruit.png",
  },
  {
    id: 4,
    item: "Seeds",
    imagesrc: "../produceimage/seed.png",
  },
  {
    id: 5,
    item: "Flowers",
    imagesrc: "../produceimage/Flowers.png",
  },
  {
    id: 5,
    item: "Livestock",
    imagesrc: "../produceimage/Livestock.png",
  },
  {
    id: 6,
    item: "Poultry",
    imagesrc: "../produceimage/poulty.png",
  },
  {
    id: 7,
    item: "Meat",
    imagesrc: "../produceimage/Meat.png",
  },
  {
    id: 8,
    item: "Fish",
    imagesrc: "../produceimage/Fish.png",
  },
];

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

const Producepage = function () {
  return (
    <div className="container">
      <Header />
      <Product />

      <Footer />
    </div>
  );
};

export default Producepage;

const Product = function () {
  return (
    <div className={styles.product}>
      <ProduceSub />
      <div className={styles.producelistcontainer}>
        <h3>Categories</h3>
        <ul className={styles.producelist}>
          {ProductCategories.map((product) => (
            <li>
              <img src={product.imagesrc} alt={product.alt} /> <br />
              <strong> {product.item}</strong>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className={styles.popular}>
          {Popularitems.map((popularitem) => (
            <li className={styles.li}>
              <img src={popularitem.star} alt="hfhf" /> <br />
              <strong>{popularitem.item} </strong>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <div>
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
                <div>
                  -4.0
                </div>
              </div>
              <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                <div>{popularitem.price}</div>
                <div><Button variant="cart" >Add to Cart</Button></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.hand}>
        <div className={styles.need}>
          <h3>
            Connecting Farmers to Consumers <br /> Without Stress Through
            Technology
          </h3>
          <p>
            No need for middlemen.Move your produce from farm and factory to
            table in no time!
          </p>
          <nav className={styles.spanbtn}>
            <div>
              <a
                data-aos="zoom-in"
                data-aos-delay="600"
                href="/signin?usertype=farmer"
              >
                Sign in as a Farmer
              </a>
            </div>
            <div>
              <a
                data-aos="zoom-in"
                data-aos-delay="600"
                href="/signin?usertype=consumer"
              >
                Sign as a Consumer
              </a>
            </div>
          </nav>
        </div>
        <div>
          <img src={hand} alt="hand" />
        </div>
      </div>
    </div>
  );
};
