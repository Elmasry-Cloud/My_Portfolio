import React from "react";
import "./ProjectsBox.modules.css";
import Slider from "react-slick";

export default function ProjectsBox({ filterdataProject }) {
  //   console.log(filterdataProject);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="box-container grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">
        {filterdataProject?.map((project) => (
          <div
            key={project.id}
            className="box tran bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-4xl overflow-hidden hover:-translate-y-2.5"
          >
            <div className="image">
              <img
                src={project.img}
                alt=""
                className="w-full brightness-50 opacity-50 h-50 object-cover"
              />
            </div>
            <div className="info py-8 px-4">
              <h1 className="text-2xl font-bold">{project.name}</h1>
              <p className="my-2">{project.description}</p>
              <div className="skills-use flex items-center gap-2 flex-wrap">
                {project.skills.map((skil, index) => (
                  <span key={index} className="py-1 px-2 bg-span rounded-3xl">
                    {skil}
                  </span>
                ))}
                {/* <span className="py-1 px-2 bg-span rounded-3xl">react</span> */}
              </div>
              <div className="foot flex items-center gap-5 mt-5 text-center">
                <a
                  href={project.link_demo}
                  target="_blank"
                  className="demo border border-white/50 relative overflow-hidden block w-full px-3 py-2 rounded-xl"
                >
                  View Demo
                </a>
                <a
                  href=""
                  target="_blank"
                  className="code border border-white/50 relative overflow-hidden block w-full px-3 py-2 rounded-xl"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider */}

      {/* <div className="box-container gap-5 mt-12">
        <Slider {...settings}>
          {filterdataProject?.map((project) => (
            <div>
              <div
                key={project.id}
                className="box mx-2 tran bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-4xl overflow-hidden hover:-translate-y-2.5"
              >
                <div className="image">
                  <img
                    src={project.img}
                    alt=""
                    className="w-full brightness-50 opacity-50 h-50 object-cover"
                  />
                </div>
                <div className="info py-8 px-4">
                  <h1 className="text-2xl font-bold">{project.name}</h1>
                  <p className="my-2">{project.description}</p>
                  <div className="skills-use flex items-center gap-2 flex-wrap">
                    {project.skills.map((skil, index) => (
                      <span
                        key={index}
                        className="py-1 px-2 bg-span rounded-3xl"
                      >
                        {skil}
                      </span>
                    ))}
                  </div>
                  <div className="foot flex items-center gap-5 mt-5 text-center">
                    <a
                      href={project.link_demo}
                      target="_blank"
                      className="demo border border-white/50 relative overflow-hidden block w-full px-3 py-2 rounded-xl"
                    >
                      View Demo
                    </a>
                    <a
                      href=""
                      target="_blank"
                      className="code border border-white/50 relative overflow-hidden block w-full px-3 py-2 rounded-xl"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
    </>
  );
}
