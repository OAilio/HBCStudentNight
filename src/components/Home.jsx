import "../styles/home.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faSquareInstagram, faSquareXTwitter, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  return (
    <>
    <Carousel className="carousel" infiniteLoop={true}
      interval={4000} autoPlay={true} showThumbs={false} showStatus={false}
      showIndicators={false} showArrows={false} swipeable>
      <div className="carousel-slide">
        <img src={"/carousel1.svg"} alt="" />
      </div>
      <div className="carousel-slide">
        <img src={"/carousel2.svg"} alt="" />
      </div>
      <div className="carousel-slide">
        <img src={"/carousel3.svg"} alt="" />
      </div>
    </Carousel>
    <div className="home">
      <h1>WELCOME TO THE GAME PROGRAMME OF HBC STUDENT NIGHT 2025!</h1>
      <p>
        Get ready for an electrifying night of basketball as [Team A] takes on [Team B]
        in a showdown of skill, determination, and team spirit! Whether you’re here to
        cheer for your favorite players, enjoy the energy of the game, or experience the
        thrill of live basketball, we’re excited to have you with us.
      </p>
      <section className="cardgrid">
      <Link to="/club" className="card">
        <img src={"/hbclogo2.svg"} alt="HBC logo" className="icon"/>
        <div>THE CLUB</div>
      </Link>
      <Link to="/rosters" className="card" >
        <img src={"/jerseyiconwhite.svg"} alt="Basketball jersey" className="icon"/>
        <div>ROSTERS</div>
      </Link>
      <Link to="/preview" className="card">
        <FontAwesomeIcon icon={faCommentDots}  className="icon"/>
        <div>PREVIEW</div>
      </Link>
      <Link to="/afterparty" className="card">
      <img src={"/discoball.svg"} alt="Basketball jersey" className="icon"/>
        <div>AFTER PARTY</div>
      </Link>
      </section>
    </div>
    <div className="socials">
      <h2>FOLLOW US ON SOCIALS!</h2>
      <div className="icons">
        <a href="https://www.instagram.com/hunksbasketball/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareInstagram}/>
        </a>
        <a href="https://twitter.com/HunksBasketball" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareXTwitter}/>
        </a> 
        <a href="https://www.youtube.com/@HunksBasketball/featured" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareYoutube}/>
        </a>        
      </div>
      <h2>Don&apos;t forget to tag us with</h2>
      <div className="tags">
        <div>#HBCstudentnight</div>
        <div>@hunksbasketball</div>
      </div>
    </div>
    <div className="home thanks">
      <h2>WE WISH TO THANK</h2>
      <div className="partners">
        <p>Turun Teknologiakiinteistöt Oy</p>
        <p>Redbull Suomi</p>
        <p>Kloffa Clothing</p>
        <p>Fredrik & Doris</p>
        <p>KY-Jets</p>
        <p>Functio Laesa</p>
        <p>TuKY-Speksi Dance Team</p>
        <p>CIA-TuKY</p>
        <p>HBC Shooters & HBC Emeritus volunteers</p>
      </div>
    </div>
    </> 
  )
};

export default Home