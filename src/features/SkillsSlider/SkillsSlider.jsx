import React from "react";
import Slider from "react-slick";
import "./SkillsSlider.modules.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function SkillsSlider({ SkillsData }) {
  // var settings = {
  //   dots: true,
  //   arrows: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 3,
  //   autoplay: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 3,
  //         // infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     //   {
  //     //     breakpoint: 480,
  //     //     settings: {
  //     //       slidesToShow: 2,
  //     //       slidesToScroll: 1,
  //     //     },
  //     //   },
  //     {
  //       breakpoint: 300,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      {/* <Slider {...settings}>
        {SkillsData.map((skil, index) => (
          <div
            key={index}
            className="box flex items-center justify-center flex-col"
          >
            <img
              src={skil.skill_img}
              alt={skil.skill_dec}
              className=" hover:scale-[1.1] cursor-pointer"
              loading="lazy"
            />
            <h6 className="text-xl mt-2">{skil.skill_dec}</h6>
          </div>
        ))}
      </Slider> */}
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
      >
        {SkillsData.map((skil, index) => (
          <SwiperSlide
            key={index}
            className="box flex items-center justify-center flex-col"
          >
            <img
              src={skil.skill_img}
              alt={skil.skill_dec}
              className=" hover:scale-[1.1] cursor-pointer"
              loading="lazy"
            />
            <h6 className="text-xl mt-2">{skil.skill_dec}</h6>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
