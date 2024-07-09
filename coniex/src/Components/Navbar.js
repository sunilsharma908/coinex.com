


import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import coinexLogo from '../Assests/Images/coinex.jpeg'
import DownloadIcon from '@mui/icons-material/Download';
import PublicIcon from '@mui/icons-material/Public';
const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (dropdown) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  const handleToggleClick = () => {
    setOpenDropdown(null);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isToggleClicked, setIsToggleClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Container fluid>
        <Navbar expand="lg" className={`navbar mb-3 navbar-expand-lg  fixed-top ${scrollPosition === 0 && !isToggleClicked ? 'navbar-transparent' : 'navbar-black'}`}>
          <Navbar.Brand href="#" className='nav-brand-logo'>
            <img src={coinexLogo } alt="" className='coinex-logo-img' />
          </Navbar.Brand>
          <div className="main-div-for-flex">
            <div className="LHS">
              <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    {/* <img src={coinexLogo} alt="" /> */}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='offcanvas-custom-body'>
                  <Nav className="flex-grow-1 pe-3">
                    <NavDropdown
                      title="Buy Cropto"
                      show={openDropdown === 'Buy Cropto'}
                      onMouseEnter={() => handleMouseEnter('Buy Cropto')}
                      onMouseLeave={handleMouseLeave}
                      className='for-crypto-title'
                    >
                      <NavDropdown.Item to="/buy-cropto1" as={NavLink}>Buy Cropto 1</NavDropdown.Item>
                      <NavDropdown.Item to="/buy-cropto2" as={NavLink}>Buy Cropto 2</NavDropdown.Item>
                      <NavDropdown.Item to="/buy-cropto3" as={NavLink}>Buy Cropto 3</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Markets"
                      show={openDropdown === 'Markets'}
                      onMouseEnter={() => handleMouseEnter('Markets')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <NavDropdown.Item to="/markets1" as={NavLink}>Markets 1</NavDropdown.Item>
                      <NavDropdown.Item to="/markets2" as={NavLink}>Markets 2</NavDropdown.Item>
                      <NavDropdown.Item to="/markets3" as={NavLink}>Markets 3</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Trades"
                      show={openDropdown === 'Trades'}
                      onMouseEnter={() => handleMouseEnter('Trades')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <NavDropdown.Item to="/trades1" as={NavLink}>Trades 1</NavDropdown.Item>
                      <NavDropdown.Item to="/trades2" as={NavLink}>Trades 2</NavDropdown.Item>
                      <NavDropdown.Item to="/trades3" as={NavLink}>Trades 3</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Derivative"
                      show={openDropdown === 'Derivative'}
                      onMouseEnter={() => handleMouseEnter('Derivative')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <NavDropdown.Item to="/derivative1" as={NavLink}>Derivative 1</NavDropdown.Item>
                      <NavDropdown.Item to="/derivative2" as={NavLink}>Derivative 2</NavDropdown.Item>
                      <NavDropdown.Item to="/derivative3" as={NavLink}>Derivative 3</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Earn"
                      show={openDropdown === 'Earn'}
                      onMouseEnter={() => handleMouseEnter('Earn')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <NavDropdown.Item to="/earn1" as={NavLink}>Earn 1</NavDropdown.Item>
                      <NavDropdown.Item to="/earn2" as={NavLink}>Earn 2</NavDropdown.Item>
                      <NavDropdown.Item to="/earn3" as={NavLink}>Earn 3</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Institution"
                      show={openDropdown === 'Institution'}
                      onMouseEnter={() => handleMouseEnter('Institution')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <NavDropdown.Item to="/institution1" as={NavLink}>Institution 1</NavDropdown.Item>
                      <NavDropdown.Item to="/institution2" as={NavLink}>Institution 2</NavDropdown.Item>
                      <NavDropdown.Item to="/institution3" as={NavLink}>Institution 3</NavDropdown.Item>
                    </NavDropdown>
                    {/* <NavDropdown
                      title="Web 3"
                      show={openDropdown === 'Web 3'}
                      onMouseEnter={() => handleMouseEnter('Web 3')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <NavDropdown.Item to="/web3-1" as={NavLink}>Web 3 - 1</NavDropdown.Item>
                      <NavDropdown.Item to="/web3-2" as={NavLink}>Web 3 - 2</NavDropdown.Item>
                      <NavDropdown.Item to="/web3-3" as={NavLink}>Web 3 - 3</NavDropdown.Item>
                    </NavDropdown> */}
                    <NavDropdown
                      title="More"
                      show={openDropdown === 'More'}
                      onMouseEnter={() => handleMouseEnter('More')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <NavDropdown.Item to="/more1" as={NavLink}>More 1</NavDropdown.Item>
                      <NavDropdown.Item to="/more2" as={NavLink}>More 2</NavDropdown.Item>
                      <NavDropdown.Item to="/more3" as={NavLink}>More 3</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link to="/" className='mx-lg-2 Navbar-link reward-link' as={NavLink}>Reward Hub</Nav.Link>

                    <div className="search-bar">
                      <input type="search" placeholder='search ' className='input-search' />
                      <SearchIcon className='search-icon' />
                    </div>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>

            </div>
            <div className="RHS">
              <div className="login-sigup">
                <NavLink to='login' className='nav-login-btn' > Login</NavLink>
                <NavLink to='login' className='nav-signup-btn' > Sign Up </NavLink>
                <div className="download-icon">
                 <DownloadIcon/>
                </div>

                <div className="global-icon">
                  <PublicIcon/>
                </div>

                <div className="usd-icony">
                  <button className='usd-icon'> USD </button>
                </div>

              </div>



            </div>
          </div>
          <Navbar.Toggle aria-controls="offcanvasNavbar" className='pe-0' onClick={handleToggleClick} />
        </Navbar>
      </Container>
    </>
  );
};

export default Header;







