import FaqSection from "./components/faqsection/FaqSection";
import Navbar from "./components/navbar/Navbar";
import TermLoan from "./components/termloan/TermLoan";
import WorkingSection from "./components/workingsection/WorkingSection";
import Footer from "./components/footer/Footer";
import "./layout.scss";
import { faqs } from "./data/constant";
function App() {

  return (
    <div className="layout">
      <Navbar />
      <div className="section-layout">
        <WorkingSection />
        <TermLoan />
        <FaqSection faqs={faqs} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
