import styles from "../signIn/sign.module.css";
import React from "react";

function Loading() {
  return (
    <div className={styles.loader}>
      
        <div className={styles.loading}>Loading...</div>
      
    </div>
  );
}

export default Loading;
