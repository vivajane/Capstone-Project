import styles from "./producedit.module.css";
// import ProduceSection from "../producesection";
// import AddProducts from "../addproducts/addproducts";
import Header from "../../component/header";
import Footer from "../../component/footer";
import ProduceComponent from "../producecomponent";
import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../App";

const ProduceEdit = () => {
  return (
    <div>
      <Header />
      <Section />
      <Footer />
    </div>
  );
};

export default ProduceEdit;

const Section = () => {
  return (
    <div className="containe">
      <section className={styles.productsection}>
        <ProduceComponent />
        <div className={styles.editproduct}>
          <div className={styles.edittitle}>
            <h2 style={{ fontWeight: "800" }}>Edit Product</h2>
            <p>
              The most important feature of this section is adding the products.
              When adding the products,fill in the <br /> required fields and
              follow the rules for uploading your products
            </p>
          </div>
          <div className={styles.overview}>
            <NavLink to="producesection">Overview</NavLink>
            <NavLink to="addproducts">Add Products</NavLink>
          </div>
          <hr />

          <Outlet />
        </div>
      </section>
    </div>
  );
};
