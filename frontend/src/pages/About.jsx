import React, { useEffect, useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import aboutImg from '../assets/images/aboutImg.jpg';
import aboutImg1 from '../assets/images/aboutImg1.jpg';
import vacations from '../assets/images/vacations.jpg';

import {Link} from "react-router-dom"
import '../styles/about.css';
const About = () => {
  const [typedText, setTypedText] = useState('');
  const targetText = "We Provide You Best Sightseeing Tours";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setTypedText(targetText.substring(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === targetText.length) {
        clearInterval(intervalId);
      }
    }, 80); // Adjust the interval duration as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className='about-hero'>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src={aboutImg}
            style={{
              height: 400,
            }}
            width="100%"
          />
          <CardImgOverlay className='about-us'> 
            <CardTitle tag="h1" className="about-hero-title">
              About Us
            </CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
      <div className="container col-xxl-8 px-4 py-5 about-hero-container">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 about-hero-img">
            <img
              src={aboutImg1}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6 about-hero-head">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{typedText}</h1>
            <p class="lead">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/tours">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 about-hero-btn">
                View Packages
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='about-hero-2 about-hero'>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src={vacations}
            style={{
              height: 400,
            }}
            width="100%"
          />
          <CardImgOverlay className='about-us'> 
            <CardTitle tag="h1" className="about-hero-title">
         Let's Make Your Next Holiday Amazing
            </CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    
    </div>
  );
};

export default About;

