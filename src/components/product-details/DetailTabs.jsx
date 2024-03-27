"use client";
import { Tabs, Tab } from "@nextui-org/react";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import PrimaryButton from "../buttons/PrimaryButton";
import { useState } from "react";
import { Review } from "./Review";

export const DetailTabs = ({ tabItems }) => {
  const [isReviewOpen, setReviewOpen] = useState(false);
  console.log(isReviewOpen);

  return (
    <Tabs
      variant="underlined"
      size="lg"
      classNames={{
        tabList:
          "gap-16 md:w-full rounded-none p-0 border-b font-semibold  md:flex-nowrap ",
        cursor: "w-full bg-primary",
        tab: " px-0 h-12 ",
        tabContent:
          "group-data-[selected=true]:text-primary md:w-full text-black",
      }}
      items={tabItems}
    >
      {(tabs) => (
        <Tab key={tabs.id} title={tabs.label}>
          {tabs.id === "reviews" ? (
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl font-semibold">Customer Reviews</h1>
              <div className="grid grid-cols-2 gap-10 mt-10">
                <div>
                  <Rating
                    readOnly
                    style={{ maxWidth: 100 }}
                    itemStyles={{
                      itemShapes: Star,
                      itemStrokeWidth: 2,
                      activeStrokeColor: "#726EED",
                      inactiveStrokeColor: "#726EED",
                    }}
                    value={0}
                  />
                  <p>Be the first to write a review</p>
                </div>
                <PrimaryButton
                  onClick={() => setReviewOpen(!isReviewOpen)}
                  label={"Write a review"}
                  extraClass={"font-bold text-white rounded-none"}
                />
              </div>
              {isReviewOpen && <Review />}
            </div>
          ) : (
            <p className="pt-5">{tabs.content}</p>
          )}
        </Tab>
      )}
    </Tabs>
  );
};
