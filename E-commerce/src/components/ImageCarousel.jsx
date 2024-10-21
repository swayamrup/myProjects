import React, { useEffect, useState } from "react";
import circle from "../assets/extras/circle.svg";
import filledcircle from "../assets/extras/filledcircle.svg";
import { rightArrowEmpty } from "../assets/nav_imgs/_nav_Img";

function ImageCarousel({
  images = [],
  classname = "",
  timmer = 3000,
  start = false,
  prodMode = false,
}) {
  const [curImg, setCurImg] = useState(0);
  const [autoChange, setautoChange] = useState(start);

  const previous = () => {
    setCurImg((prev) => (prev <= 0 ? images.length - 1 : --prev));
  };

  const next = () => {
    setCurImg((prev) => (prev < images.length - 1 ? ++prev : 0));
  };
  autoChange &&
    useEffect(() => {
      const timer = setInterval(() => {
        next();
      }, timmer);

      return () => {
        clearInterval(timer);
      };
    }, []);


  return (
    <>
      <div className={`carousel flex justify-center items-end ${classname}`}>
        <div className={`main flex justify-center min-w-full `}>
          <img
            src={rightArrowEmpty}
            alt={`ImageCarousel${curImg}`}
            className="leftbtn rotate-180 relative max-w-7 left-7  opacity-25 hover:opacity-70  cursor-pointer transition-opacity"
            onClick={previous}
          />
          <img
            src={images[curImg]}
            alt={`ImageCarousel${curImg}`}
            className={`min-w-full ${prodMode && "size-72"}`}
          />

          <img
            src={rightArrowEmpty}
            alt={"next"}
            className="rightbtn relative max-w-7 right-7 opacity-25 hover:opacity-70 cursor-pointer  transition-opacity "
            onClick={next}
          />
        </div>
        <div
          // className={`Controls absolute flex items-end justify-center size-[25px]`}
          className={`Controls absolute flex items-end justify-center ${
            prodMode && "w-6"
          }`}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={curImg == i ? filledcircle : circle}
              alt="index"
              className="p-[2px] cursor-pointer"
              onClick={() => setCurImg(i)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageCarousel;
