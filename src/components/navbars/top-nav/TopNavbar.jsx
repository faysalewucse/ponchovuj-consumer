"use client";
import { TextWithIcon } from "./TextWithIcon";
import { Socials } from "./Socials";
import { IoLocationOutline } from "react-icons/io5";
import Select from "react-select";
import { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import Container from "@/components/shared/Container";

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
            defaultValue="English"
            onChange={handleChange}
            options={options}
            isSearchable={false}
            styles={{
              control: (base) => ({
                ...base,
                fontSize: "14px",
                border: "1px solid #D4D4D4",
                boxShadow: "none",
                "&:hover": {
                  border: "1px solid #D4D4D4",
                },
              }),
            }}
            className="w-32"
          />
          <Socials />
        </div>
      </div>
    </Container>
  );
};
