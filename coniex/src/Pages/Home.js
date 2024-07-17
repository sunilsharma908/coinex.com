import React, { useEffect, useState } from 'react';
import { Container, Row, Col, } from 'react-bootstrap'
import EastIcon from '@mui/icons-material/East';
import bannerRightImg from '../Assests/Images/bgIMG.png'
import { QRCodeSVG } from 'qrcode.react';
import { CountUp } from 'countup.js';
import time from '../Assests/Images/time.png';
import tableImg from '../Assests/Images/tableimg.png';
import cryptoImg from '../Assests/Images/cryptoImg.png';
import { Earbuds, East } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import { siteName, siteLogo } from '../Config/Config';
import productImg from '../Assests/Images/productImg.png';
import safe from '../Assests/Images/safe.png';
import security1 from '../Assests/Images/security.png';
import Security2 from '../Assests/Images/setupbox.png';
import security3 from '../Assests/Images/box.png'
import trading from '../Assests/Images/trading.png';
import qrcode from '../Assests/Images/qr code.png';
import appstore from '../Assests/Images/apple-logo.png'
import playstore from '../Assests/Images/play-button (1).png'
import api from '../Assests/Images/appstore.png';
import android from '../Assests/Images/android.png';
import Accordion from 'react-bootstrap/Accordion';
import { Slider } from '@mui/material';
import ImageSlider from '../Components/ImageSlider';
import signupImg from '../Assests/Images/register-bg.03006533.svg';
import ImageMarquee from '../Components/ImageMarquee';
import Aos from 'aos';
import 'aos/dist/aos.css'


export default function Home() {

    // for counter 
    const initialTime = 25 * 3600 + 4 * 60 + 41; // Initial time in seconds (25h 04m 41s)
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timerId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft]);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return { hours, minutes, seconds };
    };

    const { hours, minutes, seconds } = formatTime(timeLeft);

    useEffect(() => {
        const countUpOptions = {
            duration: 2, // duration in seconds
            separator: ',', // adds a separator for thousands
        };

        const counters = [
            new CountUp('count1', 200, countUpOptions),
            new CountUp('count2', 30, '30 Million', countUpOptions),
            new CountUp('count3', 200, countUpOptions),
            new CountUp('count4', 1530, countUpOptions) // $1.53 Billion
        ];

        counters.forEach((counter, index) => {
            if (!counter.error) {
                counter.start(() => {
                    if (index < 3) {
                        document.getElementById(`count${index + 1}`).innerHTML += '+';
                    } else {
                        document.getElementById('count4').innerHTML = '$' + counter.endVal.toLocaleString();
                    }
                });
            } else {
                console.error(counter.error);
            }
        });
    }, []);

    // aos js start 
    useEffect(() => {
        Aos.init({ duration: 2000 });

    }, [])
    // aos js end 

    return (
        <>
            { /* ----------------- banner section start  ----------------- */}
            <div className="banner-section-main-div">
                <div className='main-home'>

                    <Container>
                        <Row>
                            <Col lg={6}>
                                <div className="banner-sec" data-aos="zoom-in">
                                    <div className="coinex-heading">
                                        <h1> Find the Next <br />

                                            <span className='spefic-content'> Crypto Gem</span> on {siteName}
                                        </h1>
                                        <p className='coinex-heading-des'>
                                            1 Out of 4 Crypto Holders Worldwide Is with {siteName}
                                        </p>
                                    </div>
                                    <div className="email-form">
                                        <form action="">
                                            <div className="input-field">
                                                <input type="text" placeholder='Email/ Phone Number' className='form-control' />
                                                <button className='sign-up-btn'> Sign Up Now <EastIcon /> </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>


                            </Col>
                            <Col lg={6}>
                                <div className="banner-sec-right" >
                                    <div className="banner-sec-right-img">
                                        <img src={bannerRightImg} alt="" />
                                    </div>
                                    <div className="qr-code-sec" data-aos="zoom-in">
                                        <div className="qr-des-top">
                                            <p> Scan QR Code to Download App </p>
                                        </div>
                                        <div className="qr-code-scn">
                                            <QRCodeSVG value="https://reactjs.org/" className='for-qr-code-img' />,
                                            <div className="home-site-logo">
                                                <img src={siteLogo} alt="" />
                                            </div>
                                        </div>
                                        <div className="qr-des-bottom">
                                            <Link to='/'>View More <EastIcon className='right-icon' /> </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <div className="for-static-slider"  >
                                <Row>
                                    <Col lg={3} sm={6} xs={6}>
                                        <div className="s-slider-main b-left  " data-aos="fade-up">
                                            <div className="s-slider-heading">
                                                <h2 id="count1">0</h2>
                                            </div>
                                            <div className="s-slider-des">
                                                <p>Countries Covered</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} sm={6} xs={6}>
                                        <div className="s-slider-main" data-aos="fade-up">
                                            <div className="s-slider-heading">
                                                <h2 id="count2">0</h2>
                                            </div>
                                            <div className="s-slider-des">
                                                <p>
                                                    Global Investors</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} sm={6} xs={6} data-aos="fade-up">
                                        <div className="s-slider-main">
                                            <div className="s-slider-heading">
                                                <h2 id="count3">0</h2>
                                            </div>
                                            <div className="s-slider-des">
                                                <p>Coins</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} sm={6} xs={6} data-aos="fade-up">
                                        <div className="s-slider-main">
                                            <div className="s-slider-heading">
                                                <h2 id="count4">0</h2>
                                            </div>
                                            <div className="s-slider-des">
                                                <p>
                                                    24h Trading Volume</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>



            {/* <ImageSlider/> */}
            { /* ----------------- banner  section end  ----------------- */}

            { /* ----------------- Market section start  ----------------- */}

            <div className="market-section">
                <Container>
                    <div className="market-sec-heading" data-aos="fade-up">
                        <h1> Crypto Market Today </h1>
                        <Link> View all 700+ Coins <EastIcon /></Link>
                    </div>
                    {/* <div className="market-time-sec">
                        <div className="m-t-logo">
                            <div className="mt-img">
                                <img src={time} alt="" className='img-fluid' />
                            </div>
                            <div className="mt-logo-content">
                                <div className="mt-logo-top">
                                    <h5> XR</h5>
                                    <span className='market-listing-btn' > New Listing </span>
                                </div>
                                <div className="mt-logo-bottom">
                                    <h3> XRADERS </h3>
                                </div>
                            </div>

                        </div>

                        <div className="downgrading-clock">
                            <div className="clock-d-main">
                                <div className="d-hour-box   d-time-box ">
                                    25h
                                </div>
                                <div className="d-time-clock  d-time-box ">
                                    04m :
                                </div>
                                <div className="d-sec-clock  d-time-box">
                                    41s
                                </div>
                            </div>

                        </div>
                        <div className="market-subscribe">
                            <button className='ms-btn'>Subscribe  <EastIcon />  </button>
                        </div>
                    </div> */}
                    <div className="market-time-sec" data-aos="fade-up">
                        <div className="m-t-logo">
                            <div className="mt-img">
                                <img src={time} alt="" className='img-fluid' />
                            </div>
                            <div className="mt-logo-content">
                                <div className="mt-logo-top">
                                    <h5> XR</h5>
                                    <span className='market-listing-btn'> New Listing </span>
                                </div>
                                <div className="mt-logo-bottom">
                                    <h3> XRADERS </h3>
                                </div>
                            </div>
                        </div>

                        <div className="downgrading-clock">
                            <div className="clock-d-main">
                                <div className="d-hour-box d-time-box">
                                    {hours}h
                                </div>
                                <p className='dot'>:</p>

                                <div className="d-time-clock d-time-box">
                                    {minutes}m
                                </div>
                                <p className='dot'>:</p>
                                <div className="d-sec-clock d-time-box">
                                    {seconds}s
                                </div>
                            </div>
                        </div>
                        <div className="market-subscribe">
                            <button className='ms-btn'>Subscribe <EastIcon /></button>
                        </div>
                    </div>
                    <Row>
                        <Col lg={4} md={6} data-aos="fade-up">

                            <div className="market-table-lists">
                                <div className="table-list-name">
                                    <h3> Hot List </h3>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>

                            </div>

                        </Col>
                        <Col lg={4} md={6} data-aos="fade-up">

                            <div className="market-table-lists">
                                <div className="table-list-name">
                                    <h3> Hot List </h3>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>

                            </div>

                        </Col>
                        <Col lg={4} md={6} data-aos="fade-up">

                            <div className="market-table-lists">
                                <div className="table-list-name">
                                    <h3> Hot List </h3>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>
                                <div className="market-table-data">
                                    <div className="data-lhs">
                                        <div className="data-icon">
                                            <img src={tableImg} alt="" />
                                        </div>
                                        <div className="data-content">
                                            <p className='data-heading'> XEC </p>
                                            <p className='data-cash'>ecash</p>
                                        </div>
                                    </div>
                                    <div className="data-rhs">
                                        <p className='dollar-data'>
                                            $0.000003045
                                        </p>
                                        <p className='percent-data'>
                                            + 1.26 %
                                        </p>

                                    </div>
                                </div>

                            </div>

                        </Col>
                    </Row>


                </Container>

            </div>
            { /* ----------------- Market section end   ----------------- */}


            { /* ----------------- Crypto Exchange starts    ----------------- */}
            <div className="crypto-exchange-main">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="crypto-box" data-aos="fade-right">
                                <img src={cryptoImg} alt="" className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={8} data-aos="fade-left">
                            <div className="crypto-box-content">
                                <div className="crypto-box-heading">
                                    <h2> Try Our Crypto Exchage now </h2>
                                    <p> start trading to get up to <span> 8,200</span>  USDT in rewards ! </p>
                                </div>
                                <div className="crypto-box-link">
                                    <NavLink className="view-more-options"> View more benefits <EastIcon className='right-arrow' /> </NavLink>
                                </div>
                                <div className="crypto-signup-box">
                                    <div className="crypto-signup-content">
                                        <h3> Sign Up </h3>
                                        <button className='signup-btn'> Sign Up <EastIcon /> </button>
                                    </div>

                                    <p className='for-padding'>Sign Up and Claim  500 USDT  token +  200 USDT  coupon + 7500 USDT  Futures Trial Fund</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>

            { /* ----------------- Crypto Exchange ends   ----------------- */}

            { /* ----------------- Product service section start  ----------------- */}
            <div className="product-service-section">
                <Container>
                    <Row>
                        <div className="pro-ser-heading" data-aos="fade-up">
                            <h2> Explore {siteName} Products & Services</h2>
                        </div>
                        <div className="product-service-cards">
                            <Row>
                                <Col xl={6}>
                                    <div className="pro-ser-box" data-aos="fade-right">
                                        <div className="pro-ser-heading">
                                            <h2> Spot Trading </h2>
                                            <EastIcon />
                                        </div>
                                        <div className="pro-ser-des">
                                            <p className='pro-des-para'> Trade crypto with our comprehensive set of powerful tools to maximize your profits. </p>
                                            <div className="pro-ser-img">
                                                <img src={productImg} alt="" className='img-fluid' />

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="pro-ser-box" data-aos="fade-left">
                                        <div className="pro-ser-heading">
                                            <h2> Buy Crypto  </h2>
                                            <EastIcon />
                                        </div>
                                        <div className="pro-ser-des">
                                            <p className='pro-des-para'> Trade crypto with our comprehensive set of powerful tools to maximize your profits. </p>
                                            <div className="pro-ser-img">
                                                <img src={productImg} alt="" className='img-fluid' />

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="pro-ser-box" data-aos="fade-right">
                                        <div className="pro-ser-heading">
                                            <h2> Crypto Derivative  </h2>
                                            <EastIcon />
                                        </div>
                                        <div className="pro-ser-des">
                                            <p className='pro-des-para'> Trade crypto with our comprehensive set of powerful tools to maximize your profits. </p>
                                            <div className="pro-ser-img">
                                                <img src={productImg} alt="" className='img-fluid' />

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="pro-ser-box" data-aos="fade-left">
                                        <div className="pro-ser-heading">
                                            <h2> {siteName} Earn  </h2>
                                            <EastIcon />
                                        </div>
                                        <div className="pro-ser-des">
                                            <p className='pro-des-para'> Trade crypto with our comprehensive set of powerful tools to maximize your profits. </p>
                                            <div className="pro-ser-img">
                                                <img src={productImg} alt="" className='img-fluid' />

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="pro-ser-box" data-aos="fade-right">
                                        <div className="pro-ser-heading">
                                            <h2> Trading Bot </h2>
                                            <EastIcon />
                                        </div>
                                        <div className="pro-ser-des">
                                            <p className='pro-des-para'> Trade crypto with our comprehensive set of powerful tools to maximize your profits. </p>
                                            <div className="pro-ser-img">
                                                <img src={productImg} alt="" className='img-fluid' />

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="pro-ser-box" data-aos="fade-left">
                                        <div className="pro-ser-heading">
                                            <h2> Margin Trading </h2>
                                            <EastIcon />
                                        </div>
                                        <div className="pro-ser-des">
                                            <p className='pro-des-para'> Trade crypto with our comprehensive set of powerful tools to maximize your profits. </p>
                                            <div className="pro-ser-img">
                                                <img src={productImg} alt="" className='img-fluid' />

                                            </div>
                                        </div>
                                    </div>
                                </Col>

                            </Row>

                        </div>
                    </Row>
                </Container>

            </div>
            { /* ----------------- Product service section end   ----------------- */}

            { /* ----------------- Safe and trusted section start    ----------------- */}
            <div className="safe-trusted-main-section">
                <div className="safe-trusted">
                    <Container>
                        <div className="safe-sec-heading" data-aos="fade-up">
                            <h1>Your Safe and Trusted Crypto Exchange</h1>
                        </div>
                        <div className="safe-learn-more" data-aos="fade-up" >
                            <button className='safe-learn-more' > Learn More </button>
                        </div>

                        <Row>
                            <Col xl={3} md={6}>

                                <div className="safe-cards" data-aos="fade-up">
                                    <div className="s-card">
                                        <div className="s-card-img">
                                            <img src={safe} alt="" className='img-fluid' />
                                        </div>
                                        <div className="for-box-img-content">
                                            <div className="s-card-tite">
                                                <h5> Secure Asset Storage</h5>
                                            </div>
                                            <div className="s-card-des">
                                                <p> Our industry-leading encryption and storage systems ensure that your assets are always safe and secure.</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </Col>
                            <Col xl={3} md={6}>

                                <div className="safe-cards" data-aos="fade-up">
                                    <div className="s-card">
                                        <div className="s-card-img">
                                            <img src={security1} alt="" className='img-fluid' />
                                        </div>
                                        <div className='for-box-img-content'>
                                            <div className="s-card-tite">
                                                <h5> Secure Asset Storage</h5>
                                            </div>
                                            <div className="s-card-des">
                                                <p> Our industry-leading encryption and storage systems ensure that your assets are always safe and secure.</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </Col>
                            <Col xl={3} md={6}>

                                <div className="safe-cards" data-aos="fade-up">
                                    <div className="s-card">
                                        <div className="s-card-img">
                                            <img src={Security2} alt="" className='img-fluid' />
                                        </div>
                                        <div className='for-box-img-content'>
                                            <div className="s-card-tite">
                                                <h5> Secure Asset Storage</h5>
                                            </div>
                                            <div className="s-card-des">
                                                <p> Our industry-leading encryption and storage systems ensure that your assets are always safe and secure.</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </Col>
                            <Col xl={3} md={6}>

                                <div className="safe-cards" data-aos="fade-up">
                                    <div className="s-card">
                                        <div className="s-card-img">
                                            <img src={security3} alt="" className='img-fluid' />
                                        </div>
                                        <div className='for-box-img-content'>
                                            <div className="s-card-tite">
                                                <h5> Secure Asset Storage</h5>
                                            </div>
                                            <div className="s-card-des">
                                                <p> Our industry-leading encryption and storage systems ensure that your assets are always safe and secure.</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>

                </div>

            </div>

            { /* ----------------- Safe and trusted section end     ----------------- */}

            { /* ----------------- Safe and trusted Digital Investement      ----------------- */}
            <div className="digital-investment">
                <Container>
                    <Row>
                        <Col lg={6} data-aos="fade-right" className='for-digital-col' >
                            <div className="digttal-heading">
                                <h2> Make Digital Investment with Ease.</h2>
                                <p className='digital-des'>
                                    The Future of cryptocurrency exchange is here with Toobit. Instant access, simplified. Trading smoothly, amplified.
                                </p>
                            </div>
                            <div className="digital-scan-code">
                                <div className="scanner-img">
                                    <img src={qrcode} alt="" />

                                </div>
                                <div className="scanner-content">
                                    <p> Scan to Download </p>
                                    <p> iOS & Android </p>
                                </div>

                            </div>

                            {/* <div className="digital-media-app d-flex">
                                <div className="d-app">

                                    <p> <span> <img src={appstore} alt="" /> </span>  <span className='for-none'> App Store</span> </p>
                                </div>
                                <div className="d-app">
                                    <p> <span> <img src={playstore} alt="" /> </span> <span className='for-none'> Google play</span>   </p>
                                </div>
                                <div className="d-app">
                                    <p> <span> <img src={android} alt="" /></span> <span className='for-none'> APK </span>  </p>
                                </div>
                                <div className="d-app">
                                    <p> <span> <img src={api} alt="" /></span> <span className='for-none'> API </span>   </p>
                                </div>
                            </div> */}

                            <div className="digital-media-app d-flex">
                                <div className="d-app">
                                    <a href="your-appstore-link">
                                        <p>
                                            <span> <img src={appstore} alt="" /> </span>
                                            <span className='for-none'> App Store</span>
                                        </p>
                                    </a>
                                </div>
                                <div className="d-app">
                                    <a href="your-playstore-link">
                                        <p>
                                            <span> <img src={playstore} alt="" /> </span>
                                            <span className='for-none'> Google play</span>
                                        </p>
                                    </a>
                                </div>
                                <div className="d-app">
                                    <a href="your-apk-link">
                                        <p>
                                            <span> <img src={android} alt="" /></span>
                                            <span className='for-none'> APK </span>
                                        </p>
                                    </a>
                                </div>
                                <div className="d-app">
                                    <a href="your-api-link">
                                        <p>
                                            <span> <img src={api} alt="" /></span>
                                            <span className='for-none'> API </span>
                                        </p>
                                    </a>
                                </div>
                            </div>



                        </Col>
                        <Col lg={6} data-aos="fade-left">
                            <div className="rhs-digital-img">
                                <img src={trading} alt="" className='img-fluid' />

                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>

            { /* ----------------- Safe and trusted Digital Investement     ----------------- */}


            { /* ----------------- Accordian-section-starts     ----------------- */}
            <section className='accordian-section'>
                <Container>
                    <Row>
                        <Col>
                            <div className="accordian-main" data-aos="fade-up">
                                <div className="accordian-heading">
                                    <h1>Frequently Asked questions </h1>
                                </div>
                                <div className="accordians">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0" className='accor-item'>
                                            <Accordion.Header>What is cryptocurrency and how does it work?</Accordion.Header>
                                            <Accordion.Body >
                                                Cryptocurrency, also known as digital currency or virtual money, is a type of digital or electronic currency that operates on decentralized networks using blockchain technology. The operation of cryptocurrencies, including how transactions are conducted and verified, is based on a technology called blockchain. Here are a simplified explanation of how cryptocurrencies work: Blockchain Technology, Cryptographic Security, Transactions, Consensus Mechanism, Decentralization, and Mining Rewar
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1" className='accor-item'>
                                            <Accordion.Header> What products does Toobit provide?</Accordion.Header>
                                            <Accordion.Body id="accordian-body">
                                                Toobit is the world's leading cryptocurrency exchange, catering to more than 1 million registered users. With low fees and over 100 cryptocurrencies to trade, Toobit is the preferred exchange to trade Bitcoin, Ethereum, and other virtual assets. With Toobit users can: Trade hundreds of cryptocurrencies on Spot, Futures, and Copy Trading markets and buy exclusive hot tokens in advance with Speedzone.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3" className='accor-item'>
                                            <Accordion.Header>How to buy Bitcoin on Toobit?</Accordion.Header>
                                            <Accordion.Body>
                                                You can buy Bitcoin on Toobit with a credit, debit card, or USDT. Read our guide on How to Buy Crypto on Toobit for more information.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4" className='accor-item'>
                                            <Accordion.Header>How does cryptocurrency works ? </Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5" className='accor-item'>
                                            <Accordion.Header>How to invest in cryptocurrency? </Accordion.Header>
                                            <Accordion.Body>
                                                You can buy Bitcoin on Toobit with a credit, debit card, or USDT. Read our guide on How to Buy Crypto on Toobit for more information.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" className='accor-item'>
                                            <Accordion.Header>How to invest in cryptocurrency? </Accordion.Header>
                                            <Accordion.Body>
                                                You can buy Bitcoin on Toobit with a credit, debit card, or USDT. Read our guide on How to Buy Crypto on Toobit for more information.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            { /* ----------------- Accordian-section-end     ----------------- */}

            { /* ----------------- Welcome Bonous section starts     ----------------- */}
            <div className="welcome-bonous-main">
                <Container>
                    <Row>
                        <Col lg={4} data-aos="fade-right">
                            <div className="welcome-bonous-image">
                                <img src={signupImg} alt="" />
                            </div>

                        </Col>

                        <Col lg={8} data-aos="fade-left">
                            <div className="wel-bonous-content">
                                <div className="wel-bon-title">
                                    <h1> Register now and claim your welcome  bonus right away!</h1>
                                </div>
                                <div className="wel-bon-des">
                                    <p> Still wondering where to start with your crypto journey?</p>
                                </div>
                                <div className="bonous-signup-btn">
                                    <button className='b-signup-btn'> Sign Up <EastIcon className='east-icon' />  </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
            { /* ----------------- Welcome Bonous section ends      ----------------- */}
            { /* ----------------- Image Marquee starts       ----------------- */}
            <div className="marquee-section">
                <Container fluid>
                    <ImageMarquee />

                </Container>
            </div>

            { /* ----------------- Image Marquee ends       ----------------- */}












        </>
    )
}
