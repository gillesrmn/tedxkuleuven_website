
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Tickets from './pages/Tickets';
import Join from './pages/Join';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import SpeakerApplication from './pages/SpeakerApplication';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import About from './pages/About';
import RecruitmentForm from './pages/RecruitmentForm';
import DepartmentRoles from './pages/DepartmentRoles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/join" element={<Join />} />
            <Route path="/join/marketing" element={<DepartmentRoles />} />
            <Route path="/apply" element={<RecruitmentForm />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/apply-speaker" element={<SpeakerApplication />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
