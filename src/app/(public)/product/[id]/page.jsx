"use client";
import Container from "@/components/shared/Container";
import {
  FaCartShopping,
  FaFacebook,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";
import { TbEyeClosed, TbTruckDelivery } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsCreditCard2Back, BsTruck } from "react-icons/bs";
import {
  galleryImages,
  productSize,
  productColor,
  productStocks,
  productMaterial,
  tabs,
} from "@/constant";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Selector } from "@/components/product-details/Selector";
import { Counter } from "@/components/Counter";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { TextWithIcon } from "@/components/navbars/top-nav/TextWithIcon";
import { Gallery } from "@/components/product-details/Gallery";
import { DetailTabs } from "@/components/product-details/DetailTabs";
import { FAQ } from "@/components/product-details/FAQ";
import { AddedToCartModal } from "@/components/modal/AddedToCartModal";

const ProductDetails = ({ params }) => {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddToCart = () => {
    setModalOpen(true);
  };

  return (
    <Container className="py-10 px-3 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-20">
        <div className="md:sticky top-2 self-start">
          <Gallery galleryImages={galleryImages} />
        </div>
        <div>
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-2">
              <Rating readOnly style={{ maxWidth: 100 }} value={2} />
              <span className="text-star">{1} review</span>
            </div>

            <p className="text-2xl font-semibold">{"Product Name"}</p>
            <p className="text-3xl font-semibold flex items-center gap-2">
              <span className="text-2xl text-gray-400 line-through">${56}</span>
              <span className="text-primary">${36}</span>{" "}
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
          <div className="flex flex-col gap-y-2 py-4 w-44">
            {productStocks.map((stock, i) => (
              <ul key={i}>
                <li className="flex justify-between">
                  <span className="font-semibold">{stock}:</span>
                  <span>stock</span>
                </li>
              </ul>
            ))}
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
          <div className="flex flex-wrap md:flex-nowrap items-center gap-5 py-4">
            <Counter quantity={quantity} setQuantity={setQuantity} />
            <PrimaryButton
              label={"Add to cart"}
              extraClass={"rounded-none py-7"}
              onClick={handleAddToCart}
            />
            <PrimaryButton
              label={"Buy it now"}
              extraClass={"rounded-none py-7 bg-black hover:bg-primary"}
            />
          </div>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-5 font-medium pb-4">
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
          <div className="py-4">
            <p className="font-semibold text-lg">Secure Payment Gateway</p>
            {/* TODO: Add payment gateway images. */}
          </div>
        </div>
      </div>
      <AddedToCartModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      <div className="flex flex-col md:flex-row justify-between gap-y-2 border px-7 py-10 ">
        <div className="flex items-center gap-5">
          <BsTruck size={50} className="text-black/75" />
          <div>
            <p className="text-xl font-semibold">Free Shipping</p>
            <p>Free shipping on orders over $99.</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <GiTakeMyMoney size={50} className="text-black/75" />
          <div>
            <p className="text-xl font-semibold">Money Back</p>
            <p>15 days money back guarantee.</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <BsCreditCard2Back size={50} className="text-black/75" />
          <div>
            <p className="text-xl font-semibold">Secure Checkout</p>
            <p>We ensure 100% Payment Secure.</p>
          </div>
        </div>
      </div>
      <div className=" pt-20">
        <DetailTabs tabItems={tabs} />
      </div>

      <div className=" pt-20">
        <FAQ />
      </div>
    </Container>
  );
};

export default ProductDetails;
