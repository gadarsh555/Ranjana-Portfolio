import React from "react";
import { IoStarOutline } from "react-icons/io5";

import "./achievements.css";

const AchievementCard = ({ description }) => {
  return (
    <div className="achievementCard project-card-view">
      <div className="section1">
        <IoStarOutline size={30} />
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default AchievementCard;
