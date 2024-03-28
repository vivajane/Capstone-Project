import Header from "../component/header";
import '../App.css';
import Footer from "../component/footer";
import HomePageSection from "./homepageSection";

const Homepage = function(){
    return <div className="container">
    <Header/>
    <HomePageSection/>
    <Footer/>
    </div>
}

export default Homepage;