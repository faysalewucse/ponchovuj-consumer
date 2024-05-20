"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

//swiper js styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export const Gallery = ({ galleryImages }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [transformOrigin, setTransformOrigin] = useState("center center");

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  return (
    <div className="">
      <Swiper
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 mb-4"
      >
        {galleryImages.map((images) => (
          <SwiperSlide
            key={images.image}
            style={{ height: "500px", objectFit: "cover" }}
            className="w-full overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            <img
              src={images.url}
              alt={`Image ${images.image}`}
              className="w-full h-full mx-auto transition-300 scale-100 hover:scale-150 cursor-zoom-in"
              style={{ transformOrigin }}
              onMouseMoveCapture={handleMouseMove}
              onMouseLeave={() => setTransformOrigin("center", "center")}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        loop={true}
        grabCursor={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        {galleryImages.map((images) => (
          <SwiperSlide
            key={images.image}
            style={{ width: "135px", height: "135px", objectFit: "cover" }}
          >
            <img src={images.url} alt={`Thumbnail ${images.image}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex mt-9">
        <div className="swiper-button-prev">
          <FaArrowLeft size={20} />
        </div>
        <div className="swiper-button-next">
          <FaArrowRight size={20} />
        </div>
      </div>
    </div>
  );
};
