import React from 'react';
import Slider from "react-slick";

import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonial = () => {
    const settings = {
        dots:true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoints: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoints: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]

    }
  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>The moment I began planning my trip, the platform provided
             seamless customization options, allowing me to tailor every aspect of my 
             journey. The real-time weather updates kept me well-prepared, and the 
             knowledgeable tour guides ensured that I made the most of every destination. 
             
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h5 className='mb-0 mt-3'>John Doe</h5>
                <p>Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>Booking through your website was a breeze, and the personalized recommendations 
            made choosing my itinerary effortless. The attention to detail and level of 
            support exceeded my expectations, 
            leaving me with nothing but fond memories of my travels.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h5 className='mb-0 mt-3'>Lia Franklin</h5>
                <p>Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>Your website's user-friendly interface made planning my trip a pleasure, 
            and the seamless booking process gave me confidence in my travel arrangements.
             With your expert guidance and comprehensive services, 
            I embarked on a journey filled with unforgettable moments and newfound adventures.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h5 className='mb-0 mt-3'>Tom Willsmith</h5>
                <p>Customer</p>
            </div>
        </div>
    </div>
    
    <div className="testimonial py-4 px-3">
        <p>From start to finish, your travel website exceeded my expectations. 
            The ease of navigation, coupled with personalized assistance, made 
            planning my trip a delight. Thanks to your meticulous attention to 
            detail and top-notch service, I enjoyed a seamless and unforgettable 
            travel experience.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h5 className='mb-0 mt-3'>Tom Willsmith</h5>
                <p>Customer</p>
            </div>
        </div>
    </div>
  </Slider>

}

export default Testimonial