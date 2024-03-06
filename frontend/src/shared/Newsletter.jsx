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
                    <h2>Subscribe to get useful travelling information.</h2>

                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptate, accusantium?
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