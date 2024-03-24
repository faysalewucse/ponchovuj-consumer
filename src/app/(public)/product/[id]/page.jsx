"use client";
import Container from "@/components/shared/Container";
import { FaArrowLeft, FaArrowRight, FaRegEye } from "react-icons/fa6";
import { TbEyeClosed } from "react-icons/tb";

import {
  galleryImages,
  productSize,
  productColor,
  productMaterial,
} from "@/constant";
import { useState } from "react";
import { Tooltip } from "keep-react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductDetails = ({ params }) => {
  // state for selecting gallery Image
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

  // state for selecting product size
  const [selectedSize, setSelectedSize] = useState(productSize[0]);

  // state for selecting product color
  const [selectedColor, setSelectedColor] = useState(productColor[0]);

  // state for selecting product Material
  const [selectedMaterial, setSelectedMaterial] = useState(productMaterial[0]);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handleArrowClick = (direction) => {
    const currentIndex = galleryImages.findIndex(
      (img) => img === selectedImage
    );
    if (direction === "left") {
      const newIndex =
        currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
      setSelectedImage(galleryImages[newIndex]);
    } else {
      const newIndex =
        currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(galleryImages[newIndex]);
    }
  };

  const moveSelectedImageToFront = (images, selectedImage) => {
    const index = images.findIndex((img) => img === selectedImage);
    const before = images.slice(0, index);
    const after = images.slice(index + 1);
    return [selectedImage, ...after, ...before];
  };

  const updatedImages = moveSelectedImageToFront(galleryImages, selectedImage);

  return (
    <Container className="grid grid-cols-2 gap-8 py-10">
      <div className="">
        <img
          src={selectedImage.url}
          alt=""
          className="w-auto  transition-all duration-500 ease-in-out"
        />
        <div className="flex gap-x-4 overflow-hidden transition-all duration-500 pt-5">
          {updatedImages.map((image) => (
            <img
              key={image.image}
              alt={`Thumbnail ${image}`}
              width={140}
              src={image.url}
              onClick={() => handleImageSelect(image)}
              className={` cursor-pointer transition-all duration-300 ease-in-out ${
                selectedImage === image ? "border border-primary" : ""
              }`}
            />
          ))}
        </div>
        <div className="flex gap-x-3 pt-4">
          <button
            onClick={() => handleArrowClick("left")}
            className="border p-2"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => handleArrowClick("right")}
            className="border p-2"
          >
            <FaArrowRight />
          </button>
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
          <div className="flex items-center gap-x-3">
            <p className="font-semibold">Size:</p>
            {productSize.map((size, i) => (
              <button
                key={i}
                onClick={() => setSelectedSize(size)}
                className={`font-medium  border px-1 ${
                  size === selectedSize
                    ? "bg-primary text-white"
                    : "bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-x-3">
            <p className="font-semibold">Color:</p>
            {productColor.map((color) => (
              <Tooltip
                content={color.color}
                trigger="hover"
                placement="top"
                animation="duration-300"
                style="dark"
              >
                <span
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-1 rounded-full bg-[${
                    color.code
                  }] cursor-pointer ${
                    color.code === selectedColor.code
                      ? "outline outline-primary"
                      : ""
                  }`}
                ></span>
              </Tooltip>
            ))}
          </div>
          <div className="flex items-center gap-x-3">
            <p className="font-semibold">Size:</p>
            {productMaterial.map((material, i) => (
              <button
                key={i}
                onClick={() => setSelectedMaterial(material)}
                className={`font-medium  border px-1 ${
                  material === selectedMaterial
                    ? "bg-primary text-white"
                    : "bg-gray-100"
                }`}
              >
                {material}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
