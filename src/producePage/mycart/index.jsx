import styles from "../../producePage/produceditPage/producedit.module.css";
import logo from "../../produceimage/yambig.png";
import logoone from "../../produceimage/tomato.png";
import logotwo from "../../produceimage/carrot.png";
import { BiSolidMessageSquareX } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";

const Carts = [
  {
    Name: "Tubers of Yam",
    Type: "Water Yam",
    Size: "ExtraLarge",
    id: 1,
    img: "../../produceimage/yam.png",
    Amount: "NGN500",
  },
  {
    Name: "Tomatoes",
    Type: "Tomato Jos",
    Size: "Large",
    id: 2,
    img: "../../produceimage/tomato.png",
    Amount: "NGN5000",
  },
  {
    Name: "Carrot",
    Type: "Fresh Carrot",
    Size: "Medium",
    id: 3,
    img: "../../produceimage/carrot.png",
    Amount: "NGN200",
  },
];
const MyCart = function () {
  return (
    <div className={styles.cartt}>
      <div>
        <div className={styles.mycart}>
          <div>
            <span>My Cart</span>
            <span
              style={{
                backgroundColor: "green",
                padding: " 0 7px",
                borderRadius: "10px",
              }}
            >
              3
            </span>
          </div>
          <div>
            <BiSolidMessageSquareX />
          </div>
        </div>
        <div>
          <ul>
            {Carts.map((cart) => (
              <li key={cart.id}>
                <div className={styles.cartflex}>
                  <div>
                    <img src={cart.img} alt="ff" />
                  </div>
                  <div className={styles.name}>
                    <h3>{cart.Name}</h3>
                    <p>{cart.Type}</p>
                    <p>{cart.Size}</p>
                    <div className={styles.pp}>
                        <button>-</button>
                        <button>1</button>
                        <button>+</button>
                    </div>
                  </div>
                  <div >
                    <div>{cart.Amount}</div>
                    <div className={styles.bi}>
                      <BiSolidTrash />
                    </div>
                  </div>
                </div>
                <div></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
