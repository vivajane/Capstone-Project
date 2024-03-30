import styles from "../home.module.css";
import "../../App"
const Testimonial = function(){
    return <div>
        <div className={styles.testimonialcon}>
            <div className={styles.testimonial}>
                <h3>Testimonials</h3>
                <h1>
                    What Our Customers are Saying
                </h1>
            </div>
            <div className={styles.customer}>
                <div> </div>
                <div className={styles.nextcon}>
                  <a href="/hhh" className={styles.next}>&#8249;</a>
                    <p>
                        Being able to connect directly with local farmers through <br /> their platform has not only given me access to the <br /> freshest produce but has also deepended my <br /> understanding and appreciation for food where my food <br /> comes from. The convenience of having farm fresh <br /> produce delivered to my doorstep while supporting local <br /> agriculture is truly invaluable.
                    </p>
                    <a href="/dj" className={styles.previous}>&#8250;</a>

                </div>
                <div>
                    
                </div>
            </div>
            <div className={styles.customeravatar}>
                <div> </div>
                <div className={styles.avatarflex}>
                    <div>
                    <img src="https://images.pexels.com/photos/5585871/pexels-photo-5585871.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className={styles.avatar} />
                
                    </div>
                    <div>
                    <span>Kosi Vivian</span>
                    <p>WTF Fellow</p>
                    </div>
                
                </div>
                <div>
                    
                </div>
            </div>
            
        </div>
    </div>
}

export default Testimonial