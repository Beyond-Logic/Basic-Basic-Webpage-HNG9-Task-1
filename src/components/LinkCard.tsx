/** @format */

import React from "react";

type linkCardProps = {
  title: string;
  link: string;
  subtext?: string;
  id: string;
  fontweight: boolean | undefined;
  dataFor?: string;
};

const LinkCard = ({
  title,
  subtext,
  link,
  id,
  fontweight,
  dataFor,
}: linkCardProps) => {
  return (
    <a href={link} data-tip data-for={dataFor}>
      <button
        id={id}
        className={`hover:bg-[#D0D5DD] w-full py-[24px] bg-[#EAECF0] border border-[#EAECF0] rounded-[8px] text-[18px] leading-[28px] text-[#101828] ${
          fontweight ? "font-semibold" : "font-medium"
        }`}
      >
        <h2>{title}</h2>
      </button>
    </a>
  );
};

export default LinkCard;
