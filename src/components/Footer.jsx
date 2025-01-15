import "../styles/footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faSquareXTwitter, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
        <div className="content">
            <h2>HBC STUDENT NIGHT 2025</h2>
            <div className="icons">
                <a href="https://www.instagram.com/hunksbasketball/" target="_blank" rel="noopener noreferrer" aria-label="Visit Hunks Basketball Club's Instagram">
                    <FontAwesomeIcon icon={faSquareInstagram}/>
                </a>
                <a href="https://twitter.com/HunksBasketball" target="_blank" rel="noopener noreferrer" aria-label="Visit Hunks Basketball Club's X/Twitter">
                    <FontAwesomeIcon icon={faSquareXTwitter}/>
                </a> 
                <a href="https://www.youtube.com/@HunksBasketball/featured" target="_blank" rel="noopener noreferrer" aria-label="Visit Hunks Basketball Club's YouTube channel">
                    <FontAwesomeIcon icon={faSquareYoutube}/>
                </a>        
            </div>
            <a href="https://www.hunksbasketball.fi/">www.hunksbasketball.fi (FI)</a>
        </div>
        <div className="credit">
            <span>Created by <a className="link" href="https://www.okkoailio.fi/" aria-label="Visit Okko Ailio's portfolio">Okko Ailio</a></span>
        </div>
    </div>
  )
};

export default Footer