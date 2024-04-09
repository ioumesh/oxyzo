import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import FooterInfo from "./components/footer/FooterInfo";
import Footer from "./components/footer/Footer";
import "./layout.scss";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      <div className="layout-section">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="section-layout">
        <Footer />
        <FooterInfo />
      </div>
    </>
  );
}

export default App;
