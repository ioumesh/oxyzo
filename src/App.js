import FaqSection from "./components/faqsection/FaqSection";
import Navbar from "./components/navbar/Navbar";
import TermLoan from "./components/termloan/TermLoan";
import WorkingSection from "./components/workingsection/WorkingSection";
import "./layout.scss";

function App() {
  const faqs = [
    {
      question: "What is working capital ?",
      answer:
        "Working capital is a term used to describe a company's or organization's ability to finance its day-to-day operations. It can be thought of as a scale for evaluating a company's overall efficiency. To calculate a firm's or organization's working capital, subtract the current liabilities from the total current assets. Positive working capital indicates that a company's assets are sufficient to cover its short-term liabilities.",
    },
    {
      question: "What is a term loan ?",
      answer:
        "Term loan is a business financing solution available for SMEs that can be repaid in regular payments over a predefined period to make long term capital investments like plant and machinery and other business expansion activities.",
    },
    {
      question: "How is term loan different from working capital finance ?",
      answer:
        "A working capital loan helps SMEs meet short-term financial needs and solve cash crunch issues.Working capital loan is repaid in a shorter tenure. Term loans are opted by SMEs to meet long-term financial needs and often come with longer repayment tenure.The cost of credit is relatively higher for a working capital loan.",
    },
    {
      question: "What is the purpose of working capital finance ?",
      answer:
        "A working capital loan is primarily used by SMEs to plug in the payment gap with their suppliers as well as customers. It serves the day-to-day business needs of SMEs and helps them meet short-term planned and unplanned business expenses.",
    },
    {
      question: "Who can avail business financing products ?",
      answer:
        "Business owners,Proprietorship firms,Registered Partnership firms,Limited Liability Partnership,Private Limited Companies, Public Limited Companies with a turnover and business vintage of atleast 3 crores and 3 years respectively.",
    },
    {
      question:
        "How is the interest rate charged on working capital finance and term loan ?",
      answer:
        "The interest rate on the working capital limit is charged only on the utilized amount for its duration of use while the interest rate on the term loan is charged on the sanctioned amount and the loan tenure.",
    },
    {
      question: "How soon can a business get SME finance ?",
      answer:
        "SMEs can get loans for business within 48 hours of application submission.",
    },
    {
      question: "How can a SME repay ?",
      answer:
        "An SME repays online via different payment methods according to repayment structure.",
    },
  ];
  return (
    <div className="layout">
      <Navbar />
      <div className="section-layout">
        <WorkingSection />
        <TermLoan />
        <FaqSection faqs={faqs} />
      </div>
    </div>
  );
}

export default App;
