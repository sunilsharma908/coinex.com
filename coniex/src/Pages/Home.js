import React, { useEffect } from 'react';
import { Container, Row, Col, } from 'react-bootstrap'
import EastIcon from '@mui/icons-material/East';
import bannerRightImg from '../Assests/Images/bgIMG.png'
import { QRCodeSVG } from 'qrcode.react';
import { CountUp } from 'countup.js';
import time from '../Assests/Images/time.png';
import tableImg from '../Assests/Images/tableimg.png';
import cryptoImg from '../Assests/Images/cryptoImg.png';
import { East } from '@mui/icons-material';
import {Link , NavLink} from 'react-router-dom';
import { siteName } from '../Config/Config';

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
            <Container>
                <Row>
                    

                </Row>
            </Container>

            { /* ----------------- Product service section end   ----------------- */}




        </>
    )
}
