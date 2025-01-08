import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Club from './components/Club';
import Rosters from './components/Rosters';
import Preview from './components/Preview';
import AfterParty from './components/AfterParty';

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <><Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/club" element={<Club />} />
      <Route path="/rosters" element={<Rosters />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/afterparty" element={<AfterParty />} />
      <Route path="*" element={<NotFound />} />
    </Routes></>
  );
}

export default App