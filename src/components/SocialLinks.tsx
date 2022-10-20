/** @format */

import React from "react";
import SlackIcon from "../assets/SlackIcon.svg";
import GitHubIcon from "../assets/GitHubIcon.svg";

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-[36.75px] mb-[177.1px]">
      <img src={SlackIcon} alt="slack" title="edemaero" id="slack" />

      <a href="https://github.com/Beyond-Logic" id="github">
        <img src={GitHubIcon} alt="github" />
      </a>
    </div>
  );
};

export default SocialLinks;
