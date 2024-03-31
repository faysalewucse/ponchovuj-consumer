"use client";
import { Accordion, AccordionItem, Checkbox, Slider } from "@nextui-org/react";
import { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { IoClose } from "react-icons/io5";

export const ProductFilters = () => {
  const [price, setPrice] = useState([100, 500]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelection = (option) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((item) => item !== option);
      } else {
        return [...prevSelectedOptions, option];
      }
    });
  };
  const handleRemoveOption = (optionToRemove) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.filter((option) => option !== optionToRemove)
    );
  };

  return (
    <div>
      <div className="flex gap-3 flex-wrap w-[300px] px-2">
        {selectedOptions.map((option) => (
          <div
            key={option}
            className="flex items-center gap-1 bg-gray-100 text-sm p-1"
          >
            <p>{option}</p>
            <button onClick={() => handleRemoveOption(option)}>
              <IoClose />
            </button>
          </div>
        ))}
        {selectedOptions.length !== 0 && (
          <button
            onClick={() => setSelectedOptions([])}
            className="text-sm bg-primary p-1 text-white font-medium"
          >
            Clear all
          </button>
        )}
      </div>
      <Accordion
        selectionMode="multiple"
        itemClasses={{
          base: "w-full",
          title: "font-semibold text-lg text-start",
          trigger: "px-2 py-6 flex justify-between",
          indicator: "font-semibold text-lg ml-16",
          content: "flex flex-col pb-4 ",
        }}
      >
        {filters.map((filter) => (
          <AccordionItem
            key={filter.title}
            aria-label={filter.title}
            title={filter.title}
          >
            {filter.title === "Price" ? (
              <div className="px-4 space-y-3">
                <Slider
                  label
                  step={50}
                  size="sm"
                  maxValue={1000}
                  minValue={0}
                  value={price}
                  onChange={setPrice}
                  formatOptions={{ style: "currency", currency: "BDT" }}
                  classNames={{
                    base: "w-full",
                    label: "font-medium pb-2",
                  }}
                />
                <PrimaryButton label={"Filter"} extraClass={"rounded-none"} />
              </div>
            ) : (
              filter.options.map((option, i) => (
                <Checkbox
                  key={i}
                  radius="none"
                  isSelected={selectedOptions.includes(option)}
                  onValueChange={() => handleSelection(option)}
                >
                  {option}
                </Checkbox>
              ))
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const filters = [
  { title: "Availability", options: ["In Stock", "Out of Stock"] },
  { title: "Price", options: ["Low", "High"] },
  { title: "Product Type", options: ["Electronics", "Clothing"] },
  { title: "Brand", options: ["Nike", "Adidas"] },
  { title: "Color", options: ["Red", "Blue"] },
  { title: "Material", options: ["Cotton", "Leather"] },
  { title: "Size", options: ["Small", "Large"] },
];
