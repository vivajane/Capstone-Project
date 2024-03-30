import "../../App";
import logo from "../../images/logofour.png";
import styles from "../home.module.css"
const Sectionabout = function(){
    return <div className="container">
        <div className={styles.sectionabout}>
            <div>
                <img src={logo} alt="guy" />
            </div>
            <div className={styles.about}>
                <h1>About Us</h1>
                <p>
                    At AgroLink, we understand the importance of fresh, locally sourced produce and the <br /> value it brings to the farmers and consumers. Our platform serves as a digital <br /> marketplace , empowering farmers to showcase their products directly to consumers <br /> with any middleman.
                </p>
                <p>
                    By cutting out intermediates, we enable farmers receive fair compensation for <br /> their hardwork while offering consumers access to high quality,farm fresh goods at <br /> competitive prices.
                </p>
            </div>

        </div>
    </div>
}

export default Sectionabout;