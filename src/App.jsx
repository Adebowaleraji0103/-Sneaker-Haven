import About from "./component/About";
import Banner from "./component/Banner";
import Cartigories from "./component/Cartegories";
import SlideCategories from "./component/SlideCategories";
import NewArrival from "./component/NewArrival";
import "swiper/css";

function App() {
  return (
    <div>
      <Banner />
      <About />
      <Cartigories />
      <SlideCategories />
      <NewArrival/>
    </div>
  );
}
export default App;
