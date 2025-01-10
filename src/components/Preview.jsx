import "../styles/preview.scss"

const Preview = () => {
  const teams = [
    {
      name: "HBC CURRENTUS",
      record: "6W 1L (4TH)",
      lastfive: ["W", "W", "W", "W", "W"]
    },
    {
      name: "TUTO",
      record: "6W 4L (3RD)",
      lastfive: ["W", "W", "W", "W", "L"]
    }
  ]

  const head2head = [
    {
      home: "/tuto.svg",
      homealt: "TuTo logo",
      away: "/currentus.svg",
      awayalt: "HBC Currentus logo",
      score: "74 – 63",
      date: "18.10.2024",
    },
    {
      home: "/currentus.svg",
      homealt: "HBC Currentus logo",
      away: "/tuto.svg",
      awayalt: "TuTo logo",
      score: "77 – 75",
      date: "21.9.2024 (Pre-season friendly)",
    },
    {
      home: "/currentus.svg",
      homealt: "HBC Currentus logo",
      away: "/tuto.svg",
      awayalt: "TuTo logo",
      score: "80 – 61",
      date: "18.1.2024 (Student Night 2024)",
    },
    {
      home: "/tuto.svg",
      homealt: "TuTo logo",
      away: "/currentus.svg",
      awayalt: "HBC Currentus logo",
      score: "72 – 81",
      date: "11.10.2023",
    }
  ]

  const comments = [
    {
      quote: "Facing TuTo, we anticipate a high-intensity matchup. They're disciplined and excel in transition. Our focus will be on controlling the boards, limiting turnovers, and executing defensively. Staying composed under pressure will be key to securing the win.",
      name: "JUSSI TAMMINEN",
      title: "Head Coach, HBC Currentus"
    },
    {
      quote: "Facing TuTo, we anticipate a high-intensity matchup. They're disciplined and excel in transition. Our focus will be on controlling the boards, limiting turnovers, and executing defensively. Staying composed under pressure will be key to securing the win.",
      name: "TAME JUSSINEN",
      title: "Head Coach, TuTo"
    }
  ]

  return (
    <>
    <div className="preview">
      <h1>GAME PREVIEW</h1>
      <div className="versus">
        <div className="logo-wrapper">
          <img src={"/currentus.svg"} alt="TuTo logo" className="icon" />
        </div>
        <span className="vs">VS</span>
        <div className="logo-wrapper">
          <img src={"/tuto.svg"} alt="TuTo logo" className="icon" />
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
                    <img src={game.home} alt={game.homealt} className="icon" />
                  </div>
                  <span className="vs">{game.score}</span>
                  <div className="logo-wrapper">
                    <img src={game.away} alt={game.awayalt} className="icon" />
                  </div>
                </div>
                <p>{game.date}</p>
              </div>
            </div>
          );
        })}
        <p className="more">For more results & full standings table, check out
          <a href="https://tulospalvelu.basket.fi/category/36!lankp2425/group/301687">basket.fi</a>.
        </p>
    </div>
    <div className="comments">
      <h2>COACHES&apos; COMMENTS</h2>
      {comments.map((comment) => {
          return (
            <div key={comment.name}>
              <div className="quote">
                <img className="mark" src="quotations.svg" alt=""/>
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
