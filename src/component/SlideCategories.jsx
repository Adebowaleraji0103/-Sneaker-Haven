import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

function SlideCategories() {
  return (
    <div className="bg-red-50">
      <Swiper>
        {/* modules={{Autoplay}}
        spaceBetween={2}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
 */}

        <SwiperSlide><img src="images/slider (1).png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/slider (8).png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/slider (7).png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/slider (6).png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/slider (5).png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/slider (4).png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/slider (3).png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="images/slider (2).png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
export default SlideCategories;
