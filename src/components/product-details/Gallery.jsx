"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaExpand } from "react-icons/fa6";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

//swiper js styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Lightbox styles
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
// import "yet-another-react-lightbox/plugins/thumbnails.css";

export const Gallery = ({ galleryImages }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [transformOrigin, setTransformOrigin] = useState("center center");
  const [openLightbox, setOpenLightBox] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  return (
    <div className="relative">
      <Lightbox
        open={openLightbox}
        close={() => setOpenLightBox(false)}
        index={activeIndex}
        slides={galleryImages}
        plugins={[Counter, Slideshow, Zoom]}
        controller={{
          closeOnBackdropClick: true,
          closeOnPullDown: true,
          closeOnPullUp: true,
        }}
        // thumbnails={{
        //   position: "end",
        //   border: 0,
        //   showToggle: true,
        //   imageFit: "cover",
        // }}
      />
      <Swiper
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
              src={images.src}
              alt={`Image ${images.image}`}
              className="w-full h-full mx-auto transition-300 scale-100 hover:scale-150 cursor-zoom-in"
              style={{ transformOrigin }}
              onMouseMoveCapture={handleMouseMove}
              onMouseLeave={() => setTransformOrigin("center", "center")}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => setOpenLightBox(true)}
        className="absolute top-2 left-2 z-50"
      >
        <FaExpand size={30} className="hover:text-primary transition-300" />
      </button>
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
            <img src={images.src} alt={`Thumbnail ${images.image}`} />
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
