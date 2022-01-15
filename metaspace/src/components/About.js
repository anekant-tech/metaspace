import React from "react";
import first from './first.jpg';
import second from './second.jpg';
import third from './third.png';

const About = () => {
  return (
    <div  id ="1" className=" container my-5" >
      <h1
        data-w-id="90bcfbf5-aef5-60c6-b165-e529c88fcdb7"
        style={{
          opacity: "1",
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
        className="h2"
      >
        Why $Meta <span className="clipped">Space</span>
      </h1>
      
      <div className="w-layout-grid metaspace-grid">
        <div
          id="w-node-_342881ad-160e-39c8-4a1c-5c393eb5b281-c8b88d2a"
          data-w-id="342881ad-160e-39c8-4a1c-5c393eb5b281"
          style={{transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",transformStyle: "preserve-3d", opacity: "1"}}
          className="metsspace-block"
        >
          <h1 className="h3">Anti-Whale</h1>
          <p className="body-text">
            All holders of MetaSpace will be protected from dumping &amp; whales
            coming into the project attempting to own too large of a supply. We
            only want to attract firm believers in the project and steadily
            grow.
          </p>
        </div>
        <div
          data-w-id="0dcf7341-0a28-10c9-1cb6-cea4a37710a4"
          style={{transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",transformStyle: "preserve-3d", opacity: "1"}}
          className="metsspace-block"
        >
          <h1 className="h3">Marketing</h1>
          <p className="body-text">
            The Space Invaders team is filled with well versed marketers that
            have worked on some of the largest projects in the BSC space. We're
            growing MetaSpace across all social media platforms.
          </p>
        </div>
        <div
          data-w-id="9d29fef6-b37c-1d9a-2c7b-4b2acf86ce7a"
          style={{transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",transformStyle: "preserve-3d", opacity: "1"}}
          className="metsspace-block"
        >
          <h1 className="h3">Gaming</h1>
          <p className="body-text">
            Play to earn gaming is the future and MetaSpace is striving to be a
            part of that future. We want to be a player in this new direction
            gaming is headed and that's why we have a team of 5 game developers.
          </p>
        </div>
      </div>
      <div id="carouselExampleIndicators" className="carousel slide my-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={first} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={second} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={third} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
};

export default About;
