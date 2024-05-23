import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const serviceData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Stay prepared with real-time weather updates for your travels.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Explore with confidence, guided by the best tour experts.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Tailor your journey with fully customizable itineraries.",
    },
]

const ServiceList = () => {
  return (
    <>
        {serviceData.map((item, index) => (
            <Col lg = "3" md="6" sm="12" className="mb-4" key = {index}>
                <ServiceCard item = {item} />
            </Col>
        ))}
    </>
  )
}

export default ServiceList