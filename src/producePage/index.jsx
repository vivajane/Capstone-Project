import Header from "../component/header";
import '../App.css';
import Footer from "../component/footer";
import HomePageSection from "../homepage/homepageSection";

const Producepage = function(){
    return <div className="container">
    <Header/>
    <HomePageSection/>
    <div>Produce page</div>
    <Footer/>
    </div>
}

export default Producepage;