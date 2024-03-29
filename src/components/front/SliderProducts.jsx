import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import './Slider.css'


export const SliderProducts = ({ allProducts }) => {
  //const sliderRef = useRef(null);

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container max-w-full overflow-hidden mx-auto ">
      <Slider {...settings}  //ref={sliderRef }
      >
        {allProducts?.map((productos, index) => (
          <div key={index} className="p-4">
        
            <div className=" overflow-hidden">
            <Link to={`/detalle/${productos.id}`}>

              <img
                src={productos.imagenes}
                alt={"imagen de "+productos.nombre}
                className="w-full h-[20rem] object-cover rounded-lg"
              />
           
              <div className="px-4">
                <h2 className="font-bold text-sm mb-2 text-center">{productos.nombre}</h2>
                <p className="text-gray-700 text-sm  text-center">${productos.valor}</p>
              </div>
            </Link>
            </div>
          </div>
            
        ))}
      </Slider>
      {// botones de adelantar o regresar
      //<div className="flex justify-center mt-4">
       // <button
       //   className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
       //  onClick={() => sliderRef.current.slickPrev()}
       // >
       //</div>   Anterior
       // </button>
       // <button
       //   className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
       //   onClick={() => sliderRef.current.slickNext()}
       // >
       //   Siguiente
       // </button>
      //</div>
    }
    </div>
  );
};
