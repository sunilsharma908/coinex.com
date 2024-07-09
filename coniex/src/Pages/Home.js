import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import EastIcon from '@mui/icons-material/East';
import bannerRightImg from '../Assests/Images/bgIMG.png'
import {QRCodeSVG} from 'qrcode.react';
export default function Home() {
    return (
        <div className='main-home'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="banner-sec">
                            <div className="coinex-heading">
                                <h1> Find the Next <br />

                                    <span className='spefic-content'> Crypto Gem</span> on Coinex
                                </h1>
                                <p className='coinex-heading-des'>
                                    1 Out of 4 Crypto Holders Worldwide Is with KuCoin
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
                                <div className="qr-code-scn">
                                <QRCodeSVG value="https://reactjs.org/" height="210" width="211" />,
                                </div>
                        </div>
                    </Col>
                    <div className="for-static-slider">
                        <Row>
                            <Col lg={3}>
                                <div className="s-slider-main">
                                    <div className="s-slider-heading">
                                        <h2> 200 + </h2>
                                    </div>
                                    <div className="s-slider-des">
                                        <p> Countries Covered</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="s-slider-main">
                                    <div className="s-slider-heading">
                                        <h2> 200 + </h2>
                                    </div>
                                    <div className="s-slider-des">
                                        <p> Countries Covered</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="s-slider-main">
                                    <div className="s-slider-heading">
                                        <h2> 200 + </h2>
                                    </div>
                                    <div className="s-slider-des">
                                        <p> Countries Covered</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="s-slider-main">
                                    <div className="s-slider-heading"> 
                                    <h2>  $1.84 Billion </h2>
                                    </div>
                                    <div className="s-slider-des">
                                        <p> Countries Covered</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
