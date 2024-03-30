import "../../App";
import logochoose from "../../images/logothree.png";
import styles from "../home.module.css"
const Sectionchoose = function(){
    return <div className="container">
        <div className={styles.sectionabout}>
            <div className={styles.about}>
                <h1>Why Choose Us</h1>
                <p>
                    Our mission is simple; revolutionalize the way food is sourced and distributed, <br />  fostering transparency, sustainability and community empowerment along the way. <br /> Whether you are a farmerlooking to reach a wider audience or a consumer seeking <br /> wholesome produce straight from the source, AgroLink provides the platform to make it realistic.
           
                </p>
                <p>
                    Join us in supporting local farmers, promoting sustainability, and enjoying the <br /> freshest produce imaginable. Together, let's build a healthier, more connected food <br /> system , one at at a time.
                </p>
            </div>
            <div>
                <img src={logochoose} alt="guy" />
            </div>

        </div>
    </div>
}

export default Sectionchoose;