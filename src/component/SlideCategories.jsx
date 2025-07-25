import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

function SlideCategories() {
  return (
    <div>
      <Swiper>
        modules={{Autoplay}}
        spaceBetween={2}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}


        <SwiperSlide><img src="image/slider (1).png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image/slider (8).png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image/slider (7).png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image/slider (6).png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image/slider (5).png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image/slider (4).png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image/slider (3).png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image/slider (2).png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
export default SlideCategories;
