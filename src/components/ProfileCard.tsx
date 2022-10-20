/** @format */

import React from "react";
import ProfilePhoto from "../assets/ProfilePicture.svg";
import ShareIcon from "../assets/ShareIcon.svg";
import MenuIcon from "../assets/MenuIcon.svg";

const ProfileCard = () => {
  return (
    <div className="relative lg:w-[65%] md:w-[70%] m-auto">
      <div className="flex flex-col justify-center items-center">
        <img src={ProfilePhoto} id="profile__img" alt="profile__img" />
        <h5
          id="twitter"
          className="mt-[24px] font-bold md:text-[20px] text-[18px] md:leading-[30px] leading-[28px] text-[#101828] text-center"
        >
          Annette Black
        </h5>
      </div>
      <div className="absolute right-0 top-0">
        <img
          src={ShareIcon}
          id="share__icon"
          alt="share__icon"
          className="-mt-6 hidden md:flex"
        />
        <img
          src={MenuIcon}
          id="menu__icon"
          alt="menu__icon"
          className="-mt-6 flex md:hidden"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
