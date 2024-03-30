import Footer from "../component/footer";
import Header from "../component/header";
import styles from "../communityPage/pages.module.css";
import logoseven from "../images/logo-seven.png";
const RewardsPage= function () {
  return (
    <div>
      <Header />
      <Rewards />
      <Footer />
    </div>

  );
};

export default RewardsPage;
const Rewards = function () {
  return (
    <div className={styles.communitygen}>
      <div className={styles.community}>
        <div className={styles.valuecontainer}>
          <div className={styles.valuecom}>
            <h1>Get your reward today</h1>
            <h3>Earn valuable rewards as you buy or sell <br /> farm produce.</h3>
            <p> Take advantage of our various reward system, <br /> whether it's in the daily reward or limitless offers, <br /> we reward every effort you make.</p>
            
          </div>
          <div className={styles.btn}>
            <a href="/signin">Sign in as a farmer</a>
            <a href="signin">Sign in as a consumer</a>
          </div>
        </div>
        <div className={styles.logofive}>
          <div>
            <img src={logoseven} alt="logoseven"/>
          </div>
        </div>
      </div>
    </div>
  );
};
