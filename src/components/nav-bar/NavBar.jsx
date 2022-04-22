import React, { useState, useEffect } from "react";
import Button from "./Button";

import {
  IoChevronDownSharp,
  IoLogoWindows,
  IoRibbonSharp,
  IoLogoWechat,
  IoPeople,
  IoLogoGooglePlaystore,
  IoGameController,
} from "react-icons/io5";

const btnSettings = [
  {
    name: "Home",
    className: "home",
    icon: <IoLogoWindows className="navbar-btn-icon"/>,
  },
  {
    name: "Tourney",
    className: "tourney",
    icon: <IoGameController className="navbar-btn-icon"/>,
  },
  {
    name: "Social",
    className: "friends",
    icon: <IoLogoWechat className="navbar-btn-icon"/>,
  },
  {
    name: "Team",
    className: "team",
    icon: <IoPeople className="navbar-btn-icon"/>,
  },
  {
    name: "On Live",
    className: "on-live",
    icon: <IoLogoGooglePlaystore className="navbar-btn-icon"/>,
  },
  {
    name: "Historic",
    className: "historic",
    icon: <IoRibbonSharp className="navbar-btn-icon"/>,
  },
];

export default function NavBar() {
  const [settings, setSettings] = useState({
    resize: false,
    className: "navbar",
  });

  const resizeHandler = () => {
    setSettings(
      settings.resize === false
        ? {
            resize: true,
            className: "navbar navbar-minimised",
          }
        : {
            resize: false,
            className: "navbar navbar-extend",
          }
    );
  };

  useEffect(() => {});

  return (
    <div className="nav-bar">
      {btnSettings.map((data) => (
        <div>
          <Button
            key={data.className}
            className={data.className}
            name={data.name}
            icon={data.icon}
          />
          {data.name === "Home" ? (
            <div onClick={resizeHandler} className="resize-navbar-btn">
              <IoChevronDownSharp className={"resize-icon"} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
