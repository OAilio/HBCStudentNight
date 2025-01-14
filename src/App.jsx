import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Club from './components/Club';
import Rosters from './components/Rosters';
import Preview from './components/Preview';
import AfterParty from './components/AfterParty';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/club" element={<Club />} />
      <Route path="/rosters" element={<Rosters />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/afterparty" element={<AfterParty />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App