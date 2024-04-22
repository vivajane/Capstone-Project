import styles from "../../producePage/produceditPage/producedit.module.css";
import logoimage from "../../produceimage/yambig.png";
import Button from "../../homepage/button/button";
import { SlPicture } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
const AddProducts = function () {
  return (
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
              <input type="text" name="" id="" placeholder="Extra large" />
            </div>
            <div>
              <label htmlFor="">Description</label>
              <textarea name="" id="" cols="40" rows="15"></textarea>
            </div>
            <div className={styles.bcome}>
          <Button variant="secondary">Become a Consumer</Button>
        </div>
          </div>

          <div>
            <h3 style={{ fontWeight: "800" }}>Add Product</h3>
            <div className={styles.img}>
              <div>
                <img src={logoimage} alt="yam" />
              </div>
              <div className={styles.picture}>
                <input type="file" src="" alt="" />
                <SlPicture className={styles.pic} />
              </div>
            </div>
            <div>
              <p>
                Add atleast two images, please upload qualities images. Pictures
                must fit the frame.
              </p>
            </div>
            <div className={styles.price}>
              <div>
                <label htmlFor="price">Price</label>
                <input type="text" name="price" id="price" placeholder="$200" />
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
              <div>
                <Button variant="secondary">Add Product</Button>
              </div>
              <div>
                <Button variant="secondary">Save Product</Button>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </form>
  );
};

export default AddProducts;
