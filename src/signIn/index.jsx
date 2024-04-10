
import Button from "../homepage/button/button";
import styles from "./sign.module.css";
import "../App";
import "../App.css";
import Header from "../component/header";
import Footer from "../component/footer";
import { useState } from "react";
import { signInAction } from "../apiRequest/login";
import { useNavigate } from 'react-router-dom';

const SignIn = function () {
  return (
    <div>
      <div className="container">
        <Header/>
        <div className={styles.formflex}>
          <div className={styles.wrap}>
            <h2 data-aos="zoom-in-up" data-aos-delay="400"  >Shop Fresh Food Directly from <br /> Farmers</h2>
            <p data-aos="zoom-in-up" data-aos-delay="500" >
              Get your food farm fresh from it's producers from anywhere in the
              country
            </p>
          </div>
          <Form></Form>
        </div>
        <Footer/>
      </div>
    </div>
  );
};
export default SignIn;


const Form = function () {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const onChangeHandler = (e) => {
    const{value,name} = e.target
    setFormData({
      ...formData,
      [name] : value,
    })

  }
  const navigate = useNavigate();
 
  const onSubmitHandler = async () => {
    if (formData.email === "") {
      alert("Invalid email");
    } else if (formData.password === "") {
      alert("Invalid password");
    } else {
      try {
        const res = await signInAction(formData);
        if (res.data.user_type === "farmer") {
          navigate("/produceditPage");
        } else {
          navigate("/produce");
        }
      } catch (error) {
        console.error("Error signing in:", error);                                                                                                                                                                           
        // Handle error, e.g., display an error message to the user
      }
    }
  };
  
  return (
    <form onSubmit={ (e) =>{
      e.preventDefault();
      onSubmitHandler()
       // console.log(data)
    }} data-aos="zoom-in-up" data-aos-delay="600" className={styles.formaction}>
      <h3>Sign-in here</h3>
      <div className={styles.labelone}>
      <label htmlFor="mail">Email Address</label>
      <input value={formData?.email} id="mail" name="email" placeholder="123-4567-890" onChange={onChangeHandler} required />
      </div>
      <div className={styles.labelone}>
      <label htmlFor="pass" className={styles.labeltwo}>Password</label>
      <input  value={formData?.password}  type="password" name="password" id="pass" placeholder="minimium of 8 characters" onChange={onChangeHandler} required/>
      </div>
      <Button type= "submit" variant="primary">Sign In</Button>
      <div className={styles.noaccount}>
        <p>Don't have an account? <a href="signUp">Sign Up <br />  </a> </p>
        <span>or</span>
        <p>Sign in with</p>
      </div>
      <Button variant="primary" >Google</Button>
    </form>
  );
} 
