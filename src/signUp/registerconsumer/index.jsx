import { useNavigate } from "react-router-dom";

import styles from "../../signIn/sign.module.css";
import Header from "../../component/header";
import Footer from "../../component/footer";
import Button from "../../homepage/button/button";
import { useState } from "react";
import { consumerResponse } from "../../apiRequest/consumer";

const Items = [
  { id: 1, items: "Grains" },
  { id: 2, items: "Vegetables" },
  { id: 3, items: "Fruits" },
  { id: 4, items: "Seeds" },
  { id: 5, items: "Flowers" },
  { id: 6, items: "Livestock" },
  { id: 7, items: "Poultry" },
  { id: 8, items: "Meat" },
  { id: 9, items: "Fish" },
];

const Consumer = () => {
  const [selectedItems, setSelectedItems] = useState("");
  const [inputValue, setInputValue] = useState({
    mailing_add: "",
    city: "",
    number: "",
  });

  const handleClick = (itemName) => {
    if (selectedItems.includes(itemName)) {
      setSelectedItems(selectedItems.filter((name) => name !== itemName));
    } else {
      setSelectedItems([...selectedItems, itemName]);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value} = e.target;
    
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const id = () =>{
    const local = localStorage.getItem("customers_id")
    return local
  }
  

 const customers_id = id()

  const onSubmitHandler = async () => {
    if (selectedItems.length >= 3) {
      const categoriesString = selectedItems.join(',');

      const payloadData = {
        categories: categoriesString,
        ...inputValue,
        customers_id : customers_id
      };
      console.log(payloadData)
      try {
        const response = await consumerResponse(payloadData);
        navigate("/");
        console.log(response, "this is the response");
       
      } catch (error) {
        console.log("this is the error", error);
      }
    } else {
      alert("Please select three or more options");
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.consumer}>
        <div className={styles.consumerheader}>
          <div className={styles.consumerchild}>
            <h2>Yes! We love our consumers</h2>
            <p>Please complete your registration</p>
          </div>
          <div>
            <h5>Please select three or more categories you are interested in</h5>
          </div>
          <div>
            <ul>
              {Items.map((item) => (
                <li
                  key={item.id}
                  className={selectedItems.includes(item.items)?styles.selected : null}
                  onClick={() => handleClick(item.items)}
                >
                  {item.items}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <form>
          <div>
            <label htmlFor="mail">Mailing address</label>
            <input
              type="text"
              name="mailing_add"
              id="mail"
              value={inputValue.mail}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              value={inputValue.city}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="num">Other Phone number</label>
            <input
              type="tel"
              name="number"
              id="num"
              value={inputValue.number}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
      
            />
            <label htmlFor="checkbox">
              I agree to receiving notifications from AgroLink
            </label>
          </div>
          <Button variant="padded" onClick={onSubmitHandler}>DONE</Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Consumer;

