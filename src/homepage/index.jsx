import Header from "../component/header";
import '../App.css';
import Footer from "../component/footer";
import HomePageSection from "./homepageSection";
import Numerals from "./homenumerals";
import Sectionabout from "./sectionabout";
import Sectionchoose from "./sectionchoose";
import Discovery from "./discoverpage";
import Helpcentre from "./helpcentre";
import Testimonial from "./testimonial";
// import Faq from "./faq";

const Homepage = function(){
    return <div className="containerr">
    <Header/>
    <HomePageSection/>
    <Numerals/>
    <Sectionabout/>
    <Sectionchoose/>
    <Discovery/>
    {/* <Faq/> */}
    <Helpcentre/>
    <Testimonial/>
    <Footer/>
    </div>
}

export default Homepage;