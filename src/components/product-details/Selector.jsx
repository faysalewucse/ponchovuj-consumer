"use client";
import { Tooltip } from "keep-react";
import { useState } from "react";

export const Selector = ({
  selectedItems,
  selectorName,
  dataType,
  onSelect,
}) => {
  const [selectedItem, setSelectedItem] = useState(selectedItems[0]);

  const handleClick = (item) => {
    setSelectedItem(item);
    onSelect(item);
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap items-center gap-3">
      <p className="font-semibold">{selectorName}:</p>
      {dataType === "color"
        ? selectedItems.map((color, i) => (
            <Tooltip
              key={i}
              content={color.color}
              trigger="hover"
              placement="top"
              animation="duration-300"
              style="dark"
            >
              <span
                onClick={() => handleClick(color)}
                style={{ background: color.code }}
                className={`px-4 py-1 rounded-full cursor-pointer ${
                  color === selectedItem ? "outline outline-primary" : ""
                }`}
              ></span>
            </Tooltip>
          ))
        : selectedItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleClick(item)}
              className={`font-medium border px-1 w-1/6 ${
                item === selectedItem ? "bg-primary text-white" : "bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
    </div>
  );
};
