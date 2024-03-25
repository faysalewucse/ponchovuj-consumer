"use client";
import Container from "@/components/shared/Container";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCartShopping,
  FaFacebook,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";
import { TbEyeClosed, TbTruckDelivery } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
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
import { Counter } from "@/components/Counter";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { TextWithIcon } from "@/components/navbars/top-nav/TextWithIcon";

//swiper js styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductDetails = ({ params }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 px-3">
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
              <img src={images.url} alt={`Image ${images.image}`} />
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
        <hr />
        <div className="flex items-center gap-x-5 py-4">
          <Counter quantity={quantity} setQuantity={setQuantity} />
          <PrimaryButton
            label={"Add to cart"}
            extraClass={"rounded-none py-7"}
          />
          <PrimaryButton
            label={"Buy it now"}
            extraClass={"rounded-none py-7 bg-black hover:bg-primary"}
          />
        </div>
        <div className="flex items-center gap-x-10 font-medium pb-4">
          <TextWithIcon icon={<CiHeart />} text={"Add to wishlist"} />
          <TextWithIcon text={"compare"} />
          <TextWithIcon icon={<TfiEmail />} text={"Ask about this product"} />
        </div>
        <hr />
        <div className="py-4">
          <p className="flex items-center gap-3">
            <TbTruckDelivery size={30} />
            <span>Estimated Delivery Date :</span>
            <span className="font-medium">27 - 29 March, 2024.</span>
          </p>

          <p className="font-semibold mt-4">Return rules summary</p>
          <ul className="flex flex-col gap-y-1 list-disc pl-4 pt-4">
            <li>Returns accepted for 30 days</li>
            <li>Free return shipping</li>
            <li>No restocking fee</li>
            <li>No final sale items</li>
          </ul>
        </div>
        <hr />
        <div className="flex items-center gap-5 text-black py-4">
          <p>Share:</p>
          <TextWithIcon icon={<FaFacebook />} text={"Facebook"} />
          <TextWithIcon icon={<FaTwitter />} text={"X"} />
          <TextWithIcon icon={<FaPinterest />} text={"Pinterest"} />
        </div>
        <hr />
      </div>
    </Container>
  );
};

export default ProductDetails;
