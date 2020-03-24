import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../images/dwarf.jpg";
import Image2 from "../images/azaelindia.jpg";
import Image4 from "../images/DwarfINC.jpg";
import Image5 from "../images/payingguest.jpg";
import Image6 from "../images/trex.gif";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <Carousel
        centerMode
        centerSlidePercentage={70}
        emulateTouch
        autoPlay
        interval={1000}
        infiniteLoop
      >
        <div>
          <img src={Image1} />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img src={Image2} />
        </div>

        <div>
          <img src={Image4} />
        </div>

        <div>
          <img src={Image5} />
        </div>

        <div>
          <img src={Image6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Projects;
