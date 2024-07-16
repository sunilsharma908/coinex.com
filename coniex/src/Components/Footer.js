import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import coinexLogo from '../Assests/Images/coinex.jpeg';
import withoubg from '../Assests/Images/withoubg-removebg-preview.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import icon1 from '../Assests/Images/icon1.svg';
import icon2 from '../Assests/Images/icon2.svg';
import icon3 from '../Assests/Images/icon3.svg';
import icon4 from '../Assests/Images/icon4.svg';
import icon5 from '../Assests/Images/icon5.svg';
import icon6 from '../Assests/Images/icon6.svg';
import icon7 from '../Assests/Images/icon7.svg';
import icon8 from '../Assests/Images/icon8.svg';
import icon9 from '../Assests/Images/icon9.svg';
import { siteName, siteLogo } from '../Config/Config';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-title d-flex">
          <img src={withoubg} alt="" className='img-fluid' />
          <p className='site-name'>{siteName}</p>
        </div>
        <Row>
          <Col xl={2} lg={3} md={4} sm={6} className="footer-section">
            <h5 className="footer-heading">Corporate</h5>
            <ul className="footer-list">
              <li className="footer-item"><Link to="/about-us">About Us</Link></li>
              <li className="footer-item"><Link to="/join-us">Join Us</Link></li>
              <li className="footer-item"><Link to="/media-kit">Media Kit</Link></li>
              <li className="footer-item"><Link to="/affiliate-program">Affiliate Program</Link></li>
              <li className="footer-item"><Link to="/whistleblower-contact">Whistleblower Contact</Link></li>
              <li className="footer-item"><Link to="/blog">Blog</Link></li>
              <li className="footer-item"><Link to="/news-announcements">News & Announcements</Link></li>
              <li className="footer-item"><Link to="/referral">Referral</Link></li>
              <li className="footer-item"><Link to="/security">Security</Link></li>
            </ul>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} className="footer-section">
            <h5 className="footer-heading">Products</h5>
            <ul className="footer-list">
              <li className="footer-item"><Link to="/spot-trading">Spot Trading</Link></li>
              <li className="footer-item"><Link to="/margin-trading">Margin Trading</Link></li>
              <li className="footer-item"><Link to="/convert">Convert</Link></li>
              <li className="footer-item"><Link to="/futures-trading">Futures Trading</Link></li>
              <li className="footer-item"><Link to="/kucoin-earn">KuCoin Earn</Link></li>
              <li className="footer-item"><Link to="/crypto-lending">Crypto Lending</Link></li>
              <li className="footer-item"><Link to="/trading-bot">Trading Bot</Link></li>
              <li className="footer-item"><Link to="/converter">Converter</Link></li>
              <li className="footer-item"><Link to="/kucoin-learn">KuCoin Learn</Link></li>
            </ul>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} className="footer-section">
            <h5 className="footer-heading">Service</h5>
            <ul className="footer-list">
              <li className="footer-item"><Link to="/help-center">Help Center</Link></li>
              <li className="footer-item"><Link to="/submit-ticket">Submit a Ticket</Link></li>
              <li className="footer-item"><Link to="/fees-vip">Fees & VIP</Link></li>
              <li className="footer-item"><Link to="/ticket-verification">Ticket Verification</Link></li>
              <li className="footer-item"><Link to="/technical-support">Technical Support</Link></li>
              <li className="footer-item"><Link to="/bug-bounty">Bug Bounty</Link></li>
              <li className="footer-item"><Link to="/beginners-guide">Beginner’s Guide</Link></li>
              <li className="footer-item"><Link to="/official-verification-center">Official Verification Center</Link></li>
              <li className="footer-item"><Link to="/por-proof-of-reserves">PoR (Proof of Reserves)</Link></li>
              <li className="footer-item"><Link to="/sitemap">Sitemap</Link></li>
              <li className="footer-item"><Link to="/delistings">Delistings</Link></li>
            </ul>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} className="footer-section">
            <h5 className="footer-heading">Business</h5>
            <ul className="footer-list">
              <li className="footer-item"><Link to="/token-listing">Token Listing</Link></li>
              <li className="footer-item"><Link to="/kucoin-labs">KuCoin Labs</Link></li>
              <li className="footer-item"><Link to="/kucoin-ventures">KuCoin Ventures</Link></li>
              <li className="footer-item"><Link to="/spotlight-application">Spotlight Application</Link></li>
              <li className="footer-item"><Link to="/p2p-merchant-application">P2P Merchant Application</Link></li>
              <li className="footer-item"><Link to="/safeguard-program">Safeguard Program</Link></li>
            </ul>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} className="footer-section">
            <h5 className="footer-heading">Legal</h5>
            <ul className="footer-list">
              <li className="footer-item"><Link to="/terms-of-use">Terms of Use</Link></li>
              <li className="footer-item"><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li className="footer-item"><Link to="/risk-disclosure-statement">Risk Disclosure Statement</Link></li>
              <li className="footer-item"><Link to="/aml-cft">AML & CFT</Link></li>
              <li className="footer-item"><Link to="/special-treatment">Special Treatment</Link></li>
              <li className="footer-item"><Link to="/law-enforcement-requests">Law Enforcement Requests</Link></li>
            </ul>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} className="footer-section">
            <h5 className="footer-heading">Crypto Prices</h5>
            <ul className="footer-list">
              <li className="footer-item"><Link to="/bitcoin-price">Bitcoin (BTC) Price</Link></li>
              <li className="footer-item"><Link to="/ethereum-price">Ethereum (ETH) Price</Link></li>
              <li className="footer-item"><Link to="/ripple-price">Ripple (XRP) Price</Link></li>
              <li className="footer-item"><Link to="/kucoin-token-price">KuCoin Token (KCS) Price</Link></li>
              <li className="footer-item"><Link to="/more-prices">More Prices</Link></li>
            </ul>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col xl={2} lg={3} md={4} sm={6} className="footer-section">
            <h5 className="footer-heading">Learn</h5>
            <ul className="footer-list">
              <li className="footer-item"><Link to="/buy-bitcoin">Buy Bitcoin</Link></li>
              <li className="footer-item"><Link to="/buy-ethereum">Buy Ethereum</Link></li>
              <li className="footer-item"><Link to="/buy-solana">Buy Solana</Link></li>
              <li className="footer-item"><Link to="/buy-pepe">Buy Pepe</Link></li>
              <li className="footer-item"><Link to="/buy-ondo">Buy Ondo</Link></li>
              <li className="footer-item"><Link to="/buy-xrp">Buy XRP</Link></li>
              <li className="footer-item"><Link to="/buy-monero">Buy Monero</Link></li>
              <li className="footer-item"><Link to="/buy-notcoin">Buy Notcoin</Link></li>
              <li className="footer-item"><Link to="/buy-dogwhat">Buy dogwhat</Link></li>
              <li className="footer-item"><Link to="/buy-near-protocol">Buy NEAR Protocol</Link></li>
            </ul>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} className="footer-section">
            <h5 className="footer-heading">Developer</h5>
            <ul className="footer-list">
              <li className="footer-item"><Link to="/api-documentation">API Documentation</Link></li>
              <li className="footer-item"><Link to="/sdk">SDK</Link></li>
              <li className="footer-item"><Link to="/download-historical-data">Download Historical Data</Link></li>
            </ul>
          </Col>
          <Col xl={2} lg={3} md={4} sm={6} className="footer-section">
            <h5 className="footer-heading">App Download</h5>
            <ul className="footer-list">
              <li className="footer-item"><Link to="/android-download">Android Download</Link></li>
              <li className="footer-item"><Link to="/ios-download">iOS Download</Link></li>
            </ul>
          </Col>

          <Col xl={2} lg={3} md={4} sm={6} className="footer-section">
            <h5 className="footer-heading">Community</h5>
            <div className="community-main">
              <div className="icon-row">
                <img src={icon1} alt="icon1" className='footer-icon' />
                <img src={icon2} alt="icon2" className='footer-icon' />
                <img src={icon3} alt="icon3" className='footer-icon' />
                <img src={icon4} alt="icon4" className='footer-icon' />
                <img src={icon5} alt="icon5" className='footer-icon' />
                <img src={icon6} alt="icon6" className='footer-icon' />
                <img src={icon7} alt="icon7" className='footer-icon' />
                <img src={icon8} alt="icon8" className='footer-icon' />
                <img src={icon9} alt="icon9" className='footer-icon' />
              </div>
            </div>
          </Col>

        </Row>
        <Row>
          <div className="coppyright">
            <Row>
              <Col lg={6}>
                <p>CopyRight © 2017 - 2024 {siteName}.com. All Rights Reserved.</p>
              </Col>
              <Col lg={6}>
                <div className="coppy-des">
                  <p>
                    24h Volume1,590,996,269USDT
                  </p>

                </div>

              </Col>

            </Row>

          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
