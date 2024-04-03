
import Button from "../homepage/button/button";
import styles from "./sign.module.css";
import "../App";
import "../App.css";
import Header from "../component/header";
import Footer from "../component/footer";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  })
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data)
    if(data.email!== "kosiobuekwe@gmail.com"){
      alert("Invalid email")
    } else if ( data.password !== "password"){
      alert("Invalid password")
    }
    else{
      alert("Login successful")
      navigate('/produce');
    }
  }

  return (
    <form data-aos="zoom-in-up" data-aos-delay="600"  onSubmit={handleSubmit(onSubmit)} className={styles.formaction}>
      <h3>Sign-in here</h3>
      <div className={styles.labelone}>
      <label htmlFor="email" place >Phone Number or Email Address</label>
      <input {...register("email", {
          required: "Please enter your first name.",
        })} id="message" name="email" placeholder="123-4567-890" />
      </div>
      <div className={styles.labelone}>
      <label htmlFor="password" className={styles.labeltwo}>Password</label>
      <input {...register("password", {
          required: "Please enter your first name.",
        })} type="password" name="password" id="password" placeholder="minimium of 8 characters" />
      </div>
      <Button type= "submit" variant="primary">Sign In</Button>
      <div className={styles.noaccount}>
        <p>Don't have an account? <a href="signUp">Sign Up <br />  </a> </p>
        <span>or</span>
        <p>Sign in with</p>
      </div>
      <Button  variant="primary" >Google</Button>
    </form>
  );
};
