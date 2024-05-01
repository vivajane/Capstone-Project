import star from "../../produceimage/star.png";
import styles from "../produce.module.css";
import Button from "../../homepage/button/button";
import { allProduct } from "../../apiRequest/allproduct";
import { useEffect, useState } from "react";
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
const Producetwo = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await allProduct();
        console.log(res.data)
        // const result = await res;
        setProducts(res.data.data);
        // console.log(result);
      } catch (error) {
        console.log(error, "error");
      }
    };

    getProduct();
  }, []);
  console.log(Popularitems, "hello");

  return (
    <div className={styles.pop} >
      <ul className={styles.popular}>
        {Popularitems &&
          Popularitems?.map((product) => (
            <li
              key={product.id}
              className={styles.li}
              data-aos="zoom-in-up"
              data-aos-delay="600"
            >
              <a href={`/producecartdetail?id=${product.id}`}>
                <img src={product.star} alt="images" /> <br />
              </a>
              <strong>{product.item} </strong>


              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
                <div>-4.0</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>{product.price}</div>
                <div>
                  <Button variant="cart" type="submit">
                    Add to Cart
                  </Button>
                </div>
              </div>
              
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Producetwo;
