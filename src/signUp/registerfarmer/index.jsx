import styles from "../../signIn/sign.module.css";
import Header from "../../component/header";
import Footer from "../../component/footer";
import Button from "../../homepage/button/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { farmerResponse } from "../../apiRequest/farmer";

const Farmer =  () => {
  
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptiontwo, setSelectedOptiontwo] = useState('');
  const [formAction, setFormAction] = useState({
    // farmer: "",
    // processor: "",
    productType: "",
    businessAdd: "",
    city: "",
    state: "",
    phone: "",
    // connect: "",
  });
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionChangetwo = (event) => {
    setSelectedOptiontwo(event.target.value);
  };
  const onChangeHandler = function (e) {
    const { name, value } = e.target;
    setFormAction({
      ...formAction,
      [name]: value,
    });
  };
  const id = () =>{
    const local = localStorage.getItem("customers_id")
    return local
  }

 const customers_id = id()
 const navigate = useNavigate()

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    console.log("I am here")
    const Radio = {
      ...formAction, 
      categories: selectedOption,
      connectReq : selectedOptiontwo,
      customers_id : customers_id
  
    }

    try {
      const response = await farmerResponse(Radio);

      console.log(response, "submitted");
      alert('Form submitted successfully!');
      navigate("/")
      
    } catch (error) {
      console.error('API Error:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    }
  };


  return (
    <div className="ggg">
      <Header />
      <div className={styles.consumer}>
        <div className={styles.consumerheader}>
          <div className={styles.consumerchild}>
            <h2>Yes! We love farmers</h2>
            Please, complete your registeration
          </div>
        </div>
        <div className={styles.farmer}>
          <form onSubmit={onSubmitHandler}>
            <p>Are you a farmer or a processor?</p>
            <div className={styles.farmerradio}>
              <input
                type="radio"
                id="farmer"
          
                value="farmer"
                checked={selectedOption === "farmer"}
                onChange={handleOptionChange}
              />
              <label htmlFor="farmer">Farmer</label>
              <input
                type="radio"
                id="processor"
          
                value="food processor"
                checked={selectedOption === "food processor"}
                onChange={handleOptionChange}
              />
              <label htmlFor="processor">Processor</label>
            </div>
            <div>
              <label htmlFor="food">What food item do you produce?</label>
              <input
                type="text"
                name="productType"
                id="food"
                placeholder="Write atleast three, seperated by comma"
                value={formAction.fooditem}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label htmlFor="farm">Farm/Business address</label>
              <input
                type="text"
                name="businessAdd"
                id="farm"
                placeholder="Plot 344 Ajayi, Lagos"
                value={formAction.farm}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Lagos Mainland"
                value={formAction.city}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label htmlFor="State">State</label>
              <input
                type="text"
                name="state"
                id="state"
                placeholder="Lagos"
                value={formAction.state}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label htmlFor="other">Other business contact number</label>
              <input
                type="tel"
                name="phone"
                id="other"
                placeholder="+2348126079990"
                value={formAction.other}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <p>
                Would you like to connect with farmers at AgroLink and related
                events?
              </p>
              <input
                type="radio"
                id="yes"
                name="connect"
                value="yes"
                checked={selectedOptiontwo === "yes"}
                onChange={handleOptionChangetwo}
              />
               <label htmlFor="yes">Yes</label>
              <input
                type="radio"
                id="no"
                name="connect"
                value="no"
                checked={selectedOptiontwo === "no"}
                onChange={handleOptionChangetwo}
              />
              <label htmlFor="no">No</label>
            </div>
            <Button type="submit" variant="padded">DONE</Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Farmer;
