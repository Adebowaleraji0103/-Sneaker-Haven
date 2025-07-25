import About from "./component/About";
import Banner from "./component/Banner";
import Cartigories from "./component/Cartegories";
import SlideCategories from "./component/SlideCategories";
import "swiper/css";
import NewArrival from "./component/NewArrival";
import FooterImage from "./component/FooterImage";

function App() {
  return (
    <div>
      <Banner />
      <About />
      <Cartigories />
      <SlideCategories />
      <NewArrival/>
      <FooterImage/>
    </div>
  );
}
export default App;
