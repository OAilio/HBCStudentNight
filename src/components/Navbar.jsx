import "../styles/navbar.scss"
import { useState } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav>
        <div className="navbar-logo">
          <Link onClick={closeMenu} to="/">
            <img src={"/hbclogo1.png"} alt="HBC logo" className="icon"/>
            <h2>STUDENT NIGHT</h2>
          </Link>
        </div>
        <div className={`burger-menu ${isOpen ? "open" : ""}`} onClick={() => {
          setIsOpen(!isOpen);
        }}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
        <ul className={isOpen ? "open" : ""}>
          <li>
            <Link onClick={closeMenu} to="/">HOME</Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/club">THE CLUB</Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/rosters">ROSTERS</Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/preview">GAME PREVIEW</Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/afterparty">AFTER PARTY</Link>
          </li> 
        </ul>
      </nav>
    </>
  )
}

export default Navbar;