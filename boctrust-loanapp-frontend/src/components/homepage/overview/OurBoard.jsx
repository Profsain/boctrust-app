import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Overview.css";

const OurBoard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="VisionLeft col-md-6 col-sm-12">
          <h3>Meet Our Board</h3>
          <div>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "53%", flexShrink: 0 }}>
                  Isaac OROLUGBAGBE
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  - Chairman
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Isaac Orolugbagbe (FCA) is the Chairman, Board of Directors,
                  BOCTRUST Microfinance Bank Limited, Nigeria’s reputable Bank
                  for the active poor. He is also the Chief Executive Officer of
                  Isaac Development Company, a leading company with expertise in
                  Management, Strategy, Leadership & Organization Development
                  and Business Incubation Consultancy. He sits on the Board of
                  Sifax Group Nigeria a company with interests in Ports & Cargo,
                  Aviation Handling, Shipping, Haulage, Oil & Gas and Marine.
                  His other Directorship/Board appointments include Red Star
                  Express Plc., Beta Computers Limited; Western Cape Wines
                  Limited and Obafemi Awolowo University Advancement Board and
                  was on the Board of Thomas Wyatt Nigeria Plc., Isaac is a
                  graduate of Chemistry from University of Ife (now Obafemi
                  Awolowo University), Nigeria; Fellow of the Institute of
                  Chartered Accountants of Nigeria (FCA), Fellow, Institute of
                  Directors (FIoD), an Associate of the Nigerian Institute of
                  management (ANIMN) & Chartered Institute of Taxation of
                  Nigeria (ACITN) and a Member of the Society for Corporate
                  Governance Nigeria (SCGN). He is an alumna of the Master of
                  Business Leadership (MBL), University of South Africa, South
                  Africa, a Business Strategy Instructor of the Society for
                  Corporate Governance Lagos Business School and an Adjunct
                  Faculty (Business Strategy/Governance) of Strathmore Business
                  School, Nairobi Kenya. An erudite Executive trained in FedEx
                  EMEA Brussels, Wits Business School, Johannesburg and Lagos
                  Business School amongst others. Over the course of his
                  sterling career, he has garnered diverse expertise in
                  Accounting and Internal Controls, Auditing & Taxation
                  Services, Treasury and Financial Management, Corporate
                  Governance, Corporate Strategy Development and Implementation,
                  Corporate Finance and Business/Financial Advisory. He
                  transformed Red Star Express Plc (FEDEX) from a revenue of
                  N180m to N3b between 1997 and 2007 and eventual listing of the
                  company on the floor of the Nigeria Stock Exchange (NSE) as
                  Managing Director/CEO. He was the MD/CEO Skyway Aviation
                  Handling Company Limited (SAHCOL) January 2010 to December,
                  2011 and Executive Director, Projects & Group Services SIFAX
                  Group Nigeria between January 2012 and October, 2013 He is
                  happily married with four wonderful children.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "53%", flexShrink: 0 }}>
                  Mr Segun Odusanya
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  - Director
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Has over 27years(with twelve at senior executive management
                  levels) experience in banking (Corporate and Retail),
                  Corporate Finance, SME, etc, in Nigeria and Africa. Previously
                  served as Managing Director/Regional Head of Commercial
                  Clients for Africa at Standard Chartered Bank Africa -
                  covering countries in West, East and Southern Africa. Prior to
                  that, served as Deputy CEO at FCMB, and Regional Director
                  Client Relationships at Standard Chartered Bank East Africa -
                  covering Kenya, Uganda and Tanzania. He also served at various
                  middle and senior level positions in Standard Chartered Bank
                  Nigeria, Zenith Bank and erstwhile Chartered Bank Nigeria
                  Limited Segun was a University of Lagos Scholar, graduating
                  with both Bachelors and Masters of Science degrees in Banking
                  and Finance from the University. He has attended various
                  leadership and specialized courses in top notch universities
                  such as HARVARD BUSINESS SCHOOL, OXFORD UNIVERSITY (SAID
                  BUSINESS SCHOOL) AND LONDON BUSINESS SCHOOL.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "53%", flexShrink: 0 }}>
                  Oludotun RANSOME-KUTI
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  - Director
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Oludotun Ransome-Kuti is a Doctor of Veterinary Medicine
                  graduate of Ahmadu Bello University Zaria with more than three
                  decades in veterinary services and animal hospitality. He was
                  Head, veterinary Services (Dog section) of the Nigeria Police
                  Force Obalende, Lagos and was with Daily Veterinary Ambulatory
                  Services before establishing Ransom-Kuti Veterinary
                  Consultants Limited, a Veterinary Clinic, as the Managing
                  Director/Chief Executive. He is a great communicator with
                  analytical and inter-personal skills and loves swimming,
                  football and music.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "53%", flexShrink: 0 }}>
                  Bukar Mamman Zargana MBA
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  - Director
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Mr Zargana is the current Managing Director of Mainstreet Bank
                  Capital Limited with over 19 years investment banking
                  experience working with Afribank Capital Limited (later
                  Mainstreet Bank capital). He is a Director at Platform Capital
                  Limited, Multiverse Mining and Exploration Limited. Currently
                  an appointee of the Federal government as a Board Member of
                  the Investments and securities Tribunal, the tribunal which
                  oversees dispute resolution of the Nigerian Capital Market. He
                  is a graduate of Accountancy from the University of Maiduguri
                  and holds an MBA from Lagos state University.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "53%", flexShrink: 0 }}>
                  Adekunle Olushola Alonge FCA
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  - Director
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Mr Alonge is the current Managing Director of Sonora Capital
                  and Investment Limited, Lagos. He has over 23 years banking
                  experience spanning Treasury, Operations and Internal Audit He
                  worked with Oceanic Bank Nigeria, Wells Fargo Bank, KPMG as an
                  auditor and JP Morgan Chase (all in the United States). He is
                  a graduate of Accounting from Obafemi Awolowo University, ile
                  ife, holds MSc in Finance from Texas Tech University, Texas
                  USA. He is a Chartered Accountant.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "53%", flexShrink: 0 }}>
                  FEMI ALONGE , MBA, HCIB
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  - MD/CEO
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Mr Alonge, a chartered banker, is the current MD/CEO and
                  oversees the day-to-day management of the bank. with over 20
                  years local and international banking experience spanning
                  Retail, Commercial and Corporate Banking. Worked with Guaranty
                  Trust Bank, Lead Bank and Standard Chartered Bank where he
                  spent over 16 years and held various positions such as Senior
                  Credit Analyst, Area Manager. Head, Asset Backed Financing
                  West Africa, Executive Director Corporate and Institutional
                  Banking Tanzania as an International staff. In 2017, he was
                  appointed CEO Africa Northstar Finance Services Mauritius. He
                  is an Engineering graduate from Obafemi Awolowo University and
                  an MBA graduate from the University of Bangor U.K. He is a
                  member of Chartered institute of Bankers Nigeria and an
                  affiliate member of international compliance association
                  London UK.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div className="VisionRight col-md-6 col-sm-12">
          <img
            className="TopImg"
            src="images/boctrust-staff1.avif"
            alt="bocstrust-microfinance-staff"
          />
        </div>
      </div>
    </div>
  );
};

export default OurBoard;
