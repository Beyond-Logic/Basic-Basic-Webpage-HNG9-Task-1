/** @format */

import React from "react";

type linkCardProps = {
  title: string;
  link: string;
  id: string;
  fontweight: boolean | undefined;
};

const LinkCard = ({ title, link, id, fontweight }: linkCardProps) => {
  return (
    <a href={link}>
      <button
        id={id}
        className={`w-full py-[24px] bg-[#EAECF0] border border-[#EAECF0] rounded-[8px] text-[18px] leading-[28px] text-[#101828] ${
          fontweight ? "font-semibold" : "font-medium"
        }`}
      >
        {title}
      </button>
    </a>
  );
};

export default LinkCard;
