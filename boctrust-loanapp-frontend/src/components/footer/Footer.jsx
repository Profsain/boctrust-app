import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { LinkedIn } from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid Footer">
      <div className="row FooterTop">
        <div className="col-md-3 col-sm-12">
          <h6 className="FooterHeadline">Quick Links</h6>
          <ul>
            <li>
              <Link className="Link" to="/">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="Link" to="/">
                Terms and Condition
              </Link>
            </li>
          </ul>

          <h6 className="FooterHeadline">About</h6>
          <p>
            BOCTRUST MICROFINANCE BANK is a financial institution licensed by
            Central Bank of Nigeria to gives social and economic Support to the
            lower middle class, working class and the economically active poor.
          </p>
        </div>
        <div className="col-md-6 col-sm-12 Link CompanyLinks">
          <h6 className="FooterHeadline">Company Links</h6>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>
                  <Link className="Link" to="/about">
                    About App
                  </Link>
                </li>
                <li>
                  <Link className="Link" to="/about">
                    Team
                  </Link>
                </li>
                <li>
                  <Link className="Link" to="/loan">
                    Loans
                  </Link>
                </li>
                <li>
                  <Link className="Link" to="/blog">
                    News & Events
                  </Link>
                </li>
                <li>
                  <Link className="Link" to="/support">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="Link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  <Link className="Link" to="/product">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="Link" to="/#">
                    Account Opening
                  </Link>
                </li>
                <li>
                  <Link className="Link" to="/#">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="Link" to="/">
                    Internet Banking
                  </Link>
                </li>
                <li>
                  <Link className="Link" to="/#">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link className="Link" to="/support">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12">
          <h6 className="FooterHeadline">Contact Info</h6>
          <p>
            Address:
            <br /> 1st floor, 26 Moloney street, Onikan.
          </p>
          <p>
            Phone:
            <br />
            08177773196 <br />
            08076710000
          </p>
          <p>
            Email:
            <br /> enquiry@boctrustmfb.com
          </p>
          <div>
            <p>Connect On Social Media</p>
            <div className="SocialContainer">
            <div className="SocialMedia">
              <a
                href="https://www.facebook.com/pages/Boctrust%20Microfinance%20Bank/1188460931185967/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
            </div>
            <div className="SocialMedia">
              <a
                href="https://www.twitter.com/boctrustmfb"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
              </a>
            </div>
            <div className="SocialMedia">
              <a
                href="https://www.linkedin.com/company/boctrustmfb/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn />
              </a>
              </div>
              </div>
          </div>
        </div>
      </div>
      <div className="FooterBottom row">
        <p>
          Copyright BOCTRUST Microfinance Bank Limited All rights reserved 2023.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
