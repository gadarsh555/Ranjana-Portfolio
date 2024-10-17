import React from "react";
import { IoStarOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

import "./achievements.css";

const AchievementCard = ({ description, link }) => {
  return (
    <div className="achievementCard project-card-view">
      <div className="achievementCardContainer">
        <IoStarOutline size={30} />
        <div className="achievementDescription">{description}</div>
      </div>
      {link ? (
        <a className="linkAchievement" href={link} target="_blank">
          Link &nbsp;
          <FaExternalLinkAlt />{" "}
        </a>
      ) : null}
    </div>
  );
};

export default AchievementCard;
