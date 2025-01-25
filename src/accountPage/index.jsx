import Footer from "../component/footer";
import Header from "../component/header";
import styles from "../communityPage/pages.module.css";
import Button from "../homepage/button/button";

const AccountPage = function () {
  return (
    <div>
      <Header />
      <Account />

      <Footer />
    </div>
  );
};

export default AccountPage;

const Account = function () {
  return (
    <div className={styles.accountcon}>
      <h3>Do you want to log out of AfroLink?</h3>

      <div className={styles.accc}>
        <div className={styles.sec}>
          <Button variant="secondary">YES</Button>
        </div>
        <div className={styles.tert}>
          <Button variant="tertiary">NO</Button>
        </div>
      </div>
    </div>
  );
};
