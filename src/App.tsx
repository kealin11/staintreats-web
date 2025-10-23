import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop"; // import ScrollToTop

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/AboutUs";
import Team from "./pages/Team";
import MachinePage from "./pages/Machines";
import Contact from "./pages/ContactUs";
import Strokes from "./pages/Strokes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* This ensures every route change scrolls to top */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/machine" element={<MachinePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/strokes" element={<Strokes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
