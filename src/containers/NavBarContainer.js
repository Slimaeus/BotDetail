import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import links from "../links.json";

export const NavBarContainer = (props) => {
  const [tabs] = useState([
    {
      name: "Features",
      link: "features",
    },
    {
      name: "Commands",
      link: "commands",
    },
    {
      name: "Vote",
      link: links.topgg,
      target: "_blank"
    },
    {
      name: "Uptime",
      link: "uptime",
    },
    {
      name: "Support",
      link: "support",
    },
    {
      name: "Invite",
      link: "invite",
    },
  ]);
  return <NavBar tabs={tabs} />;
};
