import styles from "../../signIn/sign.module.css";
import Header from "../../component/header";
import Footer from "../../component/footer";
import Button from "../../homepage/button/button";
// import { farmerResponse } from "../../apiRequest/consumer";
const Farmer = function () {
  return (
    <div>
      <Header />
      <div className={styles.consumer}>
      <div className={styles.consumerheader}>
      <div className={styles.consumerchild}>
          <h2>Yes! We love farmers</h2>
          Please, complete your registeration
        </div>
      </div>
        <div>
          <form action="">
            <p>Are you a farmer or a processor?</p>
            <div className={styles.farmerradio}>
              <input type="radio" id="farmer" name="farmer" /> 
              <label for="html">Farmer</label>
              <input type="radio" id="processor" name="processor" />
              <label for="html">Processor</label>
            </div>
            <div>
              <label htmlFor="food">What food item do you produce?</label>
              <input
                type="text"
                name="fooditem"
                id="food"
                placeholder="Write atleast five, seperated by comma"
              />
            </div>
            <div>
              <label htmlFor="farm">Farm/Business address</label>
              <input
                type="text"
                name="farm"
                id="farm"
                placeholder="Plot 344 Ajayi, Lagos"
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Lagos Mainland"
              />
            </div>
            <div>
              <label htmlFor="State">State</label>
              <input type="text" name="state" id="state" placeholder="Lagos" />
            </div>
            <div>
              <label htmlFor="other">Other business contact number</label>
              <input
                type="tel"
                name="other"
                id="other"
                placeholder="+2348126079990"
              />
            </div>
            <div>
              <p>
                Would you like to connect with farmers at AgroLink and related
                events?
              </p>
              <input type="radio" id="farmer" name="farmer" /> 
              <label for="html">Yes</label>
              <input type="radio" id="processor" name="processor" />
              <label for="html">No</label>
            </div>
            <Button variant="padded">DONE</Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Farmer;
