import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/AboutUs";
import Team from "./pages/Team";
import MachinePage from "./pages/Machines";
import Contact from "./pages/ContactUs";
import Hydro from "./pages/Hydro"; // ✅ renamed for clarity

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/machine" element={<MachinePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hydro" element={<Hydro />} /> {/* ✅ Correct route */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
