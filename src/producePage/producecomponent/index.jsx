import { BiChevronDown } from "react-icons/bi";
import { SlLogout } from "react-icons/sl";
import "../../App";


// import Dropdown from "react-bootstrap/Dropdown";
import styles from "../produceditPage/producedit.module.css";

const ProduceComponent = function () {
  return (
    <div className="contain">
    
      <div className={styles.comp}>
        <div className={styles.details}>
          <button>My Details</button>
          <BiChevronDown />
        </div>
        <div className={styles.details}>
          <button>
            My Shop
            <ul>
              <li>
                <a href="myorders">My Orders</a>
              </li>
              <li>
                <a href="/productupload">Product Upload</a>
              </li>
            </ul>
          </button>
          <BiChevronDown />
          
        </div>
        <div className={styles.details}>
          <div>
            <button>My Transactions</button>
          </div>
          <BiChevronDown />
        </div>
        <div className={styles.details}>
          <div>
            <button>Notifications</button>
          </div>
          <BiChevronDown />
        </div>
        <div className={styles.details}>
          <button>Help</button>
          <BiChevronDown />
        </div>
        <div className={styles.detailss}>
          <div className={styles.logout}>
            <a href="/account">Log Out</a>
          </div>
          <SlLogout />
        </div>
      </div>
    
    </div>
  );
};

export default ProduceComponent;
