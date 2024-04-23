import Button from "../homepage/button/button";
import Header from "../component/header";
import Footer from "../component/footer";
import styles from "./privacy.module.css";
import logo from "../produceimage/policy.png";
// import { NavLink, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App";
function Privacy() {
  return (
    <div>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}

export default Privacy;

export const PrivacyPolicy = function () {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/signup")
  }
  return (
    <div className="container">
      <div className={styles.containers}>
        <div className={styles.flex}>
          <div className={styles.main}>
            <div>
              <h1>Privacy Policy</h1>
            </div>
            <h4>
              We help you understand how we collect, use, share and protect your
              personal information
            </h4>
            <p>
              At Agrolink, we take your privacy seriously and ensure that all
              data collected on our website is processed in accordance with the
              Data Protection Regulation. This privacy policy outlines how we
              collect, use, and store your personal data when you use our
              website and services.
            </p>

            <h3>Data we collect</h3>
            <ul>
              <li>
                Personal Information: When you sign up for an account, we
                collect information such as your name, email address, phone
                number, and location.
              </li>
              <li>
                Payment Information: If you make purchases through Agrolink, we
                collect your payment information, such as credit card details or
                other financial information.
              </li>
              <li>
                Farm and Product Information: We collect information about
                farmers and their products listed on our platform, including
                descriptions, images, and pricing.
              </li>
              <li>
                Usage Information: We collect information about how you use our
                website, including your interactions with the platform, the
                content you view, and your preferences.
              </li>
              <li>
                Device Information: We collect information about the device you
                use to access Agrolink, such as your IP address, browser type,
                and operating system.
              </li>
            </ul>
            <h3>How we Collect Data</h3>
            <ul>
              <li>
                - Information you provide us when you create an account, place
                an order, or communicate with us.
              </li>
              <li>
                - Through the use of cookies and other website tracking
                technologies
              </li>
              <li>
                - From third-party sources such as Google Analytics, advertising
                networks, and other partners.
              </li>
            </ul>
          </div>

          <div className={styles.content}>
            <div>
              <img src={logo} alt="kk" />
            </div>
            <nav className={styles.nav}>
              <h3>Table of Content</h3>
              <div>
                <a href="data" target="_blank">
                  How We collect data
                </a>
              </div>
              <div>
                <a href="infoo" target="blank">
                  How We Use Your Information
                </a>
              </div>
              <div>
                <a href="info" target="blank">
                  Sharing of Your Information
                </a>
              </div>
              <div>
                <a href="/choices" target="blank">
                  Your Choices
                </a>
              </div>
              <div>
                <a href="/security" target="blank">
                  Security
                </a>
              </div>
              <div>
                <a href="/childrensprivacy" target="blank">
                  Children's Privacy
                </a>
              </div>
              <div>
                <a href="/contactus" target="blank">
                  Contact Us
                </a>
              </div>
              <div>
                <a href="/cookey" target="blank">
                  Cookey Policy
                </a>
              </div>
            </nav>
          </div>
        </div>
        <h3>How We Use Your Information</h3>
        <ul>
          <li>
            We use the information we collect to provide and improve our
            services, personalize your experience, and develop new features.
          </li>
          <li>
            We may use your contact information to communicate with you about
            your account, transactions, and updates to our services.
          </li>
          <li>
            With your consent, we may send you promotional messages, special
            offers, and other marketing communications.
          </li>
          <li>
            We use analytics tools to analyze how our website is used, track
            trends, and measure the effectiveness of our marketing campaigns.
          </li>
        </ul>
        <h3>Sharing your information</h3>
        <p>
          We may share your personal information with third parties under the
          following conditions: 
        </p>
        <ul>
          <li>
            To facilitate your order, we may provide your shipping information
            to our delivery partners.
          </li>
          <li>
            To comply with legal requirements or to protect our business and
            stakeholders.
          </li>
          <li>
            To advertisers and ad networks to serve you relevant advertisements.
          </li>
          <li></li>
        </ul>
        <h3>Your Choices</h3>
        <ul>
          <li>
            You can update or correct your account information anytime by
            logging into your account settings.
          </li>
          <li>
            You can opt out of receiving marketing communications from us by
            following the instructions provided in the messages or contacting us
            directly
          </li>
        </ul>

        <h3>Security</h3>
        <p>
          We take reasonable measures to protect the security of your
          information and prevent unauthorized access, disclosure, or
          alteration.
        </p>
        <h3>Children's Privacy</h3>
        <p>
          Agrolink is not intended for use by children under the age of 13. We
          do not knowingly collect personal information from children under 13
          years of age. If you are a parent or guardian and believe that your
          child has provided us with personal information, please contact us.
        </p>
        <h3>Changes to our Privacy</h3>
        <p>
          Changes to our Privacy Policy We reserve the right to make changes to
          our Privacy Policy at any time and without notice. Changes will be
          reflected on this webpage.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          privacy practices, please contact us at info@agrolink.com
        </p>
        <p>
          NB:  The cookie preference should be something that pops up once
          someone lands on the webpage and should have “accept and “decline”
          options. The link to the cookie policy should be embedded in the
          underlined cookie policy on the pop-up and, when clicked should lead
          to a cookie policy page. We use essential cookies to make our site
          work. With your consent, we may also use non-essential cookies to
          improve user experience and analyze website traffic. By clicking
          “Accept,” you agree to our website's cookie use as described in our
          Cookie Policy. You can change your cookie settings at any time by
          clicking “Preferences.”
        </p>
        <h3>Cookies Policy</h3>
        <p>
          What Are Cookies Cookies are small pieces of data stored on your
          device (computer or mobile device) when you visit a website. They are
          widely used to make websites work more efficiently and to provide
          information to the website owners.
        </p>
        <h3> How We Use Cookies</h3>
        <p>
          We use cookies and similar tracking technologies for the following
          purposes:
        </p>
        <h4>Essential Cookies</h4>
        <p>
          These cookies are necessary for the operation of our website. They
          enable core functionality such as page navigation and access to secure
          areas of the website. You cannot opt out of these cookies.
        </p>
        <h4>Analytics Cookies</h4>
        <p>
          These cookies allow us to analyze how visitors use our website, which
          helps us improve the user experience. We use Google Analytics, a web
          analytics service provided by Google, Inc. Google Analytics uses
          cookies to collect anonymous traffic data.
        </p>
        <h4>Marketing Cookies</h4>
        <p>
           These cookies are used to track visitors across websites. The
          intention is to display ads that are relevant and engaging for the
          individual user. We may use third-party services such as Google Ads to
          serve personalized ads based on your browsing history and interests.
        </p>
        <h4>Third-Party Cookies</h4>
        <p>
          Please note that third-party services used on our website, such as
          Google Analytics and Google Ads, may also use cookies and similar
          tracking technologies. We do not have control over these third-party
          cookies. Please refer to the privacy policies of these third-party
          services for more information.
        </p>
        <h4> Your Choices Regarding Cookies</h4>
        <p>
          You can choose to accept or decline cookies. Most web browsers
          automatically accept cookies, but you can usually modify your browser
          settings to decline cookies if you prefer. However, please note that
          disabling cookies may affect the functionality of our website.
        </p>
        <h4>Changes to Our Cookie Policy</h4>
        <p>
          We may update this Cookie Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. Any changes will be posted on this page with an updated
          effective date.
        </p>
        <p>
          date. If you have any questions or concerns about our use of cookies
          or this Cookie Policy, please contact us at [contact email or
          address].
        </p>
        <div>
          <Button variant="pri" type="submit" onClick={onClickHandler}>Continue</Button>
          <Button variant="pri"  type="submit" onClick={onClickHandler}>Go back</Button>
        </div>
      </div>
    </div>
  );
};
