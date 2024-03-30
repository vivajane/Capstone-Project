import styles from "../home.module.css";

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
    <div>
      <div className={styles.help}>
        <div className={styles.welcome}>
          <h3>Welcome to AgroLink 👍 </h3>
          <h1>Help Centre</h1>
        </div>
        <div className={styles.glad}>
          <p>
            We are glad having you here lokking for answer. As our team hardly
            working on the products, <br /> feel free to ask any question as we
            believe that honest feedbacks <br /> move us forward.
          </p>
        </div>
        <div className={styles.selectoption}>
          <select name="" id="" className={styles.select} >
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
