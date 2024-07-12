import React from 'react';
import logo1 from '../Assests/Images/logo1.png';
import logo2 from '../Assests/Images/logo2.png';
import logo3 from '../Assests/Images/logo3.png';
import logo4 from '../Assests/Images/logo4.png';
import logo5 from '../Assests/Images/logo5.png';
import logo6 from '../Assests/Images/logo6.png';
import logo7 from '../Assests/Images/logo7.png';
import logo8 from '../Assests/Images/logo8.png';


const ImageMarquee = () => {
  return (
    <div className="marquee-container">
      <ul className="logo-list">
        <li className="logo-item">
          <img src={logo1} alt="Logo 1" />
        </li>
        <li className="logo-item">
          <img src={logo2} alt="Logo 2" />
        </li>
        <li className="logo-item">
          <img src={logo3} alt="Logo 3" />
        </li>
        <li className="logo-item">
          <img src={logo4} alt="Logo 1" />
        </li>
        <li className="logo-item">
          <img src={logo5} alt="Logo 2" />
        </li>
        <li className="logo-item">
          <img src={logo6} alt="Logo 3" />
        </li>
        <li className="logo-item">
          <img src={logo7} alt="Logo 1" />
        </li>
        <li className="logo-item">
          <img src={logo8} alt="Logo 2" />
        </li>
        <li className="logo-item">
          <img src={logo1} alt="Logo 1" />
        </li>
        <li className="logo-item">
          <img src={logo2} alt="Logo 2" />
        </li>
        <li className="logo-item">
          <img src={logo3} alt="Logo 3" />
        </li>
        <li className="logo-item">
          <img src={logo4} alt="Logo 1" />
        </li>
        <li className="logo-item">
          <img src={logo5} alt="Logo 2" />
        </li>
        <li className="logo-item">
          <img src={logo6} alt="Logo 3" />
        </li>
        <li className="logo-item">
          <img src={logo7} alt="Logo 1" />
        </li>
        <li className="logo-item">
          <img src={logo8} alt="Logo 2" />
        </li>
   
        {/* Add more images as needed */}
      </ul>
    </div>
  );
};

export default ImageMarquee;
