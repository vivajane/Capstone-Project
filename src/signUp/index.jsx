import Button from "../homepage/button/button";
import styles from "../signIn/sign.module.css";
import Header from "../component/header";
import Footer from "../component/footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpAction } from "../apiRequest/signup";

import SignUpModal from "./modal";

const SignUp = function () {
 
  return (
    <div className={styles.signuup}>
      <div className="container">
        <Header />
        <div className={styles.formflextwo}>
          <div
            className={styles.wrap}
            data-aos="zoom-in-up"
            data-aos-delay="400"
          >
            <h2>
              Shop Fresh Food Directly from <br /> Farmers
            </h2>
            <p>
              Get your food farm fresh from it's producers from <br /> anywhere in the
              country
            </p>
          </div>
          <Form/>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default SignUp;

const Form = function () {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(
    {
      email: "",
      fullname: "",
      password: "",
    }
  );

  const onChangeHandler = (e) => {
    const{value,name} = e.target
    setData({
      ...data,
      [name] : value,
    })
  }

 
  const navigate = useNavigate();
  const onSubmitHandler = async () => {
   try{
    console.log("signing up")
    const user = localStorage.getItem("userType");
    const payLoad = {
      user_type : user,
      ...data,
    }
    
    const response = await signUpAction(payLoad);
    console.log(response, "halooooooo")
    const actualResponse = response?.data;
    console.log(actualResponse, "this is the actual ")

    if(actualResponse.user_id != null){
      console.log(actualResponse.user_id, "this ia all");
      const customerId = actualResponse.user_id;

      localStorage.setItem("customers_id", customerId);
      setShowModal(true)
      
      

    } else{
      console.log("hello response", response);
    }
    
   } catch{
    console.log("this is the error")
   }
    // navigate("/");
  };

  const closeModal = () => {
    const userType = localStorage.getItem("userType") ;
    setShowModal (false)
    if(userType === "farmer"){
      navigate("/registerfarmer")

    } else if (userType === "consumer"){
      navigate("/registerconsumer")
    }
  }
  return (
    <>
    <form
      onSubmit={ (e) =>{
        e.preventDefault();
        onSubmitHandler()
        
        // handleSubmit
      }}
      data-aos="zoom-in-up"
      data-aos-delay="600"
      className={styles.formactiontwo}
    >
      <h3>Create an account</h3>
      <div className={styles.labelone}>
        <label htmlFor="fname">Full Name</label>
        <input onChange={onChangeHandler}
        id="fname"
          type="text"
          name="fullname"
          value={data?.fullname}
        />
      </div>
      <div className={styles.labelone}>
        <label htmlFor="mail">Email Address</label>
        <input onChange={onChangeHandler}
    
          type="email"
          name="email"
          id="mail"
          value={data?.email}
          placeholder="minimium of 8 characters"
        />
      </div>
      <div className={styles.labelone}>
        <label htmlFor="word">Password Address</label>
        <input onChange={onChangeHandler}
    
          type="password"
          name="password"
          id="word"
          value={data?.password}
          placeholder="minimium of 8 characters"
        />
      </div>
      <div className={styles.labelone}>
        <input type="checkbox" name="checkbox" id="check" />
        <label htmlFor="check">
          I agree to the terms and conditions of AgroLink
        </label>
      </div>
      <Button variant="primary" type="submit">Sign Up</Button>
      <div className={styles.noaccount}>
        <p>
          Already have an account? <a href="signin">Sign In </a>
        </p>
        <span>or</span>
        <p >Sign up with</p>
      </div>
      <Button variant="primary" >Google</Button>
    </form>
    {showModal === true? < SignUpModal setShowModal={ closeModal}  /> : null } 

    </>
  );
};
