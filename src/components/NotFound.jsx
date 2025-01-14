import "../styles/notfound.scss"
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404 - PAGE NOT FOUND</h1>
      <p>Whoopsie, this page doesn&apos;t exist.</p>
      <span><Link to="/">Return to home page</Link></span>
    </div>
  )
};

export default NotFound