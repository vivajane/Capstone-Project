import styles from "../home.module.css";
import "../../App"

const Products = [
  {
    id: 1,
    item: "Vegetables",
  },
  {
    id: 2,
    item: "Grains",
  },
  {
    id: 3,
    item: "Fruits",
  },
  {
    id: 4,
    item: "Seeds",
  },
  {
    id: 5,
    item: "Flower",
  },
  {
    id: 6,
    item: "Livestock",
  },
  {
    id: 7,
    item: "Poultry",
  },
];
const Helpcentre = function () {
  return (
    <div className="container">
      <div className={styles.help}>
        <div className={styles.welcome}>
          <h3 data-aos="zoom-in-up" data-aos-delay="600">Welcome to AgroLink 👍 </h3>
          <h1 data-aos="zoom-in-down" data-aos-delay="600">Help Centre</h1>
        </div>
        <div className={styles.glad}>
          <p>
            We are glad having you here looking for answer. As our team hardly
            working on the products, <br /> feel free to ask any question as we
            believe that honest feedbacks <br /> move us forward.
          </p>
        </div>
        <div className={styles.selectoption}>
          <select name="" id="" className={`${styles.select} form-select form-select-lg mb-3" aria-label=".form-select-lg example`}  >
            <option value="" className={styles.option} >All products</option>

            {Products.map((product) => (
              <option key={product.id} value={product.item}>
                {product.item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Helpcentre;
