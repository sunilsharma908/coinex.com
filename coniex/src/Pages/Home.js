import React, { useEffect } from 'react';
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
import { siteName } from '../Config/Config';
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
export default function Home() {

    // for counter 

    useEffect(() => {
        const countUpOptions = {
            duration: 2, // duration in seconds
            separator: ',', // adds a separator for thousands
        };

        const counters = [
            new CountUp('count1', 200, countUpOptions),
            new CountUp('count2', 200, countUpOptions),
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

    return (
        <>
            { /* ----------------- banner section start  ----------------- */}
            <div className="banner-section-main-div">
            <div className='main-home'>
                
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="banner-sec">
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
                            <div className="banner-sec-right">
                                <div className="banner-sec-right-img">
                                    <img src={bannerRightImg} alt="" />
                                </div>
                                <div className="qr-code-sec">
                                    <div className="qr-des-top">
                                        <p> Scan QR Code to Download App </p>
                                    </div>
                                    <div className="qr-code-scn">
                                        <QRCodeSVG value="https://reactjs.org/" height="210" width="211" />,
                                    </div>
                                    <div className="qr-des-bottom">
                                        <Link to='/'>View More <EastIcon className='right-icon' /> </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <div className="for-static-slider">
                            <Row>
                                <Col lg={3}>
                                    <div className="s-slider-main">
                                        <div className="s-slider-heading">
                                            <h2 id="count1">0</h2>
                                        </div>
                                        <div className="s-slider-des">
                                            <p>Countries Covered</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="s-slider-main">
                                        <div className="s-slider-heading">
                                            <h2 id="count2">0</h2>
                                        </div>
                                        <div className="s-slider-des">
                                            <p>Countries Covered</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="s-slider-main">
                                        <div className="s-slider-heading">
                                            <h2 id="count3">0</h2>
                                        </div>
                                        <div className="s-slider-des">
                                            <p>Countries Covered</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="s-slider-main">
                                        <div className="s-slider-heading">
                                            <h2 id="count4">0</h2>
                                        </div>
                                        <div className="s-slider-des">
                                            <p>Revenue Generated</p>
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
                    <div className="market-sec-heading">
                        <h1> Crypto Market Today </h1>
                        <Link> View all 700+ Coins <EastIcon /></Link>
                    </div>
                    <div className="market-time-sec">
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
                    </div>
                    <Row>
                        <Col lg={4}>

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
                        <Col lg={4}>

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
                        <Col lg={4}>

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
                            <div className="crypto-box">
                                <img src={cryptoImg} alt="" className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={8}>
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
                        <div className="pro-ser-heading">
                            <h2> Explore {siteName} Products & Services</h2>
                        </div>
                        <div className="product-service-cards">
                            <Row>
                                <Col lg={6}>
                                    <div className="pro-ser-box">
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
                                <Col lg={6}>
                                    <div className="pro-ser-box">
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
                                <Col lg={6}>
                                    <div className="pro-ser-box">
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
                                <Col lg={6}>
                                    <div className="pro-ser-box">
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
                                <Col lg={6}>
                                    <div className="pro-ser-box">
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
                                <Col lg={6}>
                                    <div className="pro-ser-box">
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
            =

            { /* ----------------- Product service section end   ----------------- */}

            { /* ----------------- Safe and trusted section start    ----------------- */}
            <div className="safe-trusted-main-section">
            <div className="safe-trusted">
                <Container>
                    <div className="safe-sec-heading">
                        <h1>Your Safe and Trusted Crypto Exchange</h1>
                    </div>
                    <div className="safe-learn-more">
                        <button className='safe-learn-more'> Learn More </button>
                    </div>

                    <Row>
                        <Col lg={3}>

                            <div className="safe-cards">
                                <div className="s-card">
                                    <div className="s-card-img">
                                        <img src={safe} alt="" className='img-fluid' />
                                    </div>
                                    <div className="s-card-tite">
                                        <h5> Secure Asset Storage</h5>
                                    </div>
                                    <div className="s-card-des">
                                        <p> Our industry-leading encryption and storage systems ensure that your assets are always safe and secure.</p>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col lg={3}>

                            <div className="safe-cards">
                                <div className="s-card">
                                    <div className="s-card-img">
                                        <img src={security1} alt="" className='img-fluid' />
                                    </div>
                                    <div className="s-card-tite">
                                        <h5> Secure Asset Storage</h5>
                                    </div>
                                    <div className="s-card-des">
                                        <p> Our industry-leading encryption and storage systems ensure that your assets are always safe and secure.</p>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col lg={3}>

                            <div className="safe-cards">
                                <div className="s-card">
                                    <div className="s-card-img">
                                        <img src={Security2} alt="" className='img-fluid' />
                                    </div>
                                    <div className="s-card-tite">
                                        <h5> Secure Asset Storage</h5>
                                    </div>
                                    <div className="s-card-des">
                                        <p> Our industry-leading encryption and storage systems ensure that your assets are always safe and secure.</p>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col lg={3}>

                            <div className="safe-cards">
                                <div className="s-card">
                                    <div className="s-card-img">
                                        <img src={security3} alt="" className='img-fluid' />
                                    </div>
                                    <div className="s-card-tite">
                                        <h5> Secure Asset Storage</h5>
                                    </div>
                                    <div className="s-card-des">
                                        <p> Our industry-leading encryption and storage systems ensure that your assets are always safe and secure.</p>
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
                    <Col lg={6}>
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

                        <div className="digital-media-app d-flex">
                            <div className="d-app">
                                <p> <span> <img src={appstore} alt="" /> </span> App Store </p>
                            </div>
                            <div className="d-app">
                                <p> <span> <img src={playstore} alt="" /> </span> Google play  </p>
                            </div>
                            <div className="d-app">
                                <p> <span> <img src={android} alt="" /></span> APK </p>
                            </div>
                            <div className="d-app">
                                <p> <span> <img src={api} alt="" /></span> API </p>
                            </div>
                        </div>


                    </Col>
                    <Col lg={6}>
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
                        <Accordion.Header>What is blockChain technology?</Accordion.Header>
                        <Accordion.Body >
                          It's very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1" className='accor-item'>
                        <Accordion.Header> How its work ?</Accordion.Header>
                        <Accordion.Body id="accordian-body">
                          It's very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3" className='accor-item'>
                        <Accordion.Header>Who created bitcoin ?</Accordion.Header>
                        <Accordion.Body>
                          It's very simple! Register here. In your personal account, create a wallet where you can store your FOX tokens. Then just send any amount to the displayed address in your office.
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
                    </Accordion>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
            { /* ----------------- Accordian-section-end     ----------------- */}









        </>
    )
}
