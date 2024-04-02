import { Pagination } from "@nextui-org/react";
import React from "react";

export const ProductPagination = ({ totalPage }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  console.log(currentPage);
  return (
    <div className="flex justify-center my-10">
      <Pagination
        total={5}
        initialPage={1}
        page={currentPage}
        showControls
        onChange={setCurrentPage}
        classNames={{
          wrapper: "gap-2 overflow-visible h-[50px] ",
          item: "w-[50px] h-[50px] font-bold text-base rounded-none border bg-transparent ",
          cursor:
            "w-[50px] h-[50px] bg-primary text-white font-bold text-base rounded-none",
          next: "rounded-none w-[50px] h-[50px] bg-transparent border text-base font-bold",
          prev: "rounded-none w-[50px] h-[50px] bg-transparent border text-base font-bold",
        }}
      />
    </div>
  );
};
