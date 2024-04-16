import Header from "../component/header";
import "../App.css";
import Footer from "../component/footer";
import styles from "./produce.module.css";
import ProduceSub from "./producesub";
import hand from "../produceimage/handshake.png";
import Producetwo from "./producemain";
import { useNavigate } from "react-router-dom";


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
    id: 6,
    item: "Livestock",
    imagesrc: "../produceimage/Livestock.png",
  },
  {
    id: 7,
    item: "Poultry",
    imagesrc: "../produceimage/poulty.png",
  },
  {
    id: 8,
    item: "Meat",
    imagesrc: "../produceimage/Meat.png",
  },
  {
    id: 9,
    item: "Fish",
    imagesrc: "../produceimage/Fish.png",
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
  const navigate = useNavigate()
  return (
    <div className={styles.product}>
      <ProduceSub />
      <div className={styles.producelistcontainer}>
        <h3>Categories</h3>
        <ul className={styles.producelist}>
          {ProductCategories.map((product) => (
            <li key={product.id} data-aos="flip-up" data-aos-delay="600">
              <img src={product.imagesrc} alt={product.alt} /> <br />
              <strong> {product.item}</strong>
            </li>
          ))}
        </ul>
      </div>
      <div  className={styles.popularitem}>
        <h3>Popular items</h3>
        <div>
        <h4>View all</h4>
        </div>
      </div>
        <Producetwo/>
      <div className={styles.hand}>
        <div className={styles.need}>
          <h3 style={{padding: "10px 0" }} data-aos="flip-up" data-aos-delay="400">
            Connecting Farmers to Consumers <br /> Without Stress Through
            Technology
          </h3>
          <p data-aos="flip-down" data-aos-delay="600">
            No need for middlemen.Move your produce from farm and factory to
            table in no time!
          </p>
          <nav className={styles.spanbtn}>
            <div className={styles.spanbutton}>
                <button  onClick={() =>{
                  localStorage.setItem("userType","farmer")
                  navigate("/signin")
                }}  data-aos="zoom-in" data-aos-delay="600">Become a Farmer</button>
            </div>
            {/* <div className={styles.spanbutton}>
                <button onClick={()=> {
                  localStorage.setItem("userType","consumer") 
                  navigate("/signin")


                }}  data-aos="zoom-in" data-aos-delay="600" >Sign as a Consumer</button>
            </div> */}
          </nav>
        </div>
        <div>
          <img src={hand} alt="hand" />
        </div>
      </div>
    </div>
  );
};
