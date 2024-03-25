"use client";
import Container from "@/components/shared/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { TbEyeClosed } from "react-icons/tb";
import {
  galleryImages,
  productSize,
  productColor,
  productMaterial,
} from "@/constant";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Selector } from "@/components/product-details/Selector";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

//swiper js styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductDetails = ({ params }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-3">
      <div className="relative">
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
              className="w-auto"
            >
              <img src={images.url} />
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
              <img src={images.url} className="" />
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
      <div>
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-2">
            <Rating readOnly style={{ maxWidth: 100 }} value={2} />
            <span className="text-star">{1} review</span>
          </div>

          <p className="text-2xl font-semibold">{"Product Name"}</p>
          <p className="text-3xl font-semibold flex items-center gap-2">
            <span className="text-2xl text-gray-400 line-through">$56</span>
            <span className="text-primary">$36</span>{" "}
            <span className="inline font-medium text-sm bg-gray-100 p-1">
              save -33%
            </span>
          </p>
          <p className="text-justify pb-2">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system.
          </p>
          <hr />
          <p className="flex items-center gap-2 py-4">
            <TbEyeClosed size={25} />
            22 people are viewing this right now.
          </p>
        </div>
        <hr />
        <div className="flex flex-col gap-y-3 py-4">
          <p>
            Availability: <span className="pl-4">{"stock"}</span>{" "}
          </p>
          <p>
            SKU: <span className="pl-4">{"stock"}</span>{" "}
          </p>
          <p>
            Vendor: <span className="pl-4">{"stock"}</span>{" "}
          </p>
          <p>
            Type: <span className="pl-4">{"stock"}</span>{" "}
          </p>
        </div>
        <hr />
        <div className=" flex flex-col gap-y-5 py-4">
          <Selector
            selectedItems={productSize}
            selectorName={"Size"}
            dataType={"text"}
            onSelect={(selectedItem) => {
              console.log(selectedItem);
            }}
          />
          <Selector
            selectedItems={productColor}
            selectorName={"Color"}
            dataType={"color"}
            onSelect={(selectedItem) => {
              console.log(selectedItem);
            }}
          />
          <Selector
            selectedItems={productMaterial}
            selectorName={"Material"}
            dataType={"text"}
            onSelect={(selectedItem) => {
              console.log(selectedItem);
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
