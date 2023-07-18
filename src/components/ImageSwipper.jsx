import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../assets/images/galary/image_1.png";
import Image2 from "../assets/images/galary/image_2.png";
import Image3 from "../assets/images/galary/image_3.png";
import Image4 from "../assets/images/galary/image_4.png";
import Image5 from "../assets/images/galary/image_5.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const ImageSwipper = () => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="m-auto my-12 mySwiper swiper-wrapper"
      >
        <SwiperSlide>
          <div className="flex items-center justify-center w-full">
            <img src={Image1} alt="image1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center w-full">
            <img src={Image2} alt="image2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center w-full">
            <img src={Image3} alt="image3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center w-full">
            <img src={Image4} alt="image4" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center w-full">
            <img src={Image5} alt="image5" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageSwipper;
