import styles from "../../producePage/produceditPage/producedit.module.css";
import logo from "../../produceimage/yambig.png";
import logoone from "../../produceimage/tomato.png";
import logotwo from "../../produceimage/carrot.png";
import Button from "../../homepage/button/button";
import { useState } from "react";
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
  const [increase, setIncrease] = useState(0)
 
  const [deleteitems, setDeleteitems] = useState(Carts)

  const deleteHandler = function(id){
    const deleted = deleteitems.filter((deleteitem) => deleteitem.id !== id)
    setDeleteitems(deleted)
    console.log(deleted)
  }
  const onClickHandler = () => {
    setIncrease(increase + 1)
  }
  const ClickHandler = () => {
    if (increase > 0)
    setIncrease(increase - 1)
  }

  return (
    <div className={styles.cartt}>
      <div>
        <div className={styles.mycart}>
          <div className={styles.spancart}>
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
            {deleteitems.map((cart) => (
              <li key={cart.id}>
                <div className={styles.cartflex}>
                  <div>
                    <img src={cart.img} alt="ff" />
                  </div>
                  <div className={styles.name}>
                    <h5>{cart.Name}</h5>
                    <p>{cart.Type}</p>
                    <p>{cart.Size}</p>
                    <div className={styles.pp}>
                        <button onClick={ClickHandler}>-</button>
                        <p>{increase}</p>
                        <button onClick={onClickHandler}>+</button>
                    </div>
                  </div>
                  <div >
                    <div>{cart.Amount}</div>
                    <div className={styles.bi}>
                      <BiSolidTrash onClick={() => deleteHandler(cart.id)} />
                      
                    </div>
                  </div>
                </div>
              </li>
              
            ))}
            <div className={styles.checkout}>
                  <Button variant="checkout">Checkout</Button>
                </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
