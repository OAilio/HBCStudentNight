import "../styles/preview.scss"
import { useState, useEffect } from "react";

const Preview = () => {
  const [teams, setTeams] = useState([]);
  const [head2head, setHead2head] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPreviewData = async () => {
      try {
        const [teamsResponse, head2headResponse, commentsResponse] = await Promise.all([
          fetch("/data/teams.json"),
          fetch("/data/head2head.json"),
          fetch("/data/comments.json")
        ]);

        const teamsData = await teamsResponse.json();
        const head2headData = await head2headResponse.json();
        const commentsData = await commentsResponse.json();

        setTeams(teamsData);
        setHead2head(head2headData);
        setComments(commentsData);
      } catch (error) {
        console.error("Error loading rosters:", error);
      }
    };

    fetchPreviewData();
  }, []);

  return (
    <>
    <div className="preview">
      <h1>GAME PREVIEW</h1>
      <div className="versus">
        <div className="logo-wrapper">
          <img src={"/currentus.webp"} alt="TuTo logo" className="icon" loading="lazy"/>
        </div>
        <span className="vs">VS</span>
        <div className="logo-wrapper">
          <img src={"/tuto.webp"} alt="TuTo logo" className="icon" loading="lazy"/>
        </div>
      </div>
      <div className="form">
        {teams.map((team) => {
          return (
            <div key={team.name}>
              <div className="team">
                <h2>{team.name}</h2><span className="record">{team.record}</span>
              </div>
              <div className="last-five-container">
                <div className="heading">
                  <h4>Last five games</h4>
                </div>
                <div className="last-five">
                  <div className="tags">
                    {team.lastfive.map((result, index) => (
                      <span key={index} className={result}>
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <p className="info">Most recent result is on the right.</p>
      </div>
      <h2>HEAD TO HEAD</h2>
    </div>
    <div className="previousresults">
        {head2head.map((game, index) => {
          return (
            <div key={game.date}>
              <div className={`game ${index % 2 === 0 ? "odd" : "even"}`}>
                <div className="versus">
                  <div className="logo-wrapper">
                    <img src={game.home} alt={game.homealt} className="icon" loading="lazy"/>
                  </div>
                  <span className="vs">{game.score}</span>
                  <div className="logo-wrapper">
                    <img src={game.away} alt={game.awayalt} className="icon" loading="lazy"/>
                  </div>
                </div>
                <p>{game.date}</p>
              </div>
            </div>
          );
        })}
        <p className="more">For more results & full standings table, check out
          <a href="https://tulospalvelu.basket.fi/category/36!lankp2425/group/301687"
          aria-label="Visit the series' site on Basketball Finland website">basket.fi</a>.
        </p>
    </div>
    <div className="comments">
      <h2>COACHES&apos; COMMENTS</h2>
      {comments.map((comment) => {
          return (
            <div key={comment.name}>
              <div className="quote">
                <img className="mark" src="quotations.webp" alt="" loading="lazy"/>
                <q>{comment.quote}</q>
                <div className="citation">
                  <span className="name">{comment.name}</span>
                  <span>{comment.title}</span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
    </>
  )
};

export default Preview