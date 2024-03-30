import Button from "../homepage/button/button";
import styles from "../signIn/sign.module.css";
import { object, string, number } from "yup";
import { Formik } from "formik";
import Header from "../component/header";
import Footer from "../component/footer";

let userSchema = object({
  name: string().required(),
  tel: number().required(),
  password: string().required().min(4),
  email: string().email(),
});

const SignUp = function () {
  return (
    <div>
      <div className="container">
        <Header/>
        <div className={styles.formflextwo}>
          <div className={styles.wrap}>
            <h2>
              Shop Fresh Food Directly from <br /> Farmers
            </h2>
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
export default SignUp;
const Form = function () {
  const onSubmitHandler = function () {
    console.log("submitted");
  };
  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={userSchema}
      onSubmit={onSubmitHandler}
    >
      {({
        handleChange,
        handleSubmit,
        values,
      }) => {
        return (
          <form action="" className={styles.formactiontwo}>
            <h3>Create an account</h3>
            <div className={styles.labelone}>
              <label htmlFor="fullname">Full Name</label>
              <input type="text" name="fullname" id="" value={values.fullname} onChange={handleChange} />
            </div>
            <div className={styles.labelone}>
              <label htmlFor="tel">Phone Number</label>
              <input type="tel" name="tel" id="" />
            </div>
            <div className={styles.labelone}>
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="" />
            </div>
            <div className={styles.labelone}>
              <label htmlFor="password" className={styles.labeltwo}>
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="minimium of 8 characters"
              />
            </div>
            <div className={styles.labelone}>
              <input type="checkbox" name="" id="" />
              <label htmlFor="checkbox">
                I agree to the terms and conditions of AgroLink
              </label>
            </div>
            <Button variant="primary">Sign Up</Button>
            <div className={styles.noaccount}>
              <p>
                Already have an account? <a href="signin">Sign In </a>
              </p>
              <span>or</span>
              <p>Sign up with</p>
            </div>
            <Button variant="primary">Google</Button>
          </form>
        );
      }}
    </Formik>
  );
};

const defaultValues = {
  fullname: "",
  tel: "",
  email: "",
  password: "",
};
