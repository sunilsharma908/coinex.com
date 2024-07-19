
import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import coinexLogo from '../Assests/Images/coinex.jpeg'
import DownloadIcon from '@mui/icons-material/Download';
import PublicIcon from '@mui/icons-material/Public';
import fastTag from '../Assests/Images/fasttag.png';
import EastIcon from '@mui/icons-material/East';
import p2p from '../Assests/Images/p2p.png';
import fiaticon from '../Assests/Images/fiat-deposit.png';
import thirdpartyimg from '../Assests/Images/third-party.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import circleprogress from '../Assests/Images/preloadergif.gif';
import { siteLogo, siteName } from '../Config/Config';
import LanguageModal from '../Components/LanguageModal'
const Header = () => {


  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);


  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setIsLoading(true);

    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 5000000000); // Adjust the timeout as needed
  };

  const handleMouseEnter = (dropdown) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(dropdown);
  };

  const handleClick = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  const handleToggleClick = () => {
    setOpenDropdown(null);
  };

  const handleCancel = () => {
    setIsLoading(false);
    setSearchText('');
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
        <Navbar expand="xl" className='navbar mb-3 navbar-expand-xl  fixed-top'>
          <Navbar.Brand className='nav-brand-logo'>
            <img src={siteLogo} alt="" className='coinex-logo-img' />

          </Navbar.Brand>

          <div className="main-div-for-flex">
            <div className="LHS">
              <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                <Offcanvas.Header closeButton className={isLoading ? 'loading' : ''} >
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    <div className="offcanvas-search">
                      <input
                        type="search"
                        placeholder='Search'
                        className='form-control my-input'
                        onChange={handleSearchChange}
                      />
                      <SearchIcon className='its-search-icon' />
                    </div>
                    {!isLoading && (
                      <div className="for-signup-btn-offcanvas">
                        <button className='nav-signup-btn-offcav'> Login </button>
                        <button className='nav-signup-btn-offcav-s'> Sign Up </button>
                      </div>
                    )}
                  </Offcanvas.Title>
                  {isLoading && (
                    <button type="button" className="btn for-cusomize" onClick={handleCancel}>
                      Cancel
                    </button>
                  )}
                </Offcanvas.Header>
                <Offcanvas.Body className='offcanvas-custom-body'>


                  {isLoading ? (
                    <div className="loading-spinner">
                      <img src={circleprogress} alt="" className='img-fluid' />
                    </div>
                  ) : (
                    <Nav className="flex-grow-1 pe-3">
                      <NavDropdown
                        title="Buy Crypto"
                        show={openDropdown === 'Buy Crypto'}
                        onClick={() => handleClick('Buy Crypto')}
                        onMouseEnter={() => handleMouseEnter('Buy Crypto')}
                        onMouseLeave={handleMouseLeave}
                        className='for-crypto-title for-title'

                      >

                        <div className="dro-main ">
                          <div className="drop-first">
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={fastTag} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p> Fast Trade</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Buy crypto with visa, Mastercard , fiat <br />
                                      balacne </p>

                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={fiaticon} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p> Fiat Deposit </p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Top up fiat balance via bank transfer  </p>

                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={p2p} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p>P2P</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Bank transfer and 20+ options </p>
                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={thirdpartyimg} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p>Third-Party</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Binexa Simplex , BTC direct etc  </p>
                                  </div>

                                </div>

                              </div>

                            </NavDropdown.Item>

                          </div>
                          <div className="drop-second">
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={fastTag} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p> Fast Trade</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Buy crypto with visa, Mastercard , fiat <br />
                                      balacne </p>

                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={fiaticon} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p> Fiat Deposit </p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Top up fiat balance via bank transfer  </p>

                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={p2p} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p>P2P</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Bank transfer and 20+ options </p>
                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={thirdpartyimg} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p>Third-Party</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Binexa Simplex , BTC direct etc  </p>
                                  </div>

                                </div>

                              </div>

                            </NavDropdown.Item>

                          </div>
                        </div>

                      </NavDropdown>
                      <Link className="market-link"> Market </Link>
                      <NavDropdown
                        title="Trades"
                        show={openDropdown === 'Trades'}
                        onClick={() => handleClick('Trades')}
                        onMouseEnter={() => handleMouseEnter('Trades')}
                        onMouseLeave={handleMouseLeave}
                        className='for-title'
                      >
                        <div className="dro-main d-flex">
                          <div className="drop-first">
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={fastTag} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p> Fast Trade</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Buy crypto with visa, Mastercard , fiat <br />
                                      balacne </p>

                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={fiaticon} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p> Fiat Deposit </p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Top up fiat balance via bank transfer  </p>

                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={p2p} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p>P2P</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Bank transfer and 20+ options </p>
                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={thirdpartyimg} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p>Third-Party</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Binexa Simplex , BTC direct etc  </p>
                                  </div>

                                </div>

                              </div>

                            </NavDropdown.Item>

                          </div>

                        </div>
                      </NavDropdown>
                      <NavDropdown
                        title="Derivative"
                        show={openDropdown === 'Derivative'}
                        onClick={() => handleClick('Derivative')}
                        onMouseEnter={() => handleMouseEnter('Derivative')}
                        onMouseLeave={handleMouseLeave}
                        className='for-title'
                      >
                        <div className="dro-main d-flex">
                          <div className="drop-first">
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={fastTag} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p> Fast Trade</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Buy crypto with visa, Mastercard , fiat <br />
                                      balacne </p>

                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={fiaticon} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p> Fiat Deposit </p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Top up fiat balance via bank transfer  </p>

                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={p2p} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p>P2P</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Bank transfer and 20+ options </p>
                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={thirdpartyimg} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p>Third-Party</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Binexa Simplex , BTC direct etc  </p>
                                  </div>

                                </div>

                              </div>

                            </NavDropdown.Item>

                          </div>

                        </div>
                      </NavDropdown>

                      <NavDropdown
                        title="Institution"
                        show={openDropdown === 'Institution'}
                        onClick={() => handleClick('Institution')}
                        onMouseEnter={() => handleMouseEnter('Institution')}
                        onMouseLeave={handleMouseLeave}
                        className='for-title'
                      >
                        <div className="dro-main d-flex">
                          <div className="drop-first">
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={fastTag} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p> Fast Trade</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Buy crypto with visa, Mastercard , fiat <br />
                                      balacne </p>

                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={fiaticon} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p> Fiat Deposit </p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Top up fiat balance via bank transfer  </p>

                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={p2p} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p>P2P</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Bank transfer and 20+ options </p>
                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={thirdpartyimg} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p>Third-Party</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Binexa Simplex , BTC direct etc  </p>
                                  </div>

                                </div>

                              </div>

                            </NavDropdown.Item>

                          </div>

                        </div>
                      </NavDropdown>

                      <NavDropdown
                        title="More"
                        show={openDropdown === 'More'}
                        onClick={() => handleClick('More')}
                        onMouseEnter={() => handleMouseEnter('More')}
                        onMouseLeave={handleMouseLeave}
                        className='for-title'
                      >
                        <div className="dro-main">
                          <div className="drop-first">
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={fastTag} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p> Fast Trade</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Buy crypto with visa, Mastercard , fiat <br />
                                      balacne </p>

                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={fiaticon} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p> Fiat Deposit </p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Top up fiat balance via bank transfer  </p>

                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={p2p} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p>P2P</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Bank transfer and 20+ options </p>
                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={thirdpartyimg} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p>Third-Party</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Binexa Simplex , BTC direct etc  </p>
                                  </div>

                                </div>

                              </div>

                            </NavDropdown.Item>

                          </div>
                          <div className="drop-second">
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={fastTag} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p> Fast Trade</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Buy crypto with visa, Mastercard , fiat <br />
                                      balacne </p>

                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={fiaticon} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p> Fiat Deposit </p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Top up fiat balance via bank transfer  </p>

                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={p2p} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p>P2P</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Bank transfer and 20+ options </p>
                                  </div>

                                </div>

                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/buy-cropto1" as={NavLink}>
                              <div className="d-menu-link">
                                <div className="d-m-img">
                                  <img src={thirdpartyimg} alt="" className='img-fluid' />
                                </div>
                                <div className="d-m-content">
                                  <div className="d-c-title">
                                    <p>Third-Party</p>
                                  </div>
                                  <div className="d-c-des">
                                    <p> Binexa Simplex , BTC direct etc  </p>
                                  </div>

                                </div>

                              </div>

                            </NavDropdown.Item>

                          </div>
                        </div>
                      </NavDropdown>
                      <Nav.Link to="/" className=' Navbar-link reward-link' as={NavLink}>Reward Hub</Nav.Link>

                      <div className="search-bar">
                        <input type="search" placeholder='search ' className='input-search' />
                        <SearchIcon className='search-icon' />

                      </div>

                    </Nav>


                  )}
                </Offcanvas.Body>

              </Navbar.Offcanvas>

            </div>
            <div className="RHS">
              <div className="login-sigup">
                <NavLink to='login' className='nav-login-btn' > Login</NavLink>
                <NavLink to='signup' className='nav-signup-btn' > Sign Up </NavLink>
                <div className="rhs-icon ">
                  <div className="download-icon">
                    <NavLink to="/">
                      <DownloadIcon />
                    </NavLink>
                  </div>
                  {/* <div className="global-icon">
                    <NavLink onClick={toggleDropdown}>
                      <PublicIcon />
                    </NavLink
                  </div> */}

                  <Dropdown>
                    <div className="global-icon">
                      <NavLink onClick={toggleDropdown}>
                        <PublicIcon />
                      </NavLink>
                    </div>


                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="usd-icony">
                    <NavLink>
                      <button className='usd-icon'> USD </button>
                    </NavLink>
                  </div>
                </div>
                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleToggleClick} />
              </div>
            </div>

          </div>

        </Navbar>
      </Container>
    </>
  )
};

export default Header;







