import { Accordion, AccordionItem } from "@nextui-org/react";
import { faqs } from "@/constant";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { TbMinusVertical } from "react-icons/tb";

export const FAQ = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mb-10">FAQs</h1>
      <Accordion
        showDivider={false}
        itemClasses={{
          base: "px-7 border",
          title: "text-base font-semibold",
          indicator: "bg-gray-100 p-2",
        }}
      >
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            aria-label={faq.title}
            title={faq.title}
            indicator={({ isOpen }) =>
              isOpen ? (
                <TbMinusVertical size={25} className="text-primary" />
              ) : (
                <FaPlus size={20} color="black" />
              )
            }
          >
            <p className="py-4">{faq.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
