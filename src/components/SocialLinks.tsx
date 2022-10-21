/** @format */

import React from "react";
import SlackIcon from "../assets/SlackIcon.svg";
import GitHubIcon from "../assets/GitHubIcon.svg";
import ReactTooltip from "react-tooltip";

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-[36.75px] mb-[136.55px]">
      <ReactTooltip id="slackProfileTip" place="left" effect="solid">
        edemaero
      </ReactTooltip>
      <ReactTooltip id="githubProfileTip" place="right" effect="solid">
        Beyond_Logic
      </ReactTooltip>
      <img
        src={SlackIcon}
        alt="slack"
        id="slack"
        data-tip
        data-for="slackProfileTip"
      />

      <a href="https://github.com/Beyond-Logic" id="github">
        <img
          src={GitHubIcon}
          alt="github"
          data-tip
          data-for="githubProfileTip"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
