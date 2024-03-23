"use client";
import { TextWithIcon } from "./TextWithIcon";
import { Socials } from "./Socials";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import Container from "@/components/shared/Container";
import { Select, SelectItem } from "@nextui-org/react";

export const TopNavbar = () => {
  const [selectedOption, setSelectedOption] = useState("en");

  const options = [
    { value: "en", label: "English" },
    { value: "bn", label: "Bangla" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <Container>
      <div className="flex justify-between px-5 py-1">
        <div className="flex gap-x-7">
          <TextWithIcon text={"ponchovuj@gmail.com"} icon={<TfiEmail />} />
          <TextWithIcon
            text={"3B, Sector 1, Address, City"}
            icon={<IoLocationOutline />}
          />
        </div>

        <div className="flex gap-x-7">
          <Select
            size="sm"
            color="default"
            label=""
            defaultSelectedKeys={["en"]}
            className="w-28"
          >
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select>
          <Socials />
        </div>
      </div>
    </Container>
  );
};
