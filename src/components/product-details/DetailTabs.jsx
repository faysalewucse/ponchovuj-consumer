import { Tabs, Tab } from "@nextui-org/react";
import { FaRegStar } from "react-icons/fa";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import PrimaryButton from "../buttons/PrimaryButton";

export const DetailTabs = ({ tabItems }) => {
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
              <div className="flex items-center gap-5 w-2/4 mx-auto">
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
                  label={"Write a review"}
                  extraClass={"font-bold text-white rounded-none"}
                />
              </div>
            </div>
          ) : (
            <p className="pt-5">{tabs.content}</p>
          )}
        </Tab>
      )}
    </Tabs>
  );
};
