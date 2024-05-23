import React from 'react'
import "./newsletter.css";

import { Container, Row, Col } from "reactstrap";
import maleToursit from "../assets/images/male-tourist.png";


const Newsletter = () => {
  return (
  <section className='newsletter'>
    <Container>
        <Row>
            <Col lg = "6">
                <div className="newsletter__content">
                    <h2>Please review our travelling places.</h2>

                    {/* <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div> */}

                    <p>Our Traveling Places offers a diverse selection of destinations, 
                        catering to every wanderlust's dream. From exotic beaches to historic
                         landmarks, each location promises an unforgettable adventure. With
                          detailed insights and seamless booking options, it's the ultimate 
                          companion for every traveler.
                    </p>
                </div>
            </Col>
            <Col lg = "6">
                <div className="newsletter__img">
                    <img src={maleToursit} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Newsletter