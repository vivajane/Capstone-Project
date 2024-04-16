import styles from "./producedit.module.css";
import logoimage from "../../produceimage/yam.png";
// import { SlLogout } from "react-icons/sl";
import { SlPicture } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
// import { BiChevronDown } from "react-icons/bi";
import Header from "../../component/header";
import Footer from "../../component/footer";
import ProduceComponent from "../producecomponent";
import "../../App";
import Button from "../../homepage/button/button";


const ProduceEdit = () => {
  return (
    <div>
      <Header />
      <Section />
      <Footer />
    </div>
  );
};

export default ProduceEdit;

const Section = () => {
  return (
    <div className="containe">
      <section className={styles.productsection}>
        <ProduceComponent />
        <div className={styles.editproduct}>
          <div>
            <h2 style={{fontWeight: "800"}}>Edit Product</h2>
            <p>
              The most important feature of this section is adding the products.
              When adding the products,fill in the <br /> required fields and follow
              the rules for uploading your products
            </p>
          </div>
          <div className={styles.overview}>
            <a href="/">Overview</a>
            <a href="/addproducts">Add Product</a>
          </div>
          <hr />
          <form className={styles.formproduct}>
            <div>
              <div className={styles.searchflex}>
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="search for order ID, product number, customer or something"
                />
                <SlMagnifier className={styles.magnifier} />
              </div>
              <div className={styles.formflex}>
                <div>
                  <div>
                    <label htmlFor="productname">Product Name</label>
                    <input
                      type="text"
                      name="productname"
                      id="productname"
                      placeholder="Tomatoes"
                    />
                  </div>
                  <div>
                    <label htmlFor="category">Category</label>
                    <input
                      type="text"
                      name="category"
                      id="category"
                      placeholder="Vegetable"
                    />
                  </div>
                  <div>
                    <label htmlFor="">Size</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Extra large"
                    />
                  </div>
                  <div>
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" cols="40" rows="15"></textarea>
                  </div>
                </div>
               
                <div>
                  <h3 style={{fontWeight: "800"}}>Add Product</h3>
                  <div className={styles.img}>
                    <div>
                      <img src={logoimage} alt="yam" />
                    </div>
                    <div className={styles.picture}>
                      img
                      <SlPicture className={styles.pic} />
                    </div>
                  </div>
                  <div>
                    <p>
                      Add atleast two images, please upload qualities images.
                      Pictures must fit the frame.
                    </p>
                  </div>
                  <div className={styles.price}>
                    <div>
                      <label htmlFor="price">Price</label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        placeholder="$200"
                      />
                    </div>
                    <div>
                      <label htmlFor="discount">Discount(optional)</label>
                      <input
                        type="text"
                        name="discount"
                        id="discount"
                        placeholder="20%"
                      />
                    </div>
                  </div>
                  <div className={styles.quality}>
                    <label htmlFor="quality">Quality available</label>
                    <input type="text" name="quality" id="quality" />
                  </div>
                  <div className={styles.btnflex}>
                  <div >
                  <Button variant="secondary" >Add Product</Button>
                  </div>
                  <div>
                  <Button variant="secondary" >Save Product</Button>
                  </div>
                  </div>
                  
                </div>
              </div>
               <div>
                  <Button variant="secondary" >Become a Consumer</Button>
                  </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
