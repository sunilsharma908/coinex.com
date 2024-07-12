



// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import coinexLogo from '../Assests/Images/coinex.jpeg';
// import withoubg from '../Assests/Images/withoubg-removebg-preview.png';



// const Footer = () => {
//   return (
//     <footer className="footer">
    
//       <Container>
//       <div className="footer-title">
//         <img src={withoubg} alt="" className='img-fluid' />
//       </div>
//         <Row>
//           <Col md={2} className="footer-section">
//             <h5 className="footer-heading">Corporate</h5>
//             <ul className="footer-list">
//               <li className="footer-item">About Us</li>
//               <li className="footer-item">Join Us</li>
//               <li className="footer-item">Media Kit</li>
//               <li className="footer-item">Affiliate Program</li>
//               <li className="footer-item">Whistleblower Contact</li>
//               <li className="footer-item">Blog</li>
//               <li className="footer-item">News & Announcements</li>
//               <li className="footer-item">Referral</li>
//               <li className="footer-item">Security</li>
//             </ul>
//           </Col>
//           <Col md={2} className="footer-section">
//             <h5 className="footer-heading">Products</h5>
//             <ul className="footer-list">
//               <li className="footer-item">Spot Trading</li>
//               <li className="footer-item">Margin Trading</li>
//               <li className="footer-item">Convert</li>
//               <li className="footer-item">Futures Trading</li>
//               <li className="footer-item">KuCoin Earn</li>
//               <li className="footer-item">Crypto Lending</li>
//               <li className="footer-item">Trading Bot</li>
//               <li className="footer-item">Converter</li>
//               <li className="footer-item">KuCoin Learn</li>
//             </ul>
//           </Col>
//           <Col md={2} className="footer-section">
//             <h5 className="footer-heading">Service</h5>
//             <ul className="footer-list">
//               <li className="footer-item">Help Center</li>
//               <li className="footer-item">Submit a Ticket</li>
//               <li className="footer-item">Fees & VIP</li>
//               <li className="footer-item">Ticket Verification</li>
//               <li className="footer-item">Technical Support</li>
//               <li className="footer-item">Bug Bounty</li>
//               <li className="footer-item">Beginner’s Guide</li>
//               <li className="footer-item">Official Verification Center</li>
//               <li className="footer-item">PoR (Proof of Reserves)</li>
//               <li className="footer-item">Sitemap</li>
//               <li className="footer-item">Delistings</li>
//             </ul>
//           </Col>
//           <Col md={2} className="footer-section">
//             <h5 className="footer-heading">Business</h5>
//             <ul className="footer-list">
//               <li className="footer-item">Token Listing</li>
//               <li className="footer-item">KuCoin Labs</li>
//               <li className="footer-item">KuCoin Ventures</li>
//               <li className="footer-item">Spotlight Application</li>
//               <li className="footer-item">P2P Merchant Application</li>
//               <li className="footer-item">Safeguard Program</li>
//             </ul>
//           </Col>
//           <Col md={2} className="footer-section">
//             <h5 className="footer-heading">Legal</h5>
//             <ul className="footer-list">
//               <li className="footer-item">Terms of Use</li>
//               <li className="footer-item">Privacy Policy</li>
//               <li className="footer-item">Risk Disclosure Statement</li>
//               <li className="footer-item">AML & CFT</li>
//               <li className="footer-item">Special Treatment</li>
//               <li className="footer-item">Law Enforcement Requests</li>
//             </ul>
//           </Col>
//           <Col md={2} className="footer-section">
//             <h5 className="footer-heading">Crypto Prices</h5>
//             <ul className="footer-list">
//               <li className="footer-item">Bitcoin (BTC) Price</li>
//               <li className="footer-item">Ethereum (ETH) Price</li>
//               <li className="footer-item">Ripple (XRP) Price</li>
//               <li className="footer-item">KuCoin Token (KCS) Price</li>
//               <li className="footer-item">More Prices</li>
//             </ul>
//           </Col>
//         </Row>
//         <Row className="pt-4">
//           <Col md={2} className="footer-section">
//             <h5 className="footer-heading">Learn</h5>
//             <ul className="footer-list">
//               <li className="footer-item">Buy Bitcoin</li>
//               <li className="footer-item">Buy Ethereum</li>
//               <li className="footer-item">Buy Solana</li>
//               <li className="footer-item">Buy Pepe</li>
//               <li className="footer-item">Buy Ondo</li>
//               <li className="footer-item">Buy XRP</li>
//               <li className="footer-item">Buy Monero</li>
//               <li className="footer-item">Buy Notcoin</li>
//               <li className="footer-item">Buy dogwhat</li>
//               <li className="footer-item">Buy NEAR Protocol</li>
//             </ul>
//           </Col>
//           <Col md={2} className="footer-section">
//             <h5 className="footer-heading">Developer</h5>
//             <ul className="footer-list">
//               <li className="footer-item">API Documentation</li>
//               <li className="footer-item">SDK</li>
//               <li className="footer-item">Download Historical Data</li>
//             </ul>
//           </Col>
//           <Col md={2} className="footer-section">
//             <h5 className="footer-heading">App Download</h5>
//             <ul className="footer-list">
//               <li className="footer-item">Android Download</li>
//               <li className="footer-item">iOS Download</li>
//             </ul>
//           </Col>
//           <Col md={2} className="footer-section">
//             <h5 className="footer-heading">Community</h5>
//             <ul className="footer-list">
//               <li className="footer-item"><i className="fab fa-twitter"></i></li>
//               <li className="footer-item"><i className="fab fa-telegram"></i></li>
//               <li className="footer-item"><i className="fab fa-youtube"></i></li>
//               <li className="footer-item"><i className="fab fa-reddit"></i></li>
//               <li className="footer-item"><i className="fab fa-linkedin"></i></li>
//               <li className="footer-item"><i className="fab fa-instagram"></i></li>
//               <li className="footer-item"><i className="fab fa-discord"></i></li>
//             </ul>
//           </Col>
//           <Col md={2} className="footer-section">
//             <h5 className="footer-heading">Partners</h5>
//             <ul className="footer-list">
//               <li className="footer-item">Halo Wallet</li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import coinexLogo from '../Assests/Images/coinex.jpeg';
import withoubg from '../Assests/Images/withoubg-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-title">
          <img src={withoubg} alt="" className='img-fluid' />
        </div>
        <Row>
          <Col md={2} className="footer-section">
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
          <Col md={2} className="footer-section">
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
          <Col md={2} className="footer-section">
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
          <Col md={2} className="footer-section">
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
          <Col md={2} className="footer-section">
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
          <Col md={2} className="footer-section">
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
          <Col md={2} className="footer-section">
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
          <Col md={2} className="footer-section">
            <h5 className="footer-heading">Developer</h5>
            <ul className="footer-list">
              <li className="footer-item"><Link to="/api-documentation">API Documentation</Link></li>
              <li className="footer-item"><Link to="/sdk">SDK</Link></li>
              <li className="footer-item"><Link to="/download-historical-data">Download Historical Data</Link></li>
            </ul>
          </Col>
          <Col md={2} className="footer-section">
            <h5 className="footer-heading">App Download</h5>
            <ul className="footer-list">
              <li className="footer-item"><Link to="/android-download">Android Download</Link></li>
              <li className="footer-item"><Link to="/ios-download">iOS Download</Link></li>
            </ul>
          </Col>
          <Col md={2} className="footer-section">
            <h5 className="footer-heading">Community</h5>
            <ul className="footer-list">
              <li className="footer-item"><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
              <li className="footer-item"><a href="https://telegram.org"><i className="fab fa-telegram"></i></a></li>
              <li className="footer-item"><a href="https://youtube.com"><i className="fab fa-youtube"></i></a></li>
              <li className="footer-item"><a href="https://reddit.com"><i className="fab fa-reddit"></i></a></li>
              <li className="footer-item"><a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a></li>
              <li className="footer-item"><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
              <li className="footer-item"><a href="https://discord.com"><i className="fab fa-discord"></i></a></li>
            </ul>
          </Col>
          <Col md={2} className="footer-section">
            <h5 className="footer-heading">Partners</h5>
            <ul className="footer-list">
              <li className="footer-item">Halo Wallet</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
