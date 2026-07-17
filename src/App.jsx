import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Region from "./pages/Region";
import Place from "./pages/Place";
import Secret from "./pages/Secret";
import Forgotten from "./pages/Forgotten";
import About from "./pages/About";
import Contact from "./pages/Contact";

/* App — RTL site shell + React Router routes.
   Routes:
     /                  Home
     /discover          اكتشف السر (map)
     /region/:regionId  Region places
     /place/:placeId    Place details
     /secret/:placeId   Secret page
     /forgotten         منسيات
     /about             About Us
     /contact           Contact Us
*/
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/region/:regionId" element={<Region />} />
          <Route path="/place/:placeId" element={<Place />} />
          <Route path="/secret/:placeId" element={<Secret />} />
          <Route path="/forgotten" element={<Forgotten />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
