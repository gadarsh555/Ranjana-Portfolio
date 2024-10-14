import React from "react";
import { IoStarOutline } from "react-icons/io5";

import "./achievements.css";

const AchievementCard = ({ description }) => {
  return (
    <div className="achievementCard project-card-view">
      <div className="achievementCardContainer">
        <IoStarOutline size={30} />
        <div className="achievementDescription">{description}</div>
      </div>
    </div>
  );
};

export default AchievementCard;
