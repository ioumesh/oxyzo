import FaqSection from "./components/faqsection/FaqSection";
import Navbar from "./components/navbar/Navbar";
import TermLoan from "./components/termloan/TermLoan";
import WorkingSection from "./components/workingsection/WorkingSection";
import Footer from "./components/footer/Footer";
import "./layout.scss";
import { faqs } from "./data/constant";
import FooterInfo from "./components/footer/FooterInfo";
import WhyOxyzo from "./components/whysection/WhyOxyzo";
function App() {
  return (
    <div className="layout">
      <Navbar />
      <div className="section-layout">
        <WorkingSection />
        <TermLoan />
        <WhyOxyzo/>
        <FaqSection faqs={faqs} />
        <Footer />
        <FooterInfo />
      </div>
    </div>
  );
}

export default App;
