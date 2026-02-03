import React from "react";
import Slider from "react-slick";
import "./SkillsSlider.modules.css";

export default function SkillsSlider({ SkillsData }) {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 1,
      //     },
      //   },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
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
      </Slider>
    </>
  );
}
