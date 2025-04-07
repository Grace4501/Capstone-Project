import React, { useState, useEffect } from "react";

const LeadershipTeam = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch("/leadershipTeam.json")
      .then((response) => response.json())
      .then((data) => setLeaders(data))
      .catch((error) => console.error("Error loading leadership team data:", error));
  }, []);

  return (
    <div className="leadership-container">
      {leaders.map((leader, index) => (
        <div key={index} className="leadership-card">
          <img src={leader.image} alt={leader.name} className="leadership-img" />
          <div className="leadership-info">
            <div className="leadership-name">{leader.name}</div>
            <div className="leadership-title">{leader.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeadershipTeam;
