import React from "react";

export const TitleWithDescription = ({ title, description, className }) => {
  const combinedClassName = `flex flex-col justify-center items-center my-12 ${className}`;
  return (
    <div className={combinedClassName}>
      <h1 className="text-[40px] font-bold leading-[1.2]">{title}</h1>
      <p>{description}</p>
    </div>
  );
};
