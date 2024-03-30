
import Button from "../homepage/button/button";
import styles from "./sign.module.css";
import "../App";
import "../App.css";
import Header from "../component/header";
import Footer from "../component/footer";
const SignIn = function () {
  return (
    <div>
      <div className="container">
        <Header/>
        <div className={styles.formflex}>
          <div className={styles.wrap}>
            <h2>Shop Fresh Food Directly from <br /> Farmers</h2>
            <p>
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
  return (
    <form action="" className={styles.formaction}>
      <h3>Sign-in here</h3>
      <div className={styles.labelone}>
      <label htmlFor="password" place >Phone Number or Email Address</label>
      <input  id="message" name="password" placeholder="123-4567-890" />
      </div>
      <div className={styles.labelone}>
      <label htmlFor="password" className={styles.labeltwo}>Password</label>
      <input type="password" name="password" id="password" placeholder="minimium of 8 characters" />
      </div>
      <Button variant="primary">Sign In</Button>
      <div className={styles.noaccount}>
        <p>Don't have an account? <a href="signUp">Sign Up <br />  </a> </p>
        <span>or</span>
        <p>Sign in with</p>
      </div>
      <Button variant="primary" >Google</Button>
    </form>
  );
};
