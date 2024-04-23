import styles from "../../producePage/produceditPage/producedit.module.css";
import logoimage from "../../produceimage/yambig.png";
import Button from "../../homepage/button/button";
import { SlPicture } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
import { useState } from "react";
const AddProducts = function ({setAdd}) {
  const [added, setAdded] = useState({
    search: "",
    productname: "",
    category: "",
    extra: "",
    file: "",
    desc: "",
    price: "",

  })
  const onChangeHandler = (e)=> {
    const {name,value} = e.target;
    setAdded({
      ...added,
      [name] : value,
    })
    console.log(name, value)

  }

  const onSubmitHandler = (e)=>{
    e.preventDefault()
    const newProducts = {
      id: Math.round(Math.random()*100000),
      search: "added.search",
      productname: "added.productname",
      category: "added.category",
      extra: "added.extra",
      file: "added.file",
      desc: "added.desc",
      price: "added.price",

    }
    setAdd((prev) => [newProducts, ...prev])

    setAdded({
      id: Math.round(Math.random()*100000),
      search: "",
      productname: "",
      category: "",
      extra: "",
      file: "",
      desc: "",
      price: "",

    })

    console.log("added")

  }

  return (
    <form className={styles.formproduct}>
      <div>
        <div className={styles.searchflex}>
          <input
          onChange={onChangeHandler}
            type="search"
            name="search"
            id=""
            value={added.search}
            placeholder="search for order ID, product number, customer or something"
          />
          <SlMagnifier className={styles.magnifier} />
        </div>
        <div className={styles.formflex}>
          <div>
            <div>
              <label htmlFor="productname">Product Name</label>
              <input
              onChange={onChangeHandler}
                type="text"
                value={added.productname}
                name="productname"
                id="productname"
                placeholder="Tomatoes"
              />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <input
              onChange={onChangeHandler}
                type="text"
                name="category"
                id="category"
                value={added.category}
                placeholder="Vegetable"
              />
            </div>
            <div>
              <label htmlFor="">Size</label>
              <input type="text" name="extra" id="" placeholder="Extra large" onChange={onChangeHandler}  value={added.extra}/>
            </div>
            <div>
              <label htmlFor="">Description</label>
              <textarea name="desc" id="" cols="40" rows="15" onChange={onChangeHandler} value={added.desc} ></textarea  >
            </div>
            <div className={styles.bcome}>
          <Button variant="secondary">Become a Consumer</Button>
        </div>
          </div>

          <div>
            <h3 style={{ fontWeight: "800" }} onClick={onSubmitHandler} >Add Product</h3>
            <div className={styles.img}>
              <div>
                <img src={logoimage} alt="yam"  />
              </div>
              <div className={styles.picture}>
                <input type="file" src="" alt="" onChange={onChangeHandler} value={added.file} />
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
                <input type="text" name="price" id="price" placeholder="$200" onChange={onChangeHandler} value={added.price} />
              </div>
              <div>
                <label htmlFor="discount">Discount(optional)</label>
                <input
                  type="text"
                  name="discount"
                  id="discount"
                  placeholder="20%"
                  onChange={onChangeHandler} value={added.discount}
                />
              </div>
            </div>
            <div className={styles.quality}>
              <label htmlFor="quality">Quality available</label>
              <input type="text" name="quality" id="quality" onChange={onChangeHandler} value={added.quality} />
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
