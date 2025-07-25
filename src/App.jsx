import About from "./component/About";
import Banner from "./component/Banner";
import Cartigories from "./component/Cartegories";
import SlideCategories from "./component/SlideCategories";
import "swiper/css";
import NewArrival from "./component/NewArrival";
import FooterImage from "./component/FooterImage";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Banner />
      <About />
      <Cartigories />
      <SlideCategories />
      <NewArrival/>
      <FooterImage/>
      <Footer/>
    </div>
  );
}
export default App;
