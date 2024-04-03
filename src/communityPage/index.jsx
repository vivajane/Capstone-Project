import Footer from "../component/footer";
import Header from "../component/header";
import styles from "../communityPage/pages.module.css";
import logofive from "../images/logo-five.png";
import logosix from "../images/logo-six.png";
const CommunityPage = function () {
  return (
    <div>
      <Header />
      <Community />
      <Footer />
    </div>
  );
};

export default CommunityPage;

const Community = function () {
  return (
    <div className={styles.communitygen}>
      <div className={styles.community}>
        <div className={styles.valuecontainer}>
          <div data-aos="zoom-in-up" data-aos-delay="400" className={styles.valuecom}>
            <h1>We value Community</h1>
            <p>Connect with a vibrant forum that meets your needs .</p>
            <p>Keep in touch with upcoming events</p>
          </div>
          <div className={styles.btn} data-aos="zoom-in-up" data-aos-delay="600" >
            <a href="/signin">Sign in as a farmer</a>
            <a href="signin">Sign in as a consumer</a>
          </div>
        </div>
        <div className={styles.logofive}>
          <div data-aos="flip-left" data-aos-delay="600">
            <img src={logofive} alt="logofive" />
            <h5>
              +15k members <br />
              in our community{" "}
            </h5>
          </div>
          <div data-aos="flip-right" data-aos-delay="600">
            <img src={logosix} alt="logosix" />
            <h5>
              Be a part of the upcoming <br /> tradefair for farmers and buyers.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
