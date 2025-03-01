import "../styles/rosters.scss"
import { useState, useEffect } from "react";

const Rosters = () => {
  const [homeRoster, setHomeRoster] = useState([]);
  const [awayRoster, setAwayRoster] = useState([]);

  useEffect(() => {
    const fetchRosters = async () => {
      try {
        const [homeResponse, awayResponse] = await Promise.all([
          fetch("/data/homeRoster.json"),
          fetch("/data/awayRoster.json"),
        ]);

        const homeData = await homeResponse.json();
        const awayData = await awayResponse.json();

        setHomeRoster(homeData);
        setAwayRoster(awayData);
      } catch (error) {
        console.error("Error loading rosters:", error);
      }
    };

    fetchRosters();
  }, []);

  return (
    <div className="rosters">
      <h1>ROSTERS</h1>
      <div className="hometeam">
        <div className="title">
          <img src={"/currentus.webp"} alt="HBC Currentus logo" className="icon" loading="lazy"/>
          <h2>HBC CURRENTUS</h2>
        </div>
        <div className="players">
          {homeRoster
            .sort((a, b) => a.number - b.number)
            .map((player) => {
              return (
                <div key={player.number} className="playercard">
                  <div className="image-container">
                    <img src={player.image} alt={player.name} className="image" loading="lazy"/>
                    <p className="player-number">#{player.number}</p>
                  </div>
                  <h3 className={player.type}>{player.name}</h3>
                  <p>{player.hometown}</p>
                  <p>{player.major},</p>
                  <p>{player.year}</p>
                </div>
              )
          })}
        </div>
      </div>
      <div className="awayteam">
        <div className="title">
          <img src={"/tuto.webp"} alt="TuTo logo" className="icon" loading="lazy"/>
          <h2>TUTO</h2>
        </div>
        <div className="players">
          {awayRoster
            .sort((a, b) => a.number - b.number)
            .map((player) => {
              return (
                <div key={player.number} className="player">
                  <p className="number">#{player.number}</p>
                  <h3>{player.name}</h3>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  )
};

export default Rosters