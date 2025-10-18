import React, { useEffect, useRef } from "react";
import img1 from "/img1.png";
import img2 from "/img2.png";
import img3 from "/img3.png";

const HeaderComponent = () => {
  const scrollRef = useRef(null);

  const slideRight = () => {
    sliderRef.current.scrollLeft += 1300;
  };

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 1300;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 1300;

        // Optional: Reset scroll when end is reached
        if (
          sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);
  return (
    <>
      <div className="h-full w-full flex justify-center items-center no-scrollbar">
        <div className="h-[95vh] bg-gray-200 items-center-safe flex flex-row w-[90vw] gap-20 overflow-x-auto no-scrollbar">
          <img src={img2} alt="" className="h-[85vh] w-[75vw]" />
          <img src={img3} alt="" className="h-[85vh] w-[75vw]" />
          <img src={img3} alt="" className="h-[85vh] w-[75vw]" />
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
