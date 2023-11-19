import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/homepage/Home";
import About from "./components/aboutpage/About";
import OurBoardPage from "./components/aboutpage/OurBoardPage";
import Contact from "./components/contactpage/Contact";
import Blogs from "./components/blogpage/Blogs";
import Blog from "./components/blogpage/Blog";
import Loan from "./components/loanapplication/Loan";
import Support from "./components/supportpage/Support";
import Career from "./components/careerpage/Career";
import Dashboard from "./components/dashboard/Dashboard";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";

// our product
import RegularSavings from "./components/ourproductpage/RegularSavings";
import TargetSavings from "./components/ourproductpage/TargetSavings";
import AjoPlusAccount from "./components/ourproductpage/AjoPlusAccount";
import FixedDeposit from "./components/ourproductpage/FixedDeposit";
import InvestmentNote from "./components/ourproductpage/InvestmentNote";
import SalaryAdvance from "./components/ourproductpage/SalaryAdvance";
import PersonalLoan from "./components/ourproductpage/PersonalLoan";
import SmeLoan from "./components/ourproductpage/SmeLoan";
import AssetBackedFinancing from "./components/ourproductpage/AssetBackedFinancing";
import SmallBusinessAdvisory from "./components/ourproductpage/SmallBusinessAdvisory";
import MicroInsuranceAdvisory from "./components/ourproductpage/MicroInsuranceAdvisory";
import FinancialAdvisory from "./components/ourproductpage/FinancialAdvisory";

// terms and conditions
import LoanTerms from "./components/terms&condition/LoanTerms";
import PrivacyPolicy from "./components/terms&condition/PrivacyPolicy";
import TermsCondition from "./components/terms&condition/TermsCondition";
import TopNav from "./components/navigation/TopNav";

function App() {
  return (
      <>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<OurBoardPage />} />
          <Route path="/regular-savings" element={<RegularSavings />} />
          <Route path="/target-savings" element={<TargetSavings />} />
          <Route path="/ajo-plus-account" element={<AjoPlusAccount />} />
          <Route path="/fixed-investment" element={<FixedDeposit />} />
          <Route path="/investment-note" element={<InvestmentNote />} />
          <Route path="/salary-advance" element={<SalaryAdvance />} />
          <Route path="/personal-loan" element={<PersonalLoan />} />
          <Route path="/sme-loan" element={<SmeLoan />} />
          <Route
            path="/asset-backed-financing"
            element={<AssetBackedFinancing />}
          />
          <Route
            path="/small-business-advisory"
            element={<SmallBusinessAdvisory />}
          />
          <Route
            path="/micro-insurance-advisory"
            element={<MicroInsuranceAdvisory />}
          />
          <Route path="/financial-advisory" element={<FinancialAdvisory />} />

          <Route path="/loan" element={<Loan />} />
          <Route path="/support" element={<Support />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:title" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/career" element={<Career />} />

          {/* terms and conditions */}
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/loanterms" element={<LoanTerms />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </>
  );
}

export default App;
