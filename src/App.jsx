import About from "./component/About";
import Banner from "./component/Banner";
import Cartigories from "./component/Cartegories";
import SlideCategories from "./component/SlideCategories";
import "swiper/css";

function App() {
  return (
    <div>
      <Banner />
      <About />
      <Cartigories />
      <SlideCategories />
    </div>
  );
}
export default App;
