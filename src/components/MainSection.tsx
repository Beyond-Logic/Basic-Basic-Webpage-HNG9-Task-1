/** @format */

import React from "react";
import { LinkCard, SocialLinks } from "./index";

const Links = [
  {
    title: "Twitter Link",
    link: "https://twitter.com/_beyond_logic",
    id: "twitter",
    fontWeight: false,
  },
  {
    title: "Zuri Team",
    link: "https://training.zuri.team/",
    id: "btn__zuri",
    fontWeight: true,
  },
  {
    title: "Zuri Books",
    link: "http://books.zuri.team/",
    id: "books",
    subtext: "This is where you find books about design and coding",
    fontWeight: true,
  },

  {
    title: "Python Books",
    link: "https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>",
    id: "book__python",
    fontWeight: true,
  },

  {
    title: "Background Check for Coders",
    link: "https://background.zuri.team/",
    id: "pitch",
    subtext: "This is where you find books about design and coding",
    fontWeight: true,
  },

  {
    title: "Design Books",
    link: "https://books.zuri.team/design-rules",
    id: "book__design",
    subtext: "Don't let little mistakes cost you a chance",
    fontWeight: true,
  },
];

const MainSection = () => {
  return (
    <div>
      <div className="flex flex-col space-y-[24px] mt-[56px] mb-[48px]">
        {Links &&
          Links.map((item, key) => (
            <LinkCard
              key={key}
              title={item.title}
              link={item.link}
              id={item.id}
              fontweight={item.fontWeight}
            />
          ))}
      </div>
      <SocialLinks />
    </div>
  );
};

export default MainSection;
