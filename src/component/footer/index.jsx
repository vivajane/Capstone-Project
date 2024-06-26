// import styles from "../home.module.css";
import styles from "../../homepage/home.module.css";
import logotwo from "../../images/AgroLink.png";
import "../../App";

const Company = [
  {
    id: 1,
    link: "aaaa",
    text: "About Us",
  },
  {
    id: 2,
    link: "bbb",
    text: "Terms and Conditions",
  },
  {
    id: 3,
    link: "cccc",
    text: "Privacy Policy",
  },
];
const CompanyHelp = [
  {
    id: 1,
    link: "dddd",
    text: "Help/FAQ",
  },
  {
    id: 2,
    link: "eee",
    text: "FeedBack",
  },
  {
    id: 3,
    link: "eee",
    text: "Responses",
  },
];
const SocialMedia = [
  {
    id: 1,
    link: "gggg",
    text: "Instagram",
  },
  {
    id: 2,
    link: "hhhh",
    text: "Twitter",
  },
  {
    id: 3,
    link: "iiii",
    text: "Facebook",
  },
];
const Footer = function () {
  return (
    <div className="containerr">
      <div className={styles.footer}>
        <nav className={styles.navbar}>
          <div className={styles.flexitemm}>
            <div className={styles.flexitemmm}>
              <div
                data-aos="zoom-in-down"
                data-aos-delay="600"
                className={styles.agrolink}
              >
                <img src={logotwo} alt="agrolink" />
              </div>

              <div
                data-aos="zoom-in-up"
                data-aos-delay="600"
                className={styles.divconnect}
              >
                <p className={styles.connect}>
                  Agro Links connects farmers directly to consumers <br /> to
                  make the freshest agricultural products available <br /> and
                  without barriers.
                </p>
              </div>
            </div>
            <div className={styles.flexnav}>
              <div data-aos="flip-left" data-aos-delay="600">
                <h2>Company</h2>
                <ul className={styles.unordered}>
                  {Company.map((company) => (
                    <div key={company.id}>
                      <li>
                        <a href={company.link}>{company.text}</a>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
              <div data-aos="zoom-in-up" data-aos-delay="600">
                <h2>Company</h2>
                <ul>
                  {CompanyHelp.map((companyhelp) => (
                    <li key={companyhelp.id}>
                      <a href={companyhelp.link}>{companyhelp.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div data-aos="flip-right" data-aos-delay="600">
                <h2>Social Media</h2>
                <ul>
                  {SocialMedia.map((socialmedia) => (
                    <li key={socialmedia.id}>
                      <a href={socialmedia.link}>{socialmedia.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
